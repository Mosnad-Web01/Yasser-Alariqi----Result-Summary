// Function to update card data
function updateCardData(data, index) {
    const cardItem = document.querySelectorAll(".card-item")[index];
    const icon = cardItem.querySelector("figure img");
    const cardTitle = cardItem.querySelector("h3");
    const scoreValue = cardItem.querySelector("#score-span");
    const scoreTotal = cardItem.querySelector("#score-total");

    icon.setAttribute("src", data[index].icon);
    cardTitle.textContent = data[index].category;
    scoreValue.textContent = data[index].score;
    scoreTotal.textContent = "/ 100";
}

// Fetch and apply data from JSON
window.addEventListener("load", function() {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            // Loop through each card item and update data
            data.forEach((item, index) => {
                if (index < 4) { // Ensure you don't exceed the number of card items
                    updateCardData(data, index);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
