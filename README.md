# js-math-ops-speed

![](benchmark-node-js-banner-image.jpg)

Benchmark for basic JavaScript math operations. Runs operations in a randomised order so that each operation is ran around 500 times for an array of 10000 random numbers. See [Benchmark of Elementary Mathematical Operations in Node.js](https://www.akselipalen.com/2021/01/13/benchmark-of-elementary-mathematical-operations-in-node-js/) for details and comparison with other similar benchmarks.

Run:

    $ node index.js

Output:

    zero   0.25 ms
    iden   0.30 ms
    plus   1.00 ms
    minus  0.99 ms
    neg    0.98 ms
    mult   1.00 ms
    squar  0.97 ms
    div    1.01 ms
    sqrt   1.07 ms
    exp    2.02 ms
    pow    2.84 ms
    log    1.86 ms
    log2   1.87 ms
    log10  1.91 ms
    ceil   0.96 ms
    floor  0.92 ms
    round  1.02 ms
    sin    2.08 ms
    cos    2.08 ms
    asin   1.62 ms
    sinh   2.13 ms
    tan    2.25 ms
    atan   1.98 ms

Please contribute by running the test suite on your machine and by submitting an issue. Provide the results and the details of your device, operating system and Node.js version as plain text.

## See also

- [A simple benchmark of various math operations](https://latkin.org/blog/2014/11/09/a-simple-benchmark-of-various-math-operations/) by Lincoln Atkinson
- [math_ops_speed: testing speed of mathematical operators](https://github.com/elgw/math_ops_speed) by Erik Wernersson

## Licence

[MIT](LICENSE)
