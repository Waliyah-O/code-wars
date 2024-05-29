// let a = 1/17
// console.log(a);
// let resA = a.toFixed(2)
// console.log(resA);

// let lowerNum = 4;
// let n = 5;
// for (let i = 0; i <= n; i++) {
//   lowerNum += 3;
//   let upperNum = 1;
//   let wholeNum = upperNum / lowerNum;
//   console.log(wholeNum.toFixed(2));
// }

// function seriesNum(n) {
//   let lowerNum = 1;
// //   let n = 5;
//   for (let i = 0; i <= n; i++) {
//     lowerNum += 3;
//     let upperNum = 1;
//     let wholeNum = upperNum / lowerNum;
//     console.log(wholeNum.toFixed(2));
// 	// console.log(lowerNum);
//   }
// }

// seriesNum(5)

// function SeriesSum(n) {
//   let lowerNum = 1;
//   for (let i = 1; i <= n; i++) {
//     let upperNum = i; // Set upperNum to the current loop index i
//     let wholeNum = upperNum / lowerNum;
//     console.log(wholeNum.toFixed(2));
//     lowerNum += 3;
//   }
// }

// SeriesSum(5);

function seriesSum(n) {
  if (n === 0) {
    return "0.00";
  }

  let sum = 1;
  let denominator = 4;

  for (let i = 1; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  // Round the sum to 2 decimal places and return as a string
  return sum.toFixed(2);
}

// Example usage
console.log(seriesSum(5));
