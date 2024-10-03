// Function to fetch and display data
const fetchData = async (sortOption = null) => {
    try {
        const response = await fetch('data.json');
        let data = await response.json();

        const container = document.querySelector('.container');

        console.log(data);

        // Sort data based on the provided option
        if (sortOption === 'price-asc') {
            data = data.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            data = data.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date') {
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        // Generate HTML for the cards
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
                            <div class="data-buttons">
                                <button class="view-btn">View</button>
                                <button id="edit-btn">Edit</button>
                                <button id="delete-btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = output;

        // Add event listeners to the view buttons
        const viewButtons = document.querySelectorAll('.view-btn');

        viewButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                console.log(data[index]);

                // Check if a popup already exists
                let popup = document.querySelector('.popup');

                if (popup) {
                    // If popup exists, toggle its visibility
                    if (popup.dataset.index === index.toString()) {
                        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
                    } else {
                        // If it's a different item, update the popup content
                        updatePopupContent(popup, data[index], index);
                        popup.style.display = 'block';
                    }
                } else {
                    // If no popup exists, create a new one
                    popup = createPopup(data[index], index);
                    container.appendChild(popup);
                }
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}

// Function to create a new popup
function createPopup(data, index) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.display = 'block';
    popup.dataset.index = index;

    updatePopupContent(popup, data, index);

    return popup;
}

// Function to update popup content
function updatePopupContent(popup, data, index) {
    const { imageUrl, title, price, date, location, company } = data;

    popup.innerHTML = `
        <div class='text'>
            <h2>${title}</h2>
            <p>${location}</p>
            <p>${date}</p>
            <p>${company}</p>
            <p>${price}</p>
        </div>
    `;
    popup.dataset.index = index;
}

// Event listeners for sorting buttons
const sortByPriceAscendingButton = document.getElementById('price-asc');
const sortByPriceDescendingButton = document.getElementById('price-desc');
const sortByDateAscendingButton = document.getElementById('date');
const favouritesButtons = document.getElementById('favourites');

sortByPriceAscendingButton.addEventListener('click', () => fetchData('price-asc'));
sortByPriceDescendingButton.addEventListener('click', () => fetchData('price-desc'));
sortByDateAscendingButton.addEventListener('click', () => fetchData('date'));

// Initial data fetch
fetchData();
