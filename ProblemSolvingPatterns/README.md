# Problem Solving Patterns

## Frequency counter

### Anagrams

Given two strings, write a function to determine if the second string is an anagram of the first.

> An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

**Understand the problem**

-  inputs - 2 strings
   -  cases - numbers, null, undefined, spaces, empty
-  output - true, false

**Explore concrete examples**

-  Examples: isAnagram('', '') //true
   -  isAnagram('azz', 'zaa') //false
   -  isAnagram('cinema', 'iceman') //true
   -  isAnagram('rat', 'car') //false

### Solution after breaking down, solving and refactoring

```js
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
```

**BigO is linear i.e. O(N)**
