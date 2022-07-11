const a1 = 1.0;
const a2 = Number('2.55');
const b = -4.65;

console.log(a1, a2);
console.log(Number.isInteger(a1), Number.isInteger(a2))

const x1 = -0.574;
const x2 = 9.338;
const y = a1*x1 + a2*x2 + b; // Linear Regression

console.log(`y=a1x1 + a2x2 + b\ny = ${a1.toFixed(2)}*${x1.toFixed(3)} + ${a2.toFixed(2)}*${x2.toFixed(3)} + ${b.toFixed(2)}\ny ~ `,y.toFixed(3));
