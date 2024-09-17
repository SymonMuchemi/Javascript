const infor = {
    'name': 'Matthew',
    'age': 23,
    'city': 'Nairobi'
}

// console.log(Object.keys(infor))
// console.log(Object.values(infor))

const keys = ['name', 'age', 'city']
const values = ['Matthew', 23, 'Nairobi']

const infoObject = keys.reduce((objAccummalator, nextKey, index) => {
    objAccummalator[nextKey] = values[index]

    return objAccummalator
}, {})

console.log(infoObject)
