// I take the playButton 
const playButton = document.querySelector('.playbutton');

// Add event listener connected to playButton that start my game 
playButton.addEventListener(('click'), function () {
    startNewGame(1, 100, 16);
});

// I create a function that starts new game 
function startNewGame() {

    let resetTextPoints = document.getElementById('your-points-text');

    playButton.classList.remove('dead-playbutton');
    resetTextPoints.innerHTML = 00;
    // yourTextPoints.innerHTML = 00;

    const difficultySelector = document.querySelector('select');

    if (difficultySelector.value == '1') {
        // alert('hard');
        createGridElement(1, 100, 16, 'hard')

    } else if (difficultySelector.value == '2') {
        // alert('medium');
        createGridElement(1, 81, 8, 'medium')
    } else if (difficultySelector.value == '3') {
        // alert('easy');
        createGridElement(1, 49, 5, 'easy')
    }
}

/**
 * Function that creates a grid of cells
 * @param minNumber minimum number of random number that has to be determined
 * @param maxNumber number of cells and maximum number of random number that has to be determined
 * @param elementsNumber number of bombs that will be generated
 * @param classToAdd class to add when you determine thetype of difficulty of the gamw
 */

function createGridElement(minNumber, maxNumber, elementsNumber, classToAdd) {
    // I take my grid 
    const myGrid = document.getElementById('my_grid');
    // reset 
    myGrid.innerHTML = "";

    // Add bombs 
    let myBombs = getRandomUniqueNumber(minNumber, maxNumber, elementsNumber);
    console.log(myBombs);
    // I add grid border using a class 
    myGrid.classList.add('grid-border');

    // Add score variable 
    let yourScore = 0;
    // Verify if game continue 
    let isBombUnexploded = true;
    let displayBombs = false;
    let yourTextPoints = document.getElementById('your-points-text');

    for (let i = 1; i <= maxNumber; i++) {
        const appendMyCell = createCellElement("div", "cell");
        appendMyCell.innerHTML = '<p> </p>';
        appendMyCell.classList.add(classToAdd);

        if (myBombs.includes(i)) {
            appendMyCell.classList.toggle('exploded');
            appendMyCell.classList.toggle('mine');
        }

        appendMyCell.addEventListener('click', function () {

            if (isBombUnexploded === true) {
                yourScore = yourScore + 1;

                if (myBombs.includes(i)) {
                    myGrid.classList.add('game-over')

                    yourScore = yourScore - 1;
                    console.log(`you lost, your score is: ${yourScore}`);
                    // appendMyCell.disabled = true;
                    displayBombs = true;
                    // console.log(displayBombs);
                    isBombUnexploded = false;

                    playButton.classList.add('dead-playbutton');

                } else {
                    appendMyCell.classList.toggle('selected');
                }

                if (yourScore >= maxNumber - elementsNumber) {
                    console.log(`you won, your score is: ${yourScore}`);
                    isBombUnexploded = false;
                }

            }

            // if (displayBombs === true) {
            //     console.log('boom')
            //     appendMyCell.classList.add('mine');
            // }

            yourTextPoints.innerHTML = yourScore;
        }, { once: true });



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
