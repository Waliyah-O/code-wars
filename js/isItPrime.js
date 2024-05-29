// function isPrime(num) {
//   //TODO
//   for (let i = 0; i < num; i++){
// 	if (num % i === 1) {
//       return false;
//     } else {
//       return n > 1;
//     }
//   }
    
// }

// console.log(isPrime(-1));

// if(num > 1 && )

function isPrimeNumber(n) {
	for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
	  if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
	}
	return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }
  
  console.log(isPrimeNumber(75)); 


  function isPrime(num) {
	if (num <= 1) {
	  return false;
	}
	if (num <= 3) {
	  return true;
	}
	if (num % 2 === 0 || num % 3 === 0) {
	  return false;
	}
	let sqrtNum = Math.floor(Math.sqrt(num));
	for (let i = 5; i <= sqrtNum; i += 6) {
	  if (num % i === 0 || num % (i + 2) === 0) {
		return false;
	  }
	}
	return true;
  }
  
console.log(isPrime(75));

// The function checks for divisibility by 2 and 3 separately.
// If the number is divisible by 2 or 3, it's not a prime number.
// It only checks divisibility up to the square root of the number.
// Iteration is done until the square root of the number, as factors larger than the square root would have corresponding factors smaller than the square root. This reduces the number of iterations significantly.
// It uses a 6k ± 1 optimization for the loop.
// Prime numbers greater than 3 can always be written in the form 6k ± 1. The loop iterates through numbers of the form 6k ± 1, which further reduces the number of checks.