// Write a JavaScript program that
// returns a subset of a string.

const dog = 'dog';
let setOfSubs = new Set()

for (let i = 1; i < dog.length + 1; i++) {
    let sub = dog.substring(0, i)
    setOfSubs.add(sub)
}

for (let i = 0; i < dog.length; i++) {
    let sub = dog.substring(i, dog.length + 1)
    setOfSubs.add(sub)
}

console.log([...setOfSubs])
