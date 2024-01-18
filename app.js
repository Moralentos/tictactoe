"use strict";
const mainElem = document.querySelector('#mainElem');
let firstRender = false;
let matrix = [
    [3, 3, 3,],
    [3, 3, 3,],
    [3, 3, 3,],
];
const clearButton = document.querySelector('.clearButton');
const statusInfo = document.querySelector('.player');
let gameStatus = undefined;
let step = 0;
const winState = [[
        ["x", "x", "x",],
        ["l", "l", "l",],
        ["l", "l", "l",],
    ], [
        ["x", "l", "l",],
        ["l", "x", "l",],
        ["l", "l", "x",],
    ], [
        ["x", "l", "l",],
        ["x", "l", "l",],
        ["x", "l", "l",],
    ]
];
const firstPlayerIcon = () => {
    const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.setAttribute("stroke-linecap", "round");
    newPath.setAttribute("stroke-linejoin", "round");
    newPath.setAttribute("d", "M 11 3 Z Z Z M 21 12 a 9 9 0 1 1 -18 0 a 9 9 0 0 1 18 0 Z");
    newSVG.setAttribute("xmlns", "http://www.w3.org/2000/newSVG");
    newSVG.setAttribute("fill", "none");
    newSVG.setAttribute("viewBox", "0 0 24 24");
    newSVG.setAttribute("stroke-width", "2.5");
    newSVG.setAttribute("stroke", "#ffae12");
    newSVG.classList.add("w-6", "h-6");
    newSVG.appendChild(newPath);
    return newSVG;
};
const secondPlayerIcon = () => {
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("stroke-width", "2.5");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("class", "w-6 h-6");
    svgElement.setAttribute("style", "color: #7321db;");
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");
    pathElement.setAttribute("style", "stroke: #7321db;");
    svgElement.appendChild(pathElement);
    return svgElement;
};
const blockDivCreate = (elem) => {
    if (mainElem) {
        const getIcon = (number) => {
            if (number === 0)
                return firstPlayerIcon();
            if (number === 1)
                return secondPlayerIcon();
            return null;
        };
        const svg = getIcon(elem);
        const blockDiv = document.createElement('div');
        blockDiv.classList.add("block");
        mainElem.appendChild(blockDiv);
        svg && blockDiv.appendChild(svg);
    }
};
function render() {
    mainElem && (mainElem.innerHTML = '');
    matrix.map((line) => {
        line.map((elem) => {
            blockDivCreate(elem);
        });
    });
    cellClick();
    console.log("gamestatus: " + gameStatus);
}
function checkWinState() {
    let counter = 0;
    let checkNullCells = false;
    let counterWinState = [];
    for (let state = 0; state < winState.length; state++) {
        counter = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1 && winState[state][i][j] === "x") {
                    counter += 1;
                    counterWinState[state] = counter;
                }
                // console.log(matrix[i][j]);
                if (matrix[i][j] !== 3)
                    checkNullCells = true;
            }
        }
    }
    if (step === 9) {
        checkNullCells && statusInfo && (statusInfo.innerHTML = "Ничья");
    }
    console.log("Найдено: " + counter);
    console.log(counterWinState);
}
function startGame() {
    if (!gameStatus) {
        const number = getRandomNumber(1, 2);
        if (number === 1 || number === 2) {
            gameStatus = number;
            console.log(gameStatus);
        }
        render();
    }
}
function EndGame() {
    if (gameStatus) {
        gameStatus = undefined;
        clearCells();
    }
}
function clearCells() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 3;
            // console.log(matrix[i][j]);
        }
    }
    render();
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cellClick() {
    const block = document.querySelectorAll('.block');
    block.forEach((block, index) => {
        gameStatus && block.addEventListener('click', () => {
            console.log("LINE: " + getLineCells(index));
            console.log("Elem: " + getElemCells(index));
            const line = getLineCells(index);
            const elem = getElemCells(index);
            if (gameStatus === 1) {
                if (line !== null && elem !== null)
                    (matrix[line][elem] = 1);
                gameStatus = 2;
            }
            else if (gameStatus === 2) {
                if (line !== null && elem !== null)
                    (matrix[line][elem] = 0);
                gameStatus = 1;
            }
            // removeCells()
            step += 1;
            render();
            // cellClick()
            console.log(matrix);
            checkWinState();
        });
    });
}
// function removeCells(): void {
//     block.forEach((block) => block.remove())
// }
function getLineCells(number) {
    if (number <= 2)
        return 0;
    if (number >= 3 && number <= 5)
        return 1;
    if (number >= 6)
        return 2;
    return null;
}
function getElemCells(number) {
    if (number === 0 || number === 3 || number === 6)
        return 0;
    if (number === 1 || number === 4 || number === 7)
        return 1;
    if (number === 2 || number === 5 || number === 8)
        return 2;
    return null;
}
render();
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
