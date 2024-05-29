// function duplicateEncoder(word) {
//   // console.log(word);
//   let arr = word.split("");
//   console.log(arr);
//   const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
//   const duplicateElements = toFindDuplicates(arr)
//   console.log(duplicateElements);

// }

// duplicateEncoder("opeyemi");

// function toFindDuplicates(word) {
//   let arr = word.split("");
//   console.log(arr);
//   const uniqueElements = new Set(arr);
//   const filteredElements = arr.filter((item) => {
//     if (uniqueElements.has(item)) {
//       uniqueElements.delete(item);
//     } else {
//       return item;
//     }
//   });
//   console.log(); [...new Set(uniqueElements)]
// }

// toFindDuplicates("opeyemi");

// function findDuplicates(word) {
//   let arr = word.split("");
//   let duplicateElements = [];
//   for (i in word) {
//     for (j in word) {
//       if (i === j) {
//         continue;
//       } else {
//         if (arr[i] === arr[j]) {
//           duplicateElements.push(arr[i]);
//         }
//       }
//     }
//   }
//   return [...new Set(duplicateElements)];
// }

// console.log(findDuplicates("titi"));

// let check_duplicate_in_array = (input_array) => {
//   let duplicate_elements = [];
//   for (num in input_array) {
//     for (num2 in input_array) {
//       if (num === num2) {
//         continue;
//       } else {
//         if (input_array[num] === input_array[num2]) {
//           duplicate_elements.push(input_array[num]);
//         }
//       }
//     }
//   }
//   return [...new Set(duplicate_elements)];
// };
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
// console.log(check_duplicate_in_array(arr));

// function findDuplicates(word) {
//   let arr = word.split("");
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
// 		arr[j] = ")"
//         console.log(arr[j]);
//       }
//     }
//   }
// }

// findDuplicates("opeyemi");

function convertString(input) {
  let lowerCaseInput = input.toLowerCase();
  let result = "";
  for (let i = 0; i < lowerCaseInput.length; i++) {
    let count = 0;
    for (let j = 0; j < lowerCaseInput.length; j++) {
      if (lowerCaseInput[i] === lowerCaseInput[j]) {
        count++;
      }
    }
    if (count === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

// Example usage
let inputString = "recede";
let outputString = convertString(inputString);
console.log(outputString); // Output: "())(())("
