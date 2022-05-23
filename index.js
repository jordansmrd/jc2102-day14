// 1. Sum of positives and negatives
// Input: sebuah array of numbers
// Output: sebuah array -> [ <sum_of_positives>, <sum_of_negatives> ]
// example input: [1, 3, -4, 2, -13, -7]
// example output: [6, -24]
let arr = [1, 3, -4, 2, -13, -7];
function sumOfPositivesAndNegatives(arr = []) {
  let positives = 0;
  let negatives = 0;
  arr.forEach((val) => {
    if (val > 0) {
      positives += val;
    } else if (val < 0) {
      negatives += val;
    }
  });

  return [positives, negatives];
}
console.log(sumOfPositivesAndNegatives(arr));

// 2. Square all
// Input: sebuah array of numbers
// Output: array of numbers yang sama, tapi sudah dipangkat 2
// example input: [1, 2, 3, 4, 5, 9]
// example output: [1, 4, 9, 16, 25, 81]

arr = [1, 2, 3];

function squareAll(arr = []) {
  let resultArr = arr.map((val) => {
    return Math.pow(val, 2);
  });

  return resultArr;
}
// console.log(resultArr);
console.log(squareAll(arr));

// 3. Plus Minus
// Input: sebuah array of numbers
// Output:
// example input: [1, 2, 3, 4, 5, 9]
// example output: -6

arr = [1, 2, 3, 4, 5, 9];

function plusMinus(arr = []) {
  let result = 0;
  let operator = "plus";

  arr.forEach((val) => {
    if (operator == "plus") {
      result += val;
      operator = "minus";
    } else if (operator == "minus") {
      result -= val;
      operator = "plus";
    }
  });

  return result;
}

console.log();
