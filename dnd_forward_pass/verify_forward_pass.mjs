/* index.html 안의 순전파 코드가 network.json / forward_pass_trace.json 과
   정말 같은 숫자를 내는지 검사합니다.

   실행:
       node verify_forward_pass.mjs

   검사 항목
     1. index.html 에 박혀 있는 네트워크 값 == network.json
     2. 구조 확인 (입력 6개, 은닉층 5개 이상, 마지막 활성화는 Sigmoid)
     3. index.html 의 forwardPass() 결과 == 파이썬(forward_pass.py) 결과
     4. neuronTerms() 로 다시 계산한 z, a 가 forwardPass() 와 같은지
*/

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const read = (name) => readFileSync(join(here, name), 'utf8');

let failures = 0;
function check(ok, label, detail) {
  if (ok) {
    console.log('  통과  ' + label);
  } else {
    failures += 1;
    console.log('  실패  ' + label + (detail ? '  -> ' + detail : ''));
  }
}

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value).sort()) out[key] = sortKeys(value[key]);
    return out;
  }
  return value;
}
const same = (a, b) => JSON.stringify(sortKeys(a)) === JSON.stringify(sortKeys(b));

const net = JSON.parse(read('network.json'));
const trace = JSON.parse(read('forward_pass_trace.json'));
const html = read('index.html');

/* --- 1. index.html 안의 네트워크 값 --- */
const jsonBlock = html.match(
  /<script id="net-json" type="application\/json">([\s\S]*?)<\/script>/);
check(!!jsonBlock, 'index.html 에서 net-json 블록을 찾았다');
const netInHtml = JSON.parse(jsonBlock[1]);
check(same(netInHtml, net), 'index.html 의 네트워크 값 == network.json');
if (!same(netInHtml, net)) {
  console.log('     (python train_network.py 를 다시 실행하면 index.html 이 갱신됩니다)');
}

/* --- 2. 구조 --- */
check(net.arch[0] === 6, '입력이 6개다 (arch[0] = ' + net.arch[0] + ')');
check(net.arch.length - 2 >= 5,
  '은닉층이 5개 이상이다 (' + (net.arch.length - 2) + '개)');
check(net.activations[net.activations.length - 1] === 'sigmoid',
  '마지막 활성화 함수가 Sigmoid 다');
const arrows = net.weights.reduce((sum, layer, L) => sum + layer.length * layer[0].length, 0);
console.log('  정보  구조 ' + net.arch.join(' -> ') + ', 가중치(화살표) ' + arrows + '개, '
  + '편향 ' + net.biases.reduce((s, b) => s + b.length, 0) + '개');

/* --- 3. index.html 의 순전파 코드를 그대로 떼어내서 실행 --- */
const coreBlock = html.match(/<script id="forward-pass-core">([\s\S]*?)<\/script>/);
check(!!coreBlock, 'index.html 에서 forward-pass-core 블록을 찾았다');
const core = new Function(coreBlock[1] + '\nreturn { activate, forwardPass, neuronTerms };')();

let maxDiff = 0;
for (const t of trace.traces) {
  const fwd = core.forwardPass(net, t.x);
  let localMax = 0;
  for (let L = 0; L < t.z.length; L++) {
    for (let j = 0; j < t.z[L].length; j++) {
      localMax = Math.max(localMax, Math.abs(fwd.z[L][j] - t.z[L][j]));
      localMax = Math.max(localMax, Math.abs(fwd.a[L + 1][j] - t.a[L][j]));
    }
  }
  localMax = Math.max(localMax, Math.abs(fwd.a[t.a.length][0] - t.output_p));
  maxDiff = Math.max(maxDiff, localMax);
  console.log('  정보  ' + t.label + ': 자바스크립트 P(Gentoo) = '
    + fwd.a[t.a.length][0].toFixed(6) + ', 파이썬 = ' + t.output_p.toFixed(6));
}
check(maxDiff < 1e-6, 'index.html 계산 == 파이썬 계산 (최대 차이 ' + maxDiff.toExponential(2) + ')');

/* --- 4. neuronTerms() 자체 검산 --- */
const sample = net.samples[0];
let worst = 0;
for (let L = 0; L < net.weights.length; L++) {
  for (let j = 0; j < net.arch[L + 1]; j++) {
    const info = core.neuronTerms(net, sample.x, L, j);
    const sum = info.terms.reduce((s, t) => s + t.product, 0) + info.bias;
    worst = Math.max(worst, Math.abs(sum - info.z));
    worst = Math.max(worst, Math.abs(core.activate(info.activation, info.z) - info.a));
  }
}
check(worst < 1e-9, 'z = (a x w)의 합 + 편향, a = 활성화(z) 가 성립한다 (최대 차이 '
  + worst.toExponential(2) + ')');

console.log('');
console.log(failures === 0
  ? '모든 검사 통과: 브라우저 애니메이션과 파이썬 계산이 완전히 같습니다.'
  : failures + '개 검사가 실패했습니다.');
process.exit(failures === 0 ? 0 : 1);
