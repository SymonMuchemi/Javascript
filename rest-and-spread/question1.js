// create a function call filterAndSort that takes and indefinate
// number of arguments. The first argument should be a filter function
// and the remain arguments should be numbers. The function should:
//  1. use the rest operator to capture all arguments except the first one.
//  2. filter the numbers usignthe provided filter function.
//  3. sort the filtered numbers in ascending order
//  4. return the sorted array of numbers

function filterAndSort(filterFn, ...numbers) {
    const filteredNumbers = numbers.filter(filterFn);

    return filteredNumbers.sort()
}

const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2));
