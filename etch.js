//Global variables
const container = document.querySelector('#container');
const play = document.querySelector('#play');
let size;

//variables for the language to add grid style.


//Set the class and grid for #container
container.classList.add('holder');
//Start the fun when you click play
play.addEventListener('click', makeDivs);
function makeDivs() {
    //Reset everything
    let deletes = document.querySelectorAll('#hoverMe');
    for(let i = 0; i < deletes.length; i++) {
        let removes = deletes[i];
        container.removeChild(removes);
    }
    //Create and insert the boxes
    size = slider.value;
    //Create the grid based on the slider value
    const rows = "grid-template-rows: repeat(" + size + ", 1fr)";
    const columns = "grid-template-columns: repeat(" + size + ", 1fr)";
    const grid = rows + "; " + columns;
    container.setAttribute("style", grid);
    //Create the divs to fill the grid
    //Give them a common ID to select all
    //Give them a class to select the individual box
    for(let i = 0; i < (size * size); i++) {
        let boxes = document.createElement('div');
        boxes.id = "hoverMe";
        //boxes.classList.add("box" + i);
        container.appendChild(boxes);
    }
    for (let i = 0; i < document.querySelectorAll('#hoverMe').length; i++) {
        document.querySelectorAll('#hoverMe')[i].addEventListener('mouseenter', function(event) {
            //Target the div that is triggered
            let smallBox = event.target;
            smallBox.setAttribute("style", "background-color: black;");
        });
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

