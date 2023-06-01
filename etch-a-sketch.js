let container = document.querySelector('.container');
let promptButton = document.querySelector('#prompt_button');

//Create a series of squares to form grid
function createGrid(gridSize){
    for(let i = 0; i < gridSize * gridSize; i++){
        let grid = document.createElement('div');
        grid.setAttribute('class','grid');
        container.appendChild(grid);
        grid.style.height = `calc(500px/${gridSize})`;
        grid.style.width = `calc(500px/${gridSize})`;

        //random values for RGB
        let randomR = Math.floor(Math.random() * 255);
        let randomG = Math.floor(Math.random() * 255);
        let randomB = Math.floor(Math.random() * 255);
        
        //Make grid boxes change color when hovered
        grid.addEventListener('mouseover',() => {
            console.log('hovered')
            grid.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        }); 
    }   
}

//Prompt appears when button is clicked
promptButton.addEventListener('click', () => {
    createGrid(prompt('Grid Number'));
})