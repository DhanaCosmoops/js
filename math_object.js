// Math.abs()

console.log(Math.abs(50)); // 50
console.log(Math.abs(0)); // 0
console.log(Math.abs(-50)); // 50

// Math.sign(x)

console.log(Math.sign(-10)); // -1
console.log(Math.sign(10)); // 1
console.log(Math.sign(0)); // 0

// Math.sqrt(x)

console.log(Math.sqrt(8)); // 2.8284271247461903
console.log(Math.sqrt(9)); // 3

// Math.cbrt(x)

console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(125)); // 5

// Math.pow()

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(4, 3)); // 64

// Math.min(...values)

let arr = [18, 7, 45, 33, 77];
console.log(Math.min(...arr)); // 7
console.log(Math.min(...arr, 3, 100)); // 3

// Math.max(...values)

console.log(Math.max(...arr)); // 77
console.log(Math.max(...arr, 3, 100)); // 100

// Math.random()

console.log(Math.random()); // 0.08951824096926586

let randomVal = Math.random();
console.log(randomVal); // 0.7683750354551817
console.log(randomVal.toFixed(3)); // 0.7668

let rVal = Math.random() * 100; // randomly choose num b/w 0-100
console.log(rVal.toFixed(2)); // 19.91

// Math.ceil()

console.log(Math.ceil(2.6)); // 3
console.log(Math.ceil(2.01)); // 3

// Math.floor()

console.log(Math.floor(4.99)); // 4

// Math.round()

console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2

// Math.trunc()

console.log(Math.trunc(6.9876654321234)); // 66
