let data;

function start() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>{
        data = json;
        init();
    });
}


function init() {
    const userList = document.getElementById("userList");
    const userDetails = document.getElementById("userDetails");

    for (const user of data) {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        listItem.addEventListener("click", () => displayUserDetails(user, userDetails));
        userList.appendChild(listItem);
    }
}

function displayUserDetails(user, userDetails) {
    userDetails.innerHTML = `
        <div class="user-detail">
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Phone: ${user.phone}</p>
            <p>Email: ${user.email}</p>
            <button class="show-details-button">Show Details</button>
        </div>
    `;

    const showDetailsButton = userDetails.querySelector(".show-details-button");
    showDetailsButton.addEventListener("click", () => showAllDetails(user, userDetails));
}

function showAllDetails(user, userDetails) {
    userDetails.innerHTML += `
        <p>Username: ${user.username}</p>
        <p>Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        <p>Website: ${user.website}</p>
        <p>Company: ${user.company.name}</p>
    `;
}

start();
