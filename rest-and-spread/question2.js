/**
 * create a function called mergeObjects that accepts an
 * indefinate number of objects. The function should:
 *  1. use the spread operator to merger all objects into one.
 *  2. Ensure that if multiple objects contain the same key, the
 *     last object's value should be used.
 *  3. return the merged object. 
 */

function mergeObjects(...objs) {
    return objs.reduce((prev, next) => {
        return {...prev, ...next}
    }, {})
}

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

console.log(mergeObjects(obj1, obj2));
