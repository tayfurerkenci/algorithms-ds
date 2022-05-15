// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// solution1:
// return str.split('').reverse().join('');

// solution2:
// let reverseString=[];
// for (let i = str.length-1; i >= 0; i--) {
//  reverseString.push(str[i]);
// }
// return reverseString.join('');

// let reverseString='';
// for (var character of str) {
//  reverseString=character + reverseString;
// }
// return reverseString;
