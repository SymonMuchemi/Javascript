/**
 * Create a function named extractProperties that accepts the following:
 *  - an array of objects
 *  - a list of property names
 * 
 * The function should:
 *  - Use the spread operator to create a new array object with
 *    only the specified properties.
 *  - Return the new array of objects.
 */

function extractProperties(objects, ...properties) {
    return objects.map(obj =>
        properties.reduce((acc, property) => {
            if (obj.hasOwnProperty(property)) {
                acc[property] = obj[property];
            }

            return acc;
        }, {})
    );
}

const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }]
console.log(extractProperties(objects, 'a', 'c'))
