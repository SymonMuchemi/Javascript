function reverseString (str) {
  return str.split('').reverse().join('');
}

const str1 = 'hello';
const str2 = 'world';
const str3 = 'Monalisa';

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));

module.exports = reverseString;
