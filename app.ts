const mainElem: HTMLElement | null = document.querySelector('#mainElem')
let firstRender = false;
let matrix: number[][] = [
    [3, 3, 3,],
    [3, 3, 3,],
    [3, 3, 3,],
]

let gameStatus: 1 | 2 | undefined = 1


const firstPlayerIcon = (): SVGSVGElement => {
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
}

const secondPlayerIcon = (): SVGSVGElement => {
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
}



const blockDivCreate = (elem: number): void => {
    if (mainElem) {

        const getIcon = (number: number): SVGSVGElement | null => {
            if (number === 0) return firstPlayerIcon();
            if (number === 1) return secondPlayerIcon();
            return null
        }

        const svg = getIcon(elem)

        const blockDiv = document.createElement('div')
        blockDiv.classList.add("block");
        mainElem.appendChild(blockDiv);

        svg && blockDiv.appendChild(svg);


    }
}



function render(): void {
    mainElem && (mainElem.innerHTML = '');
    matrix.map((line) => {
        line.map((elem) => {

            blockDivCreate(elem)

        })
    })
    cellClick()

    console.log("gamestatus: " + gameStatus);
}


function cellClick(): void {
    const block = document.querySelectorAll('.block');

    block.forEach((block, index) => {
        block.addEventListener('click', () => {
            console.log("LINE: " + getLineCells(index));
            console.log("Elem: " + getElemCells(index));
            const line = getLineCells(index)
            const elem = getElemCells(index)
            if (gameStatus === 1) {
                if (line !== null && elem !== null) (matrix[line][elem] = 1)
                gameStatus = 2
            }
            else if (gameStatus === 2) {
                if (line !== null && elem !== null) (matrix[line][elem] = 0)
                gameStatus = 1
            }
            // removeCells()

            render()
            // cellClick()
            console.log(matrix);

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