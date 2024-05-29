function findBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((acc, num) => acc + num, 0);
    let rightSum = arr.slice(i + 1).reduce((acc, num) => acc + num, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 3, 2, 1];
let balanceIndex = findBalanceIndex(arr);
console.log( balanceIndex); 
