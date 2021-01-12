const { performance } = require('perf_hooks')

// Generate 10k random numbers between -100 and 100
const numbers = []

for (let i = 0; i < 1000000; i += 1) {
  numbers.push(200 * Math.random() - 100)
}

const operations = {
  plus: n => 3 + n,
  mult: n => 3 * n,
  ceil: n => Math.ceil(n),
  floor: n => Math.floor(n),
  div: n => 3 / n,
  sqrt: n => Math.sqrt(n),
  round: n => Math.round(n),
  exp: n => Math.exp(n),
  sin: n => Math.sin(n),
  asin: n => Math.asin(n),
  sinh: n => Math.sinh(n),
  atan: n => Math.atan(n),
  tan: n => Math.tan(n),
  log: n => Math.log(n),
  log2: n => Math.log2(n),
  log10: n => Math.log10(n),
  pow: n => Math.pow(n, 3)
}

Object.keys(operations).forEach(opname => {
  const t0 = performance.now()
  const results = numbers.map(operations[opname])
  const t1 = performance.now()

  const ms = (t1 - t0).toFixed(2)

  console.log(opname.padEnd(6, ' ') + ' ' + ms  + ' ms')
})
