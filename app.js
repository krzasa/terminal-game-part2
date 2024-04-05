
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

 let inputVal = ""
 let inputCount = 0
 const gameboardElement = document.querySelector(".gameboard");
const gameButtonElement = document.querySelector(".gameButton")
const direcButtonElement = document.querySelector('.directionsButton')
const submitButton = document.querySelector(".submit")
const choiceInput = document.querySelector('.textInput')
 let directionElement = document.querySelector(".directions")
const battleElement = document.querySelector(".battle")
/**---------------------------------FUNCTIONS------------------------------------------- */
// const userCall = (name) => {  // creating a function for asking the name of the players 
    
   

//     player1.name =  name // create variable for player 1 from user prompt
//     gameDirection = `Player 1's name is ${player1.name}`;

//     player2.name = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
//     console.log(`Player 2's name is ${player2.name}`);

// }

const inputCheck = (input) => {
    //console.log(input); // checks the function input
    if (input.length > 1 && inputCount < 1) {
        player1.name = input
        gameDirection = `Player 1's name is ${player1.name}`;
        //console.log(gameDirection);
        directionElement.textContent = gameDirection
        
        inputCount += 1
    }else if ( input.length > 1 && inputCount < 2){
        player2.name = input
        gameDirection = `Player 2's name is ${player2.name} , now ${player1.name} what symbol do you want?`;
        directionElement.textContent = gameDirection
        inputCount += 1
    }
    if (input.length < 2) {
        
        
        if (input === "X" || input === "x"){
        player1.symbol = "X"
        player2.symbol = "O"
        
        // console.log(player1.symbol);
        gameDirection = `${player1.name} 's symbol is ${player1.symbol} , and ${player2.name} is ${player2.symbol}`
        directionElement.textContent = gameDirection
        inputCount += 1
        } 
        else if (input ==="O"|| input ==="o"){
        player1.symbol = "O"
        player2.symbol = "X"
        gameDirection = `${player1.name} 's symbol is ${player1.symbol} , and ${player2.name} is ${player2.symbol}, once you're ready click the "Start battle button"`
        directionElement.textContent = gameDirection
        inputCount += 1
        }
       
    } 
}

const ticBattle = () {

    
}


/**------------------------------------------------------Event Listeners/calls-------------------------------------- */


gameButtonElement.addEventListener('click', () =>{  
    while(gameboardElement.firstChild) { 
        gameboardElement.removeChild(gameboardElement.firstChild);  //This loop clears the gameboard before starting
    }
    
    
    const para = document.createElement("h1");
    const para2 = document.createElement("h1");
    const para3 = document.createElement("h1");
    const para4 = document.createElement ('h2')
    gameDirection ="Please enter the name of Player 1 in the input box, then player 2's name after submitting"
    if (player1.name === "") {

    }



    para.textContent = textMaker1 
    para2.textContent = textMaker2
    para3.textContent = textMaker3 
    para4.textContent = gameDirection
    para4.setAttribute("class","directions")
    para.style.wordSpacing = "10px"
    para2.style.wordSpacing = "10px"
    para3.style.wordSpacing = "10px"
    gameboardElement.appendChild(para);
    gameboardElement.appendChild(para2);
    gameboardElement.appendChild(para3);
    directionElement.appendChild(para4);


    
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

submitButton.addEventListener('click', () =>{ 
    // console.log(choiceInput.value); 
    if(choiceInput.value != ""){
        inputCheck(choiceInput.value)
        // console.log("inputCheck(fire)");
    }
    
    
    
    
})

battleElement.addEventListener('click', () =>{ 
    
    ticBattle()
    
    
    
})