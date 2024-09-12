function isCaseInsensitivePalindrome(str) {
    // Convert the string to lowercase
    const lowerCaseStr = str.toLowerCase();

    // Remove any non-alphanumeric characters from the string
    const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

    // Check if the alphanumeric string is a palindrome
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}

console.log(isCaseInsensitivePalindrome('Aba'));
console.log(isCaseInsensitivePalindrome('Racecar'));
console.log(isCaseInsensitivePalindrome('Palindrome'));
console.log(isCaseInsensitivePalindrome('Madam'));
console.log(isCaseInsensitivePalindrome('Hello'));
