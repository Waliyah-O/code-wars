// function findDigitalRoot(number) {
//   let sum = number;
//   let arr = [];
//   let reducer = (a, b) => parseInt(a) + parseInt(b);
//   while (sum > 9) {
//     arr = sum.toString().split("");
// 	console.log(arr);
//     sum = arr.reduce(reducer);
//   }
//   console.log(sum);
// }

// findDigitalRoot(132189);

// function findDigitalRoot(n) {
//   let arr = [];
//   let reducer = (a, b) => parseInt(a) + parseInt(b);
//   while (n > 9) {
//     arr = n.toString().split("");
//     console.log(arr);
//     n = arr.reduce(reducer);
//   }
//   console.log(n);
// }

// findDigitalRoot(132189);

function digitalRoot(n) {
  // ...
  let arr = [];
  let reducer = (a, b) => parseInt(a) + parseInt(b);
  while (n > 9) {
    arr = n.toString().split("");
    console.log(arr);
    n = arr.reduce(reducer);
  }
  return n;
}

const newDigitalRoot = digitalRoot(16);
console.log(newDigitalRoot);
