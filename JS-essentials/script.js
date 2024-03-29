const data = [
	{
		id: 1,
		title: "The Lord of the Rings",
		publicationDate: "1954-07-29",
		author: "J. R. R. Tolkien",
		genres: [
			"fantasy",
			"high-fantasy",
			"adventure",
			"fiction",
			"novels",
			"literature",
		],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: "El señor de los anillos",
			chinese: "魔戒",
			french: "Le Seigneur des anneaux",
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: "The Cyberiad",
		publicationDate: "1965-01-01",
		author: "Stanislaw Lem",
		genres: [
			"science fiction",
			"humor",
			"speculative fiction",
			"short stories",
			"fantasy",
		],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: "Dune",
		publicationDate: "1965-01-01",
		author: "Frank Herbert",
		genres: ["science fiction", "novel", "adventure"],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: "",
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: "1997-06-26",
		author: "J. K. Rowling",
		genres: ["fantasy", "adventure"],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: "Harry Potter y la piedra filosofal",
			korean: "해리 포터와 마법사의 돌",
			bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
			portuguese: "Harry Potter e a Pedra Filosofal",
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: "A Game of Thrones",
		publicationDate: "1996-08-01",
		author: "George R. R. Martin",
		genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: "왕좌의 게임",
			polish: "Gra o tron",
			portuguese: "A Guerra dos Tronos",
			spanish: "Juego de tronos",
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

// myBook = getBook(2)

// // destructing the book object
// const { title, pages } = myBook;

// console.log(title + "\n" + pages)

// // array destructuring
// const [mainGenre, secondaryGenre] = myBook.genres;

// console.log(myBook.genres)
// console.log("After destructuring:")
// console.log(mainGenre)
// console.log(secondaryGenre)

// // the rest operator (...)
// // funtion to display all genres in an array

// getGenres = (book) => {
// 	console.log("\nAll genres:")
// 	let list = [...book.genres]
// 	console.log(...book.genres)
// 	return list;
// }
// getGenres(myBook)

// // rest operator on arrays
// const [main, ...others] = myBook.genres
// console.log("The main genre is: " + main)
// console.log("Other genres: " + others)

// // creating a new array with elements from another array
// newArray = [...myBook.genres, 'appended genre']

// console.log(" New array of genres:")
// console.log(newArray)

// // new book object with new property

// myNewBook = {...myBook, moviePublicationDate: "2001-01-31"}

// console.log("Old book:\n" + JSON.stringify(myBook, null, 4))
// console.log("New book:\n" + JSON.stringify(myNewBook, null, 4))

// // overwriting object properties
// specialBook = {...myBook,
// 	// adding a new property
// 	availableInAfrica: true,

// 	// overwriting an existing property
// 	pages: 3220}
// console.log(JSON.stringify(specialBook, null, 4))

// // template literals

// let summary = `
// 		The title is ${title}
// 		big number ${298 ** 32}
// 		genres: ${getGenres(myBook)}
// 	`

// console.log(summary)

// // ternary operator; a better if...else statement

// const pagesRange = pages >= 1000 ? `${title} has over a 1000 pages`: `${title} has less than 1000 pages`;
// console.log(pagesRange)

// // arrow function to get the year of book publication
// const getYearOfPublication = (book) => book.publicationDate.split('-')[0]

// console.log("Year of publication: " +  getYearOfPublication(myBook))

// //short circuiting
// // logical AND
// console.log(true && "This is displace coz of short-circuiting with logical AND")
// console.log(false && "This is displace coz of short-circuiting with logical AND")

// // displaying a text if the book has a movie adaptation
// console.log(myBook.hasMovieAdaptation && "This book has a movie adaptation")

// // logical OR

// console.log(true || "THis statement wont be displayed")
// console.log(false || "displayed on falsy first argument value")

// // example using data object
// console.log(myBook.translations.german || "No German translation")


// // nullish coalescing operator '??'
// // checking if an attribute is null or defined and setting it to a 'No data' string value
// const bookReviewsCount = myBook.reviews.librarything.reviewsCount ?? "No data here"
// console.log(bookReviewsCount)

// // optional chaining
// // counting the total reviews on a certain book without optional chaining

// function getTotalReviewCount(book) {
// 	const goodreads = book.reviews.goodreads.reviewsCount
// 	const librarything = book.reviews.librarything.reviewsCount

// 	return goodreads + librarything
// }

// // with optional chaining with the nullish coalesdcing operator for unavailable values
// function getTotalReviewCountWithOptionalChaining(book) {
// 	const goodreads = book.reviews.goodreads?.reviewsCount ?? 0
// 	const librarything = book.reviews.librarything?.reviewsCount ?? 0

// 	return goodreads + librarything
// }

// counts = getTotalReviewCount(myBook)

// book3ReviewCount = getTotalReviewCountWithOptionalChaining(getBook(3))
// console.log("Book 3, review count:" + book3ReviewCount)

// console.log("Total: " + counts)

// const books = getBooks();

// console.log(books)

module.exports = data
