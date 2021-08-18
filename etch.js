//Universal variables
const container = document.querySelector('#container');

//Set the class and grid for #container
container.classList.add('holder');
//Create 16 divs that will go into #container with a loop
for(let i = 0; i < 16 * 16; i++) {
    const boxes = document.createElement(div);
    boxes.classList.add('boxes');
    container.appendChild(boxes);
}
//Give the divs the same class

//Append everything to the DOM