let container = document.querySelector('.container');

//Create a series of squares to form grid
function createGrid(gridSize){
    for(let i = 0; i < gridSize * gridSize; i++){
        let grid = document.createElement('div');
        grid.setAttribute('class','grid');
        container.appendChild(grid);
        grid.style.height = `calc(500px/${gridSize})`;
        grid.style.width = `calc(500px/${gridSize})`;
        
        //Make grid boxes change color when hovered
        grid.addEventListener('mouseover',() => {
            console.log('hovered')
            grid.style.backgroundColor = 'red';
        }); 
    }   
}

createGrid(prompt('Grid Number'));