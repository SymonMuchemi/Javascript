function longestPalindromeSubstring(str) {
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(longestPalindromeSubstring('babad'))
console.log(longestPalindromeSubstring('cbbd'))
