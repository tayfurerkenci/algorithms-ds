// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // if it finds any matches, it will return an
  // array of all the matches that were found
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;


// iterative solution :
// function vowels(str) {
//   const vowel = ["a", "o", "e", "u", "i"];
//   let count=0;
//
//   for(let char of str.toLowerCase())
//   {
//     if(vowel.includes(char))
//     {
//       count++;
//     }
//   }
//   return count;
// }
