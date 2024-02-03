/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 */
function toLetterGrade(numGrade) {
  if (numGrade < 0 || numGrade > 100) {
    return "INVALID";
  } else if (numGrade >= 90) {
    return "A";
  } else if (numGrade >= 80) {
    return "B";
  } else if (numGrade >= 70) {
    return "C";
  } else if (numGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array.
 */
function getEvenElements(array) {
  return array.filter(num => num % 2 === 0);
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 */
function findLongestWord(string) {
  const words = string.split(" ");
  return Math.max(...words.map(word => word.length));
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the two.
 */
function combineObjects(object1, object2) {
  return { ...object1, ...object2 };
}

/**
 * Task 5: Create a function that takes an array as an argument and returns
 * the reverse array.
 */
function reverseArr(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

// DO NOT EDIT BELOW THIS LINE -- the code is for testing purposes only!
// To test your code, run `node warmUp.js` in your terminal

import {
  testToLetterGrade,
  testGetEvenElements,
  testFindLongestWord,
  testCombineObjects,
  testReverseArr,
} from "./warmUpTests.js";

console.log("TEST RESULTS:");
testToLetterGrade(toLetterGrade);
testGetEvenElements(getEvenElements);
testFindLongestWord(findLongestWord);
testCombineObjects(combineObjects);
testReverseArr(reverseArr);
