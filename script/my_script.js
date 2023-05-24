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
        appendMyCell.innerHTML = '<p>' + i + '</p>'

        appendMyCell.addEventListener('click', function () {
            console.log(i + 1);
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