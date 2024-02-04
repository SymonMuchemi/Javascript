const booksData = require('./script')


const numArray = [1, 2, 3, 3, 4]

// array map function returns a new array with updated values
// using normal functions
const doubleNumbers = numArray.map(function(num) {
    return num * 2;
})
const squareNumbers = numArray.map(num => num * num)

console.log("Array methods!")
console.log(numArray)
console.log(doubleNumbers)
console.log(squareNumbers)

// using the array filter method
// creating an new array of books with more than 1000 pages

const longBooks = booksData.filter(book => book.pages > 1000);

/**
 * function to get an array of book titles from books with movie adaptation
 */
const booksWithMovieAdaptations = booksData.filter((book) => {
    if (book.hasMovieAdaptation)
        return book.title    
}).map((book) => book.title);
console.log(booksWithMovieAdaptations)

// console.log(longBooks)
console.log("This should be visible!")

// the reduce method
// counting the total number of pages in all books

let totalPages = booksData.reduce(((sum, book) => sum + book.pages), 0);

console.log("All pages in library: " + totalPages)

// sort method

const arr = [1,2,3,3,4,54,5,6,34]
const sortedArr = arr.sort((a, b) => a - b)
const descendingArr = arr.sort((d, f) =>f - d)

console.log("Sorted array: " + sortedArr)
console.log("Sorted array descendingly: " + descendingArr)

// sorting the books by number of pages

const sortedBooksByPages = booksData.slice()
                                    .sort((book1, book2) => book1.pages - book2.pages)
                                    .map((book) =>  `${book.title}: ${book.pages}`);

const booksSortedDescendingly = booksData.slice()
                                        .sort((bk1, bk2) => bk2 - bk1)
                                        .map(book => `${book.title}: ${book.pages}`)
console.log("Sorted by pages: ")
console.log(sortedBooksByPages)

console.log("In descending order:")
console.log(booksSortedDescendingly)
