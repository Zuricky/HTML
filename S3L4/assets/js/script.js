const board = document.querySelector('#board');
const numbers = Array.from({ length: 76 }, (_, i) => i + 1);

numbers.forEach(num => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = num;
    board.appendChild(cell);
});

const cells = document.querySelectorAll('.cell');
let drawnNums = [];

extractNum = () => {
    if (drawnNums.length === 76) {
        alert("Tutti i numeri sono stati estratti!");
        return;
    }

    let randomNum;
    do {
        randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    } while (drawnNums.includes(randomNum));

    drawnNums.push(randomNum);
    highlightCell(randomNum);
}

highlightCell = (number) => {
    cells.forEach(cell => {
        if (parseInt(cell.textContent) === number) {
            cell.classList.add('highlighted');
        }
    });
}

document.querySelector('#extractButton').addEventListener('click', extractNum);