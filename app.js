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
const icon = document.querySelector('.icon');
const playerName = document.querySelectorAll('.player-name');
// const winBlock = document.querySelector('.win-block')
// const winLine = document.querySelector('.win-line')
let gameStatus = undefined;
let step = 0;
let winner = undefined;
let stateLine = undefined;
const winState = [
    // Горизонтальные линии
    [
        ["x", "x", "x"],
        ["l", "l", "l"],
        ["l", "l", "l"],
    ],
    [
        ["l", "l", "l"],
        ["x", "x", "x"],
        ["l", "l", "l"],
    ],
    [
        ["l", "l", "l"],
        ["l", "l", "l"],
        ["x", "x", "x"],
    ],
    // Вертикальные линии
    [
        ["x", "l", "l"],
        ["x", "l", "l"],
        ["x", "l", "l"],
    ],
    [
        ["l", "x", "l"],
        ["l", "x", "l"],
        ["l", "x", "l"],
    ],
    [
        ["l", "l", "x"],
        ["l", "l", "x"],
        ["l", "l", "x"],
    ],
    // Диагональные линии
    [
        ["x", "l", "l"],
        ["l", "x", "l"],
        ["l", "l", "x"],
    ],
    [
        ["l", "l", "x"],
        ["l", "x", "l"],
        ["x", "l", "l"],
    ],
];
function getColorWinLine(winner, winLine) {
    if (winner === 1) {
        winLine.style.backgroundColor = "var(--purple)";
    }
    if (winner === 2) {
        winLine.style.backgroundColor = "var(--orange)";
    }
}
function changePlayerName() {
    playerName.forEach((elem, index) => {
        elem.addEventListener("input", () => {
            const text = elem.innerHTML;
            if (index === 0)
                elem.style.color = "var(--purple)";
            if (index === 1)
                elem.style.color = "var(--orange)";
            // elem.innerHTML = text
            console.log(text);
        });
    });
}
changePlayerName();
// addClassWinLine(stateLine)
// addClassWinLine(stateLine)
function addClassWinLine(line) {
    if (line === 0) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine);
        winBlock.style.transform = "rotate(90deg)";
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div1);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (line === 1) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine);
        winBlock.style.transform = "rotate(90deg)";
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (line === 2) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine);
        winBlock.style.transform = "rotate(90deg)";
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(div2);
        winBlock.appendChild(winLine);
        console.log("ASDASFEWF");
    }
    if (line === 3) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine);
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div1);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (line === 4) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine);
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (line === 5) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine);
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(div2);
        winBlock.appendChild(winLine);
        console.log("ASDASFEWF");
    }
    if (line === 6) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        winLine.style.height = "100%";
        getColorWinLine(winner, winLine);
        winBlock.style.transform = "rotate(-45deg)";
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (line === 7) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const winBlock = document.createElement("div");
        const winLine = document.createElement("div");
        winBlock.classList.add("win-block");
        winLine.classList.add("win-line");
        winLine.style.height = "100%";
        winBlock.style.transform = "rotate(45deg)";
        getColorWinLine(winner, winLine);
        mainElem && mainElem.appendChild(winBlock);
        winBlock.appendChild(div1);
        winBlock.appendChild(winLine);
        winBlock.appendChild(div2);
        console.log("ASDASFEWF");
    }
    if (!line) { }
}
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
    let counterX = 0;
    let counterO = 0;
    let checkNullCells = false;
    let counterWinState = [{}];
    for (let state = 0; state < winState.length; state++) {
        counterX = 0;
        counterO = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1 && winState[state][i][j] === "x") {
                    counterX += 1;
                    counterWinState[state] = Object.assign(Object.assign({}, counterWinState[state]), { "x": counterX });
                    if (counterX === 3) {
                        winner = 1;
                        stateLine = state;
                    }
                }
                if (matrix[i][j] === 0 && winState[state][i][j] === "x") {
                    counterO += 1;
                    counterWinState[state] = Object.assign(Object.assign({}, counterWinState[state]), { "o": counterO });
                    if (counterO === 3) {
                        winner = 2;
                        stateLine = state;
                    }
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
    // getWinner(counterWinState)
    // console.log("Найдено: " + counter);
    console.log(counterWinState);
}
function getWinner(winner) {
    if (winner) {
        statusInfo && (statusInfo.innerHTML = `Победа: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${winner}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`);
        icon && (icon.innerHTML = "🏆");
        // gameStatus = undefined
        render();
        stateLine && addClassWinLine(stateLine);
        console.log("state:" + stateLine);
    }
}
function startGame() {
    if (!gameStatus) {
        const number = getRandomNumber(1, 2);
        if (number === 1 || number === 2) {
            gameStatus = number;
            gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`);
            icon && (icon.innerHTML = "🎮");
            console.log(gameStatus);
        }
        render();
    }
}
function endGame() {
    if (gameStatus) {
        gameStatus = undefined;
        stateLine = undefined;
        winner = undefined;
        step = 0;
        statusInfo && (statusInfo.innerHTML = "Ожидание");
        icon && (icon.innerHTML = "🕒");
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
                if (line !== null && elem !== null) {
                    if (matrix[line][elem] === 3) {
                        matrix[line][elem] = 1;
                        gameStatus = 2;
                        step += 1;
                        render();
                        gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 2 ? 0 : 1].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 2 ? 0 : 1].innerHTML}`);
                        checkWinState();
                        getWinner(winner);
                        addClassWinLine(stateLine);
                        // cellClick()
                        console.log(winner);
                    }
                }
            }
            else if (gameStatus === 2) {
                if (line !== null && elem !== null) {
                    if (matrix[line][elem] === 3) {
                        matrix[line][elem] = 0;
                        gameStatus = 1;
                        step += 1;
                        render();
                        gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`);
                        checkWinState();
                        getWinner(winner);
                        addClassWinLine(stateLine);
                        // cellClick()
                        console.log(winner);
                    }
                }
            }
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
