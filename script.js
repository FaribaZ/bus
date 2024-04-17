
let data = [
    { date: '1', client: 'Client1', number: '123' },
    { date: '2', client: 'Client2', number: '456' },
    
];

// Select the container where you want to add the rows
let container = document.querySelector('.name');

// Generate HTML for each row and add it to the container
data.map(item => {
    let row = document.createElement('div');
    row.className = 'd-flex justify-content-around';

    let dateDiv = document.createElement('div');
    dateDiv.textContent = item.date;
    dateDiv.className = 'date';

    let clientDiv = document.createElement('div');
    clientDiv.textContent = item.client;
    clientDiv.className = 'client';

    let numberDiv = document.createElement('div');
    numberDiv.textContent = item.number;
    numberDiv.className = 'number';

    row.appendChild(dateDiv);
    row.appendChild(clientDiv);
    row.appendChild(numberDiv);

    container.appendChild(row);
});


document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;

    if (currentURL.startsWith("https://pwa.snapptrip.com")) {
        document.querySelector(".link").setAttribute("href", "https://pwa.snapptrip.com/bus?utm_source=jek&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024");
    } else {
        document.querySelector(".link").setAttribute("href", "https://www.snapptrip.com/bus?utm_source=web&utm_medium=landing&utm_campaign=lucky-bus&utm_term=april-2024");
    }
});