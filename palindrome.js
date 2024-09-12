// checks if a string is a palindrome
function isPalindrome (str) {
  str = str.toLowerCase();
  newStr = str.replaceAll(/[.,!?]/g, '').replaceAll(' ', '');

  reversedStr = newStr.split('').reverse().join('');

  // console.log(newStr)
  // console.log(reversedStr)

  return reversedStr === newStr;
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Hello, World'));

module.exports = isPalindrome;
