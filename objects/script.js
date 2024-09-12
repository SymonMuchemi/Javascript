const fs = require('fs')
const data = require('./data');
const file = 'db.json'


// convert the id value to numbers
for (let i = 0; i < data.length; i++) {
    data[i].id = Number(data[i].id)
}

const content = JSON.stringify(data)

function writeDataToFIle(filename) {
    fs.writeFile(filename, content, 'utf-8', function (err) {
        if (err) {
            console.error(err);
        }
    });
}

const container = document.getElementsByClassName('container');

const createContentDiv = (data) => {
    const contentDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const category = document.createElement('p');
    const stock = document.createElement('p');


    heading.textContent = data.name;
    description.textContent = data.description
    price.textContent = data.price
    category.textContent = data.category
    stock.textContent = data.stock

    contentDiv.appendChild(heading)
    contentDiv.appendChild(description)
    contentDiv.appendChild(price)
    contentDiv.appendChild(category)
    contentDiv.appendChild(stock)

    return contentDiv;
}

for (let index = 0; index < data.length; index++) {
    const element = createContentDiv(data[index]);

    container.appendChild(element);
}
