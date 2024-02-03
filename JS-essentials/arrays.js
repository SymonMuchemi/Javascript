const numArray = [1, 2, 3, 3, 4]

// array map function returns a new array with updated values
// using normal functions
const doubleNumbers = numArray.map(function(num) {
    return num * 2;
})
const squareNumbers = numArray.map(num => num * num)


console.log(numArray)
console.log(doubleNumbers)
console.log(squareNumbers)
