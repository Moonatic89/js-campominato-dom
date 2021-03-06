
/*
Software generate 16 bombs randomly placed in cells, without repetition.
If the user clicks on a bomb, the game ends, and prints the number of
succesful clicks and the rest of the bombs position.
*/

const difficultyBtn = document.querySelector(".controlsContainer>button");
const cellParent = document.querySelector(".row");
const result = document.querySelector("header>h1");
const bombs = [];
let debugNotClick = false;
let difficultyValue;
let successfulClicks = 0;

difficultyBtn.addEventListener("click", function () {
    difficultyValue = document.querySelector(".controlsContainer>select").value;
    gameStart(convertDiffToValue(difficultyValue), result);

});

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

function gameStart(convertedDifficulty, result) {
    debugNotClick = false;
    result.innerHTML = "";
    createBombs(convertedDifficulty);
    createGrid(convertedDifficulty, cellParent);
}

function createGrid(difficulty, gridContainer) {

    successfulClicks = 0;
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

    //let
    for (let i = 0; i < cellNumbers; i++) {
        const cell = document.createElement("div");

        cell.className = swapSize;
        cell.innerHTML = (i + 1);
        cellParent.append(cell);

        cell.addEventListener("click", function () {

            handleMouseEvent(this, gridContainer);
        })
    }
}

function handleMouseEvent(cell, container) {
    if (!debugNotClick) {

        if (bombs.includes(parseInt(cell.innerHTML))) {
            endGame(container, result);
            // console.log("you were safe for " + successfulClicks)
        } else {
            successfulClicks++;
            cell.classList.add("azure");
        }
    }

}

function createBombs(difficulty) {
    bombs.length = 0;

    let max;

    if (difficulty == 1) {
        max = 100;
    } else if (difficulty == 2) {
        max = 81;
    } else if (difficulty == 3) {
        max = 49;
    }

    while (bombs.length < 16) {
        let randomNumber = randomNumberInRange(1, max);

        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    console.log(bombs);
}

function endGame(gridContainer, result) {

    //Reveal Bombs
    for (let i = 0; i < 16; i++) {
        const bombReveal = gridContainer.childNodes[(bombs[i] - 1)];
        bombReveal.classList.add("crimson");
    }

    //Remove event listener
    debugNotClick = true;

    result.innerHTML = `
Nice try! You found ${successfulClicks} empty spots! Click Play to restart.`

    /*
    for (let i = 0; i < 100; i++) {
        const cell = gridContainer.childNodes[i];
        console.log(cell);
        //cell.removeEventListener("click", handleMouseEvent);
    }
*/
    //  alert(`You lost! you succesfully clicked ${successfulClicks} empty spots!`)

}
