
/*
Software generate 16 bombs randomly placed in cells, without repetition.
If the user clicks on a bomb, the game ends, and prints the number of
succesful clicks and the rest of the bombs position.
*/

const difficultyBtn = document.querySelector(".controlsContainer>button");
const cellParent = document.querySelector(".row");
let difficultyValue;

difficultyBtn.addEventListener("click", function () {
    difficultyValue = document.querySelector(".controlsContainer>select");
});



createGrid(difficulty);

function convertDiffToValue(valueToConvert) {
    if (valueToConvert == "easy") {
        return 1;
    } else if (divider == 2) {
        return 2;
    } else if (divider == 3) {
        return 3;
    }
}

function createGrid(divider) {

    let swapSize;
    let cellNumbers;
    if (divider == 1) {
        swapSize = "grid_cell timesTen";
        cellNumbers = 100;
    } else if (divider == 2) {
        swapSize = "grid_cell timesNine";
        cellNumbers = 81;
    } else if (divider == 3) {
        swapSize = "grid_cell timesSeven";
        cellNumbers = 49;
    }
    for (let i = 0; i < cellNumbers; i++) {
        const cell = document.createElement("div");

        cell.className = swapSize;
        cell.innerHTML = (i + 1);
        cellParent.append(cell);

        cell.addEventListener("click", function () {
            this.classList.add("azure");
        });
    }
}
