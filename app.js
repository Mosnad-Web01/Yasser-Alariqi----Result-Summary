const icon = document.getElementById("icon")
const cardTitle = document.getElementById("cardTitle")
const scoreValue = document.getElementById('score-span');
const scoreTotal = document.getElementById('score-total');


let 
fetch("./data.json").then((repsonse) => {
    return repsonse.json()
}).then((data) => {
    
    for (let i = 0; i <= 4; i++) {
        console.log(data[i].category);
        console.log(data[i].score);
        console.log(data[i].icon);
    }
    
})