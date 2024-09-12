function removeDuplicates(str) {
    let uniqueStr = '';
    for (let i = 0; i < str.length; i++) {
        if (uniqueStr.indexOf(str[i]) === -1) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

console.log(removeDuplicates('programming'));
console.log(removeDuplicates('hello world'))
console.log('aaaa');
console.log(removeDuplicates('abcd'))
console.log(removeDuplicates('aabbcc'))
