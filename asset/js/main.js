
/*
Software generate 16 bombs randomly placed in cells, without repetition.
If the user clicks on a bomb, the game ends, and prints the number of
succesful clicks and the rest of the bombs position.
*/

const difficultyBtn = document.querySelector(".controlsContainer>button");
const cellParent = document.querySelector(".row");
let difficultyValue;

difficultyBtn.addEventListener("click", function () {
    difficultyValue = document.querySelector(".controlsContainer>select").value;
    gameStart(convertDiffToValue(difficultyValue));

});

function gameStart(convertedDifficulty) {
    createGrid(convertedDifficulty, cellParent);
    createBombs(convertedDifficulty);
}


function convertDiffToValue(valueToConvert) {
    if (valueToConvert == "easy") {
        return 1;
    } else if (valueToConvert == "normal") {
        return 2;
    } else if (valueToConvert == "hard") {
        return 3;
    }
}

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createGrid(difficulty, gridContainer) {

    let swapSize;
    let cellNumbers;
    gridContainer.innerHTML = "";

    if (difficulty == 1) {
        swapSize = "grid_cell timesTen";
        cellNumbers = 100;
    } else if (difficulty == 2) {
        swapSize = "grid_cell timesNine";
        cellNumbers = 81;
    } else if (difficulty == 3) {
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

function createBombs(difficulty) {
    const bombs = [];
    while (bombs.length < 16) {



    }
}

