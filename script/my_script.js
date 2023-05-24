// I take the playButton 
const playButton = document.querySelector('.playbutton');

// Add event listener connected to playButton that start my game 
playButton.addEventListener(('click'), function () {
    startNewGame();
});

// I create a function that starts new game 
function startNewGame() {
    // I take my grid 
    const myGrid = document.getElementById('my_grid');
    // console.log(`My grid element is ${myGrid}`);

    // reset 
    myGrid.innerHTML = "";
    // I add grid border using a class 
    myGrid.classList.add('grid-border');

    for (i = 1; i <= 100; i++) {
        const appendMyCell = createCellElement("div", "cell");
        appendMyCell.innerHTML = '<p>' + i + '</p>';

        // console.log(i);

        appendMyCell.addEventListener('click', function () {
            console.log(i);
            appendMyCell.classList.toggle('selected');
        })

        myGrid.appendChild(appendMyCell);
    }
}

/**
 * Function that creates cell elements with the given tag and classes 
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 */
function createCellElement(tagName, className) {
    const myCell = document.createElement(tagName);
    myCell.className += className;
    return myCell;
}


/**
 * A function that generate a random number between a given max and minimum number
 * @param maxNumber your max number you want to get 
 * @param minNumber your min number you want to get 
 * @returns  a random number between maxNumber and minNumber
 */

function generateRandomNumber(maxNumber, minNumber) {
    const myRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    return myRandomNumber;
}

console.log(generateRandomNumber(5, 1));