const newGridButton = document.querySelector(".setBoxes");

const createElements = (count, type) => {
    for (let i = 0; i < count; i++) {
        let element = document.createElement(`${type}`);
        // console.log(element);
        element.addEventListener("mouseover", (e) => {
            element.classList.toggle("yellow")
        })
        let where = document.querySelector(".container")
        where.appendChild(element);
    }
}



const resetGrid = () => {
    document.querySelector(".container").innerHTML = "";
    let amount = prompt("Please enter the size of your grid:");
    amount *= amount;
    createElements(amount, "div");
}

createElements(32, "div");
newGridButton.addEventListener("click", resetGrid);
