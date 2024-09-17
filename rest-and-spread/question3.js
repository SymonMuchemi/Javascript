/**
 * Create a function called combineArray that takes multiple
 * arrays as arguments. The function should:
 *  1. Use the spread operator to combine all arrays into one.
 *  2. Remove duplicate elements from the combined array.
 *  3. Return the new array with unique elements.
 */

function combineArray(...arrays) {
    const combinedArray = arrays.reduce((prevArray, nextArray) => {
        return [...prevArray, ...nextArray]
    })

    return uniqueArray = combinedArray.filter((prev, next) => (prev !== next));
}

const arr1 = [1, 2, 3]
const arr2 = [3, 4, 5]
const arr3 = [5, 6, 7]

console.log(combineArray(arr1, arr2, arr3))
