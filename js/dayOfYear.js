// let now = new Date("2017-01-26")
// let now = new Date([1, 1, 2000])
// console.log(now);

const arr = [1, 1, 2000];
console.log(arr[2]);

// function daysIntoYear(date) {
//   return (
//     (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
//       Date.UTC(date.getFullYear(), 0, 0)) /
//     24 /
//     60 /
//     60 /
//     1000
//   );
// }

// [new Date([1, 1, 2000])].forEach((d) => console.log(daysIntoYear(d)));

// const getDateOfYear = (date) =>
//   Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0)) / 864e5);

// const dayOfYear = getDateOfYear(new Date([1, 1, 2000]));

// console.log(dayOfYear);

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function todayOfYear(arr) {
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [day, month, year] = arr;

  let dayOfYear = day;
  for (let i = 1; i < month; i++) {
    dayOfYear += daysInMonth[i];
  }

  if (isLeapYear(year) && month > 2) {
    dayOfYear += 1;
  }

  return dayOfYear;
}

// Example usage:
const dayNumber = todayOfYear([1, 1, 2000]);
console.log(dayNumber);

function toDayOfYear(arr) {
  // return a number
  const [D, M, YYYY] = arr;
  function checkLeapYear(YYYY) {
    return (YYYY % 4 === 0 && YYYY % 100 !== 0) || YYYY % 400 === 0;
  }

  const daysOfTheMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayOfTheYear = D;
  for (let i = 1; i < M; i++) {
    dayOfTheYear += daysOfTheMonth[i];
  }
  if (checkLeapYear(YYYY) && M > 2) {
    dayOfTheYear += 1;
  }
  return dayOfTheYear;
}

const numberDayOfTheYear = toDayOfYear([1, 1, 2000]);
console.log(numberDayOfTheYear);
