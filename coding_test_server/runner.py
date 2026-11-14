import contextlib
import io
import json
import math
import traceback


def make_dataset():
    import numpy as np

    rng = np.random.default_rng(2026)
    data = rng.normal(0, 1, size=(395, 33)).astype(np.float32)
    data[:, 30] = rng.normal(10, 2, size=395).astype(np.float32)
    data[:, 31] = rng.normal(10, 2, size=395).astype(np.float32)
    data[:, 32] = rng.normal(10, 2, size=395).astype(np.float32)
    for row, column in enumerate((8, 9, 11)):
        data[row::17, column] = np.nan
    header = ";".join(f"feature_{i}" for i in range(data.shape[1]))
    lines = [header]
    for row in data:
        lines.append(";".join("" if math.isnan(float(value)) else f"{value:.6f}" for value in row))
    return "\n".join(lines)


def require(namespace, name):
    if name not in namespace:
        raise AssertionError(f"Missing required variable: {name}")
    return namespace[name]


def check_shape(value, shape, name):
    if tuple(value.shape) != shape:
        raise AssertionError(f"{name} must have shape {shape}, got {tuple(value.shape)}.")


def check_task(task, namespace):
    import numpy as np
    import torch
    import torch.nn as nn

    checks = []
    if task == "A":
        value = require(namespace, "dataset_noisy")
        if not isinstance(value, np.ndarray) or value.dtype != np.float32:
            raise AssertionError("dataset_noisy must be a NumPy float32 array.")
        if value.ndim != 2 or value.shape[0] != 395 or value.shape[1] != 33:
            raise AssertionError("dataset_noisy must contain 395 samples and 33 columns.")
        if not np.isnan(value).any():
            raise AssertionError("dataset_noisy must preserve missing values as NaN.")
        checks.append("CSV loaded as a float32 array with missing values.")
    elif task == "B":
        noisy = require(namespace, "dataset_noisy")
        value = require(namespace, "dataset")
        if not isinstance(noisy, np.ndarray) or not isinstance(value, np.ndarray):
            raise AssertionError("dataset_noisy and dataset must be NumPy arrays.")
        check_shape(value, (395, 36), "dataset")
        if value.dtype != np.float32 or np.isnan(value).any():
            raise AssertionError("dataset must be float32 and contain no NaN values.")
        if not np.array_equal(np.unique(value[:, -3:]), np.array([0, 1], dtype=np.float32)):
            raise AssertionError("The final three columns must be binary indicators.")
        checks.append("Missing values were filled and three indicators were appended.")
    elif task == "C":
        train = require(namespace, "dataset_split_train")
        val = require(namespace, "dataset_split_val")
        test = require(namespace, "dataset_split_test")
        if any(not isinstance(item, np.ndarray) or item.ndim != 2 for item in (train, val, test)):
            raise AssertionError("All splits must be two-dimensional NumPy arrays.")
        if sum(item.shape[0] for item in (train, val, test)) != 395:
            raise AssertionError("The split sizes must add up to 395 samples.")
        if any(item.shape[1] != 36 or item.dtype != np.float32 for item in (train, val, test)):
            raise AssertionError("All splits must retain 36 float32 columns.")
        checks.append("Train, validation and test splits have compatible shapes.")
    elif task == "D":
        for name in ("dataloader_reg_train", "dataloader_reg_val", "dataloader_reg_test"):
            loader = require(namespace, name)
            inputs, labels = next(iter(loader))
            if inputs.dtype != torch.float32 or labels.dtype != torch.float32:
                raise AssertionError(f"{name} must return float32 tensors.")
            if inputs.ndim != 2 or labels.ndim != 2 or labels.shape[1] != 1:
                raise AssertionError(f"{name} returned an invalid regression batch shape.")
            if inputs.shape[1] != 35:
                raise AssertionError(f"{name} must have 35 input features.")
        checks.append("Regression DataLoaders return the required tensor dtypes and shapes.")
    elif task == "E":
        model = require(namespace, "reg_model")
        if not isinstance(model, nn.Module):
            raise AssertionError("reg_model must inherit from torch.nn.Module.")
        expected = (35 * 25 + 25) + (25 * 25 + 25) + (25 + 1)
        actual = sum(parameter.numel() for parameter in model.parameters() if parameter.requires_grad)
        if actual != expected:
            raise AssertionError(f"reg_model has {actual} trainable parameters; expected {expected}.")
        output = model(torch.zeros(2, 35))
        if tuple(output.shape) != (2, 1):
            raise AssertionError("reg_model must return shape (batch_size, 1).")
        checks.append("Regression model architecture and output shape are valid.")
    elif task == "F":
        value = require(namespace, "test_mse")
        if not isinstance(value, (float, int, np.floating)) or not np.isfinite(value) or value < 0:
            raise AssertionError("test_mse must be a finite non-negative scalar.")
        checks.append(f"Regression evaluation produced test_mse={float(value):.4f}.")
    elif task == "G":
        for name in ("dataloader_cl_train", "dataloader_cl_val", "dataloader_cl_test"):
            loader = require(namespace, name)
            inputs, labels = next(iter(loader))
            if inputs.dtype != torch.float32 or labels.dtype != torch.int64:
                raise AssertionError(f"{name} returned an invalid tensor dtype.")
            if inputs.ndim != 2 or labels.ndim != 1 or inputs.shape[1] != 33:
                raise AssertionError(f"{name} returned an invalid classification batch shape.")
            if not torch.all((labels >= 0) & (labels <= 2)):
                raise AssertionError(f"{name} labels must be in the range 0..2.")
        checks.append("Classification DataLoaders return valid inputs and labels.")
    elif task == "H":
        model = require(namespace, "cl_model")
        if not isinstance(model, nn.Module):
            raise AssertionError("cl_model must inherit from torch.nn.Module.")
        expected = (33 * 30 + 30) + (30 * 20 + 20) + (20 * 3 + 3)
        actual = sum(parameter.numel() for parameter in model.parameters() if parameter.requires_grad)
        if actual != expected:
            raise AssertionError(f"cl_model has {actual} trainable parameters; expected {expected}.")
        output = model(torch.zeros(2, 33))
        if tuple(output.shape) != (2, 3):
            raise AssertionError("cl_model must return shape (batch_size, 3).")
        checks.append("Classification model architecture and logits shape are valid.")
    elif task == "I":
        ce = require(namespace, "test_ce")
        accuracy = require(namespace, "test_acc")
        if not np.isfinite(ce) or not np.isfinite(accuracy) or ce < 0 or not 0 <= accuracy <= 1:
            raise AssertionError("test_ce and test_acc must be finite evaluation scalars.")
        matrix = namespace.get("confusion_matrix")
        if matrix is not None and tuple(np.asarray(matrix).shape) != (3, 3):
            raise AssertionError("confusion_matrix must have shape (3, 3).")
        checks.append(f"Classification evaluation produced CE={float(ce):.4f}, accuracy={float(accuracy):.3f}.")
    return checks


def main():
    request = json.load(__import__("sys").stdin)
    task = request["task"]
    namespace = {"__name__": "__main__", "content": make_dataset()}
    output = io.StringIO()
    try:
        with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
            exec(compile(request["code"], "<submission>", "exec"), namespace)
            checks = check_task(task, namespace)
        result = {"ok": True, "task": task, "output": output.getvalue()[-8000:], "checks": checks}
    except Exception as error:
        result = {
            "ok": False,
            "task": task,
            "output": output.getvalue()[-8000:],
            "checks": [],
            "error": f"{type(error).__name__}: {error}\n{traceback.format_exc(limit=2)}",
        }
    print(json.dumps(result, ensure_ascii=False))


if __name__ == "__main__":
    main()
