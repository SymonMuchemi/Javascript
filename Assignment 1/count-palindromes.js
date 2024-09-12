function countPalindromes(str) {
    let count = 0;
    
    // Helper function to check if a string is a palindrome
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }
    
    // Loop through all substrings and count the palindromes
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substring = str.slice(i, j);
            if (isPalindrome(substring)) {
                count++;
            }
        }
    }
    
    return count;
}

console.log(countPalindromes('ababa'));
console.log(countPalindromes('racecar'));
console.log(countPalindromes('aabb'));
console.log(countPalindromes('a'));
console.log(countPalindromes('abc'));
