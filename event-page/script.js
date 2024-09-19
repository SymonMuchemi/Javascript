getdata = async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const container = document.querySelector('.container')

        console.log(data);

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
                        <button>Buy Now</button>
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

getdata();
