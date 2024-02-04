// asynchrounous operations run simultaneously with each other

console.log("Asynchronous JavaScript")
// using promises
// fetching data and converting it to json format

fetch("https:///jsonplaceholder.typicode.com/todos")
    .then((res) => res.json()) // convert the response to json
    .then((data) => console.log(data[0])) // display the response

console.log("This might be displayed before fetching data completes")

// using async and await keywords
// fetching the same data using asychronous functions

async function getDataFromApi () {
    const res = await fetch("https:///jsonplaceholder.typicode.com/todos");
    const data = await res.json()

    console.log("This is from an async-await function:")
    console.log(data[1])
}

getDataFromApi()

