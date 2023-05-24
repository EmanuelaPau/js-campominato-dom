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

    // genero le bombe 
    let myBombs = getRandomUniqueNumber(1, 100, 16);

    // reset 
    myGrid.innerHTML = "";
    // I add grid border using a class 
    myGrid.classList.add('grid-border');

    for (let i = 1; i <= 100; i++) {
        const appendMyCell = createCellElement("div", "cell");
        appendMyCell.innerHTML = '<p> </p>';

        // console.log(i);

        appendMyCell.addEventListener('click', function () {
            console.log(i);
            if (myBombs.includes(i)) {
                appendMyCell.classList.toggle('exploded');
            } else {
                appendMyCell.classList.toggle('selected');
            }
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

/**
 * Function that generates random numbers all different between them
 * @param {*} minNumber minimum number to generate
 * @param {*} maxNumber maximum number to generate
 * @param {*} elementsNumber number of elements to include to the list
 * @returns a list of numbers all different 
 */

function getRandomUniqueNumber(minNumber, maxNumber, elementsNumber) {
    // Add a array 
    const numbersList = [];

    // Check if the numbers i ask are more than the numbers possible 
    if ((maxNumber - minNumber) < elementsNumber) {
        return false;
    }

    while (numbersList.length < elementsNumber) {
        const myNewRandomNumber = generateRandomNumber(minNumber, maxNumber);

        if (!numbersList.includes(myNewRandomNumber)) {
            numbersList.push(myNewRandomNumber);
        }
    }

    return numbersList;
}

console.log(getRandomUniqueNumber(1, 20, 16));


// AGGIUNGO LE BOMBE ALLA CRIGLIA 
// inizio gioco 
// creo griglia 
// creo cella 
// alla cella associo un numero che e' i 
// creo una serie di numeri random
// confronto i numeri della griglia ai numeri della lista : lista.includes numero griglia 
// se la griglia non include i numeri aggiungo il colore blu quando premo 
// se la griglia include il numero aggiungo il colore rosso quando premo 