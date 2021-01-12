const { performance } = require('perf_hooks')

// Generate 10k random numbers between -100 and 100
const numbers = []
for (let i = 0; i < 10000; i += 1) {
  numbers.push(200 * Math.random() - 100)
}

// Our operations to benchmark
const operations = {
  // Addition
  zero: n => 0,
  iden: n => n,
  plus: n => 3 + n,
  minus: n => 3 - n,
  neg: n => -n,
  // Multiplication
  mult: n => 3 * n,
  squar: n => n * n,
  div: n => 3 / n,
  // Powers
  sqrt: n => Math.sqrt(n),
  exp: n => Math.exp(n),
  pow: n => Math.pow(n, 3),
  log: n => Math.log(n),
  log2: n => Math.log2(n),
  log10: n => Math.log10(n),
  // Rounding
  ceil: n => Math.ceil(n),
  floor: n => Math.floor(n),
  round: n => Math.round(n),
  // Trigonometric
  sin: n => Math.sin(n),
  cos: n => Math.cos(n),
  asin: n => Math.asin(n),
  sinh: n => Math.sinh(n),
  tan: n => Math.tan(n),
  atan: n => Math.atan(n)
}

// Pick operations randomly to prevent possible optimisation.
const pickOperation = () => {
  const ops = Object.keys(operations)
  const i = Math.floor(ops.length * Math.random())
  return ops[i]
}

// Init statistics
const stats = {}
Object.keys(operations).forEach(opname => {
  stats[opname] = {
    iterations: 0,
    duration: 0
  }
})

// Run the benchmark and collect statistics.
for (let i = 0; i < 10000; i += 1) {
  const opname = pickOperation()
  const op = operations[opname]

  const t0 = performance.now()
  const results = numbers.map(op)
  const t1 = performance.now()

  stats[opname].iterations += 1
  stats[opname].duration += (t1 - t0)
  stats[opname].calls += results.length // use the results to avoid lazyness
}

// Output results
Object.keys(operations).forEach(opname => {
  const iter = stats[opname].iterations
  const periter = stats[opname].duration / iter
  console.log(opname.padEnd(6, ' ') + ' ' + periter.toFixed(2) + ' ms')
})
