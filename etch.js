//Global variables
const container = document.querySelector('#container');
const play = document.querySelector('#play');
let size, boxes;

//variables for the language to add grid style.


//Set the class and grid for #container
container.classList.add('holder');
//Create 16 divs that will go into #container with a loop
play.addEventListener('click', makeDivs);
function makeDivs() {
    size = slider.value;
    //Create the grid based on the slider location
    const rows = "grid-template-rows: repeat(" + size + ", 1fr)";
    const columns = "grid-template-columns: repeat(" + size + ", 1fr)";
    const grid = rows + "; " + columns;
    container.setAttribute("style", grid);
    //Create the divs to fill the grid
    for(let i = 0; i < (size * size); i++) {
        boxes = document.createElement('div');
        boxes.id = "hoverMe";
        container.appendChild(boxes);
    }
    for (let i = 0; i < document.querySelectorAll('#hoverMe').length; i++) {
        document.querySelectorAll('#hoverMe')[i].addEventListener('click', colorChange);
    }
}

//Create display for slider value
const slider = document.querySelector('#size');
const selector = document.querySelector('#selector');
const selectValue = document.querySelector('#selectValue');


slider.oninput = function(){
    selector.style.left = this.value + "%";
    selectValue.innerHTML = slider.value;
}

function colorChange() {
        boxes.setAttribute('style', 'background: black;');
        console.log('fuck yeah');
}

