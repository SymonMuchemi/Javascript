fetchData = async (sortOption = null) => {
    try {
        const response = await fetch('data.json');
        let data = await response.json();

        const container = document.querySelector('.container')

        console.log(data);

        if (sortOption === 'price-asc') {
            data = data.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            data = data.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date') {
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        let output = '';

        data.forEach(obj => {
            const { imageUrl, title, price, date, location, company } = obj;

            output += `
                <div class='card'>
                    <img src=${imageUrl} alt=${location}/>
                    <div class=text>
                        <h2>${title}</h2>
                        <p>${date}</p>
                        <p>${company}</p>
                        <p>${price}</p>
                        <div class='buttons'>
                            <button>Buy Now</button>
                            <button>Buy Now</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            `
        });
        container.innerHTML = output
    }
    catch (error) {
        console.log(error);
    }
}


const sortByPriceAscendingButton = document.getElementById('price-asc');
const sortByPriceDescendingButton = document.getElementById('price-desc');
const sortByDateAscendingButton = document.getElementById('date');
const favouritesButtons = document.getElementById('favourites')

sortByPriceAscendingButton.addEventListener('click', () => fetchData('price-asc'));
sortByPriceDescendingButton.addEventListener('click', () => fetchData('price-desc'));
sortByDateAscendingButton.addEventListener('click', () => fetchData('date'));

fetchData();
