/* 
   Write a function called same, which accepts two arrays. The value should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/

// First solution
function same(arr1, arr2) {
    if (!arr2 || arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// Frequency counter method
function same2(arr1, arr2) {
    if (!arr2 || arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 1, 3, 2], [9, 1, 4, 1])); //true
console.log(same([1, 2, 3])); // false
console.log(same2([1, 2, 3, 2], [4, 1, 4, 9])); //true
console.log(same2([1, 2, 3], [4, 9])); //false

// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Solution
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

// Refactored
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const countObj = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        countObj[letter] ? (countObj[letter] += 1) : (countObj[letter] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!countObj[letter]) {
            return false;
        } else {
            countObj[letter] -= 1;
        }
    }
    return true;
}

console.log('isAnagram:', isAnagram('', '')); // true
console.log(isAnagram('aaz', 'zza')); // false
console.log(isAnagram('coat', 'taco')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('frontend', 'front end')); // false
console.log(isAnagram('qwerty', 'qeywrt')); // true
console.log(isAnagram('texttwisttime', 'timetwisttext')); // true

console.log('validAnagram:', validAnagram('', '')); //true
console.log(validAnagram('coat', 'taco')); // true
console.log(validAnagram('rat', 'car')); // false
