const fetchData = async (sortOption = null) => {
    try {
        const response = await fetch('data.json');
        let data = await response.json();

        const container = document.querySelector('.container');

        console.log(data);

        if (sortOption === 'price-asc') {
            data = data.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            data = data.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'date') {
            data = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        let output = '';
        data.forEach((obj, index) => {
            const { imageUrl, title, price, date, location, company } = obj;

            output += `
                <div class='card' data-index="${index}">
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
                                <button class="edit-btn">Edit</button>
                                <button class="delete-btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = output;

        const viewButtons = document.querySelectorAll('.view-btn');

        viewButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                console.log(data[index]);

                let popup = document.querySelector('.popup');

                if (popup) {
                    if (popup.dataset.index === index.toString()) {
                        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
                    } else {
                        updatePopupContent(popup, data[index], index);
                        popup.style.display = 'block';
                    }
                } else {
                    popup = createPopup(data[index], index);
                    container.appendChild(popup);
                }
            });
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');

        deleteButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.card');
                const index = parseInt(card.dataset.index);

                card.remove();

                data.splice(index, 1);

                document.querySelectorAll('.card').forEach((card, newIndex) => {
                    card.dataset.index = newIndex;
                });

                const popup = document.querySelector('.popup');
                if (popup) {
                    popup.remove();
                }

                console.log('Item deleted. Updated data:', data);
            });
        });

        const editButtons = document.querySelectorAll('.edit-btn');

        editButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.card');
                const index = parseInt(card.dataset.index);
                const { company, title, price, location, imageUrl } = data[index];

                let form = document.querySelector('.edit-form');

                if (!form) {
                    form = document.createElement('form');
                    form.classList.add('form-div');
                    form.innerHTML = `
                        <label>
                            Company:
                            <input type="text" name="company" value="${company}">
                        </label>
                        <label>Title:
                            <input type="text" name="title" value="${title}">
                        </label>
                        <label>Price:
                            <input type="number" name="price" value="${price}">
                        </label>
                        <label>Location:
                            <input type="text" name="location" value="${location}">
                        </label>
                        <label>Image URL:
                            <input type="text" name="imageUrl" value="${imageUrl}">
                        </label>
                        <div class='buttons'>
                            <button type="submit">Submit</button>
                            <button type="button" class="cancel-btn">Cancel</button>
                        </div>
                    `;
                    container.appendChild(form);
                } else {
                    form.company.value = company;
                    form.title.value = title;
                    form.price.value = price;
                    form.location.value = location;
                    form.imageUrl.value = imageUrl;
                    form.style.display = 'block';
                }

                form.onsubmit = (e) => {
                    e.preventDefault();
                    data[index].company = form.company.value;
                    data[index].title = form.title.value;
                    data[index].price = form.price.value;
                    data[index].location = form.location.value;
                    data[index].imageUrl = form.imageUrl.value;

                    fetchData();
                    form.style.display = 'none';
                };

                form.querySelector('.cancel-btn').addEventListener('click', () => {
                    form.style.display = 'none';
                });
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}

function createPopup(data, index) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.display = 'block';
    popup.dataset.index = index;

    updatePopupContent(popup, data, index);

    return popup;
}

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

const sortByPriceAscendingButton = document.getElementById('price-asc');
const sortByPriceDescendingButton = document.getElementById('price-desc');
const sortByDateAscendingButton = document.getElementById('date');
const favouritesButtons = document.getElementById('favourites');

sortByPriceAscendingButton.addEventListener('click', () => fetchData('price-asc'));
sortByPriceDescendingButton.addEventListener('click', () => fetchData('price-desc'));
sortByDateAscendingButton.addEventListener('click', () => fetchData('date'));

fetchData();
