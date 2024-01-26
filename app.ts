const mainElem: HTMLElement | null = document.querySelector('#mainElem')
const elem1: HTMLElement | null = document.querySelector('.el')
let firstRender = false;
let matrix: number[][] = [
    [3, 3, 3,],
    [3, 3, 3,],
    [3, 3, 3,],
]

const clearButton = document.querySelector('.clearButton');
const statusInfo = document.querySelector('.player')
const icon = document.querySelector('.icon')
const playerName: NodeListOf<HTMLElement> = document.querySelectorAll('.player-name')
// const winBlock = document.querySelector('.win-block')
// const winLine = document.querySelector('.win-line')

let gameStatus: 1 | 2 | undefined = undefined
let step: number = 0
let winner: 1 | 2 | undefined = undefined
let stateLine: number | undefined = undefined



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

function getColorWinLine(winner: 1 | 2 | undefined, winLine: HTMLDivElement): void {
    if (winner === 1) {
        winLine.style.backgroundColor = "var(--purple)";
    }
    if (winner === 2) {
        winLine.style.backgroundColor = "var(--orange)";
    }

}

function changePlayerName(): void {
    playerName.forEach((elem, index) => {
        elem.addEventListener("input", () => {
            const text = elem.innerHTML
            if (index === 0) elem.style.color = "var(--purple)";
            if (index === 1) elem.style.color = "var(--orange)";

            // elem.innerHTML = text
            console.log(text);

        })
    })
}
changePlayerName()
// addClassWinLine(stateLine)
// addClassWinLine(stateLine)
function addClassWinLine(line: number | undefined) {

    if (line === 0) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine)
        winBlock.style.transform = "rotate(90deg)";
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div1)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (line === 1) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine)
        winBlock.style.transform = "rotate(90deg)";
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (line === 2) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        getColorWinLine(winner, winLine)
        winBlock.style.transform = "rotate(90deg)";
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(div2)
        winBlock.appendChild(winLine)
        console.log("ASDASFEWF");
    }
    if (line === 3) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine)
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div1)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (line === 4) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine)
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (line === 5) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        // winLine.style.height = "100%";
        // winBlock.style.transform = "rotate(90deg)";
        getColorWinLine(winner, winLine)
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(div2)
        winBlock.appendChild(winLine)
        console.log("ASDASFEWF");
    }
    if (line === 6) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        winLine.style.height = "100%";
        getColorWinLine(winner, winLine)
        winBlock.style.transform = "rotate(-45deg)";
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (line === 7) {
        const div1: HTMLDivElement = document.createElement("div");
        const div2: HTMLDivElement = document.createElement("div");
        const winBlock: HTMLDivElement = document.createElement("div");
        const winLine: HTMLDivElement = document.createElement("div");
        winBlock.classList.add("win-block")
        winLine.classList.add("win-line")
        winLine.style.height = "100%";
        winBlock.style.transform = "rotate(45deg)";
        getColorWinLine(winner, winLine)
        elem1 && elem1.appendChild(winBlock)
        winBlock.appendChild(div1)
        winBlock.appendChild(winLine)
        winBlock.appendChild(div2)
        console.log("ASDASFEWF");
    }
    if (!line) { }


}

const secondPlayerIcon = (): SVGSVGElement => {
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
    newSVG.setAttribute("width", "100%");  // Добавьте эту строку
    newSVG.setAttribute("height", "100%");  // И эту строку
    newSVG.classList.add("w-6", "h-6");
    newSVG.appendChild(newPath);
    return newSVG;
}

const firstPlayerIcon = (): SVGSVGElement => {
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("stroke-width", "2.5");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("class", "w-6 h-6");
    svgElement.setAttribute("style", "color: #7321db;");
    svgElement.setAttribute("width", "100%");  // Добавьте эту строку
    svgElement.setAttribute("height", "100%");  // И эту строку

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");
    pathElement.setAttribute("style", "stroke: #7321db;");
    svgElement.appendChild(pathElement);
    return svgElement;
}

const emptyCell = (): SVGSVGElement => {
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("viewBox", "0 0 24 24");
    svgElement.setAttribute("stroke-width", "2.5");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("class", "w-6 h-6");
    // svgElement.setAttribute("style", "color: var(--white);");
    svgElement.setAttribute("width", "100%");  // Добавьте эту строку
    svgElement.setAttribute("height", "100%");  // И эту строку
    svgElement.classList.add("svg-empty")

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");
    // pathElement.setAttribute("style", "stroke: var(--white);");
    svgElement.appendChild(pathElement);
    return svgElement;
}



const blockDivCreate = (elem: number): void => {
    if (mainElem) {

        // const emptyCell = document.createElement('div')
        // emptyCell.classList.add('block-empty')

        const getIcon = (number: number): SVGSVGElement | null => {
            if (number === 0) return secondPlayerIcon();
            if (number === 1) return firstPlayerIcon();
            if (number === 3) return emptyCell()
            return null
        }

        const svg = getIcon(elem)

        const blockDiv = document.createElement('div')
        blockDiv.classList.add("block");
        elem1 && elem1.appendChild(blockDiv);

        svg && blockDiv.appendChild(svg);


    }
}

function toggleButtonStatus() {
    const clearBtn = document.querySelector(".clearButton")
    const startBtn = document.querySelector(".startButton")

    if (!gameStatus) {
        clearBtn && clearBtn.setAttribute(`disabled`, 'true')
        startBtn && startBtn.removeAttribute(`disabled`)
    } else {
        clearBtn && clearBtn.removeAttribute(`disabled`)
        startBtn && startBtn.setAttribute(`disabled`, 'true')
    }


}


function render(): void {

    elem1 && (elem1.innerHTML = '');

    matrix.map((line) => {
        line.map((elem) => {

            blockDivCreate(elem)

        })
    })
    cellClick()
    toggleButtonStatus()

    console.log("gamestatus: " + gameStatus);
}


function checkWinState(): void {
    let counterX = 0;
    let counterO = 0;
    let checkNullCells: boolean = false;
    let counterWinState: {}[] = [{}];
    for (let state = 0; state < winState.length; state++) {
        counterX = 0
        counterO = 0
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1 && winState[state][i][j] === "x") {
                    counterX += 1
                    counterWinState[state] = { ...counterWinState[state], "x": counterX }
                    if (counterX === 3) {
                        winner = 1
                        stateLine = state
                    }
                }
                if (matrix[i][j] === 0 && winState[state][i][j] === "x") {
                    counterO += 1
                    counterWinState[state] = { ...counterWinState[state], "o": counterO }
                    if (counterO === 3) {
                        winner = 2
                        stateLine = state
                    }
                }
                // console.log(matrix[i][j]);
                if (matrix[i][j] !== 3) checkNullCells = true
            }
        }

    }
    if (step === 9) {
        checkNullCells && statusInfo && (statusInfo.innerHTML = "Ничья")
    }
    // getWinner(counterWinState)
    // console.log("Найдено: " + counter);

    console.log(counterWinState);
}

function getWinner(winner: 1 | 2 | undefined): void {
    if (winner) {
        statusInfo && (statusInfo.innerHTML = `Победа: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${winner}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`)
        icon && (icon.innerHTML = "🏆")
        // gameStatus = undefined
        render()
        stateLine && addClassWinLine(stateLine)

        console.log("state:" + stateLine);

    }
}

function startGame(): void {
    if (!gameStatus) {
        const number = getRandomNumber(1, 2)
        if (number === 1 || number === 2) {
            gameStatus = number
            gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`)
            icon && (icon.innerHTML = "🎮")
            console.log(gameStatus);

        }
        render()
    }
}
function endGame(): void {
    if (gameStatus) {
        gameStatus = undefined
        stateLine = undefined
        winner = undefined
        step = 0
        statusInfo && (statusInfo.innerHTML = "Ожидание")
        icon && (icon.innerHTML = "🕒")
        clearCells()
    }
}

function clearCells(): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 3;
            // console.log(matrix[i][j]);
        }
    }
    render();
}

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cellClick(): void {
    const block = document.querySelectorAll('.block');

    block.forEach((block, index) => {
        gameStatus && block.addEventListener('click', () => {
            console.log("LINE: " + getLineCells(index));
            console.log("Elem: " + getElemCells(index));

            const line = getLineCells(index)
            const elem = getElemCells(index)
            if (gameStatus === 1) {
                if (line !== null && elem !== null) {
                    if (matrix[line][elem] === 3) {
                        matrix[line][elem] = 1
                        gameStatus = 2
                        step += 1

                        render()
                        gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 2 ? 0 : 1].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 2 ? 0 : 1].innerHTML}`)
                        checkWinState()
                        getWinner(winner)
                        addClassWinLine(stateLine)

                        // cellClick()
                        console.log(winner);
                    }
                }

            }
            else if (gameStatus === 2) {
                if (line !== null && elem !== null) {
                    if (matrix[line][elem] === 3) {
                        matrix[line][elem] = 0
                        gameStatus = 1
                        step += 1

                        render()
                        gameStatus && statusInfo && (statusInfo.innerHTML = `Ход: ${playerName[gameStatus === 1 ? 1 : 0].innerHTML === "Имя" ? `Игрок ${gameStatus}` : playerName[gameStatus === 1 ? 1 : 0].innerHTML}`)
                        checkWinState()
                        getWinner(winner)
                        addClassWinLine(stateLine)

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

function getLineCells(number: number): number | null {
    if (number <= 2) return 0
    if (number >= 3 && number <= 5) return 1
    if (number >= 6) return 2
    return null
}
function getElemCells(number: number): number | null {
    if (number === 0 || number === 3 || number === 6) return 0
    if (number === 1 || number === 4 || number === 7) return 1
    if (number === 2 || number === 5 || number === 8) return 2
    return null
}

render()

// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
// blockDivCreate()
