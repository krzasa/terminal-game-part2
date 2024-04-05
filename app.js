
/**------------------------------------CONSTANTS---------------------------------------- */

let player1 = {
    name: '',
    symbol: ''
}
let player2 = {
    name: '',
    symbol: ''
}

let turn = 0;
const digits = ['1','2','3','4','5','6','7','8','9']

const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]
 

const container = document.querySelector('.gameboard')

 const textMaker1 = topRow.toString() 
 const textMaker2 = midRow.toString() 
 const textMaker3 = bottomRow.toString() 
 let gameDirection = "This is test text "
/**---------------------------------FUNCTIONS------------------------------------------- */


/**------------------------------------------------------Event Listeners/calls-------------------------------------- */
const gameboardElement = document.querySelector(".gameboard");
const gameButtonElement = document.querySelector(".gameButton")
const direcButtonElement = document.querySelector('.directionsButton')

gameButtonElement.addEventListener('click', () =>{  
    while(gameboardElement.firstChild) { 
        gameboardElement.removeChild(gameboardElement.firstChild);  //This loop clears the gameboard before starting
    }
    
    
    const para = document.createElement("h1");
    const para2 = document.createElement("h1");
    const para3 = document.createElement("h1");
    const para4 = document.createElement ('h2')
    gameDirection ="Please enter the name of Player 1 in the input box"
    if (player1.name === "") {

    }



    para.textContent = textMaker1 
    para2.textContent = textMaker2
    para3.textContent = textMaker3 
    para4.textContent = gameDirection
    para.style.wordSpacing = "10px"
    para2.style.wordSpacing = "10px"
    para3.style.wordSpacing = "10px"
    gameboardElement.appendChild(para);
    gameboardElement.appendChild(para2);
    gameboardElement.appendChild(para3);
    gameboardElement.appendChild(para4);


    
})



direcButtonElement.addEventListener('click', () =>{  
    while(gameboardElement.firstChild) { 
        gameboardElement.removeChild(gameboardElement.firstChild); 
    } 
    const para = document.createElement("p");
   
    // gameboardElement.removeChild()
    para.textContent = 'The object of tic tac toe is to get three in a row vertically horizontally or diagonally. You will face your computer and play turn for turn. Each player will be asked for their desired symbol. First player to get three in a row wins! Rules are simple, the fun is the strategy!'
    
    gameboardElement.appendChild(para);
    
})

direcButtonElement.addEventListener('click', () =>{  
    while(gameboardElement.firstChild) { 
        gameboardElement.removeChild(gameboardElement.firstChild); 
    } 
    const para = document.createElement("p");
   
    // gameboardElement.removeChild()
    para.textContent = 'The object of tic tac toe is to get three in a row vertically horizontally or diagonally. You will face your computer and play turn for turn. Each player will be asked for their desired symbol. First player to get three in a row wins! Rules are simple, the fun is the strategy!'
    
    gameboardElement.appendChild(para);
    
})

