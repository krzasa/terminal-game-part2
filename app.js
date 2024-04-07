
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
let state = true

let topRow = [1, 2, 3]
let midRow = [4, 5, 6]
let bottomRow = [7, 8, 9]
const xsOrOs = ['X', 'x', 'O', 'o']
let selectedNumbers = []
let playerTurn= ""
let gameturns = 0



 

const container = document.querySelector('.gameboard')

 const textMaker1 = topRow.toString() 
 const textMaker2 = midRow.toString() 
 const textMaker3 = bottomRow.toString() 
 let gameDirection = "This is test text "


 let inputVal = ""
 let inputCount = 0
 let roundcou
 let gameboardElement1 = document.querySelector(".gameboard1");
 let gameboardElement2 = document.querySelector(".gameboard2");
 let gameboardElement3 = document.querySelector(".gameboard3");
const gameButtonElement = document.querySelector(".gameButton")
const direcButtonElement = document.querySelector('.directionsButton')
const submitButton = document.querySelector(".submit")
const choiceInput = document.querySelector('.textInput')
 let directionElement = document.querySelector(".directions")
const battleButton = document.querySelector(".battle")
const continueButton = document.querySelector(".continue")
/**---------------------------------FUNCTIONS------------------------------------------- */


const inputCheck = (input) => {
    
    if (input.length > 1 && inputCount < 1) {
        player1.name = input
        gameDirection = `Player 1's name is ${player1.name}`;
        
        directionElement.textContent = gameDirection
        choiceInput.value= ""
        
        inputCount += 1
    }else if ( input.length > 1 && inputCount < 2){
        player2.name = input
        gameDirection = `Player 2's name is ${player2.name} , now ${player1.name} what symbol do you want?`;
        directionElement.textContent = gameDirection
        choiceInput.value= ""
        inputCount += 1
        
    }
    if (input.length < 2) {
        
        
        if (input === "X" || input === "x"){
        player1.symbol = "X"
        player2.symbol = "O"
        
        
        gameDirection = `${player1.name} 's symbol is ${player1.symbol} , and ${player2.name} is ${player2.symbol}, once you're ready click the "Start battle button"`
        directionElement.textContent = gameDirection
        inputCount += 1
        choiceInput.value= ""
        } 
        else if (input ==="O"|| input ==="o"){
        player1.symbol = "O"
        player2.symbol = "X"
        gameDirection = `${player1.name} 's symbol is ${player1.symbol} , and ${player2.name} is ${player2.symbol}, once you're ready click the "Start battle button"`
        directionElement.textContent = gameDirection
        inputCount += 1
        choiceInput.value= ""
        }
         
    } 
    
}

const ticBattle = () => {  //this goees first and starts the tic tac toe game 
    
    
        console.log("This is working ");
        gameDirection = `${player1.name} has started the game, please pick your first spot on the board `
        directionElement.textContent = gameDirection
        console.log(state);
        playerTurn = "one"  // this changes the turn variable so player 2 goes next in the next function
        choiceInput.value= ""
        return
        
        
         


   
    
    
}
const tableChange = (input) => {  // this is the game logic function, each player takes a turn and puts their symbol 
    console.log('BOW working');
    console.log(state);
    
        
    
    if (playerTurn === "") {  // this is a default option to always start with player one in case the start battle function  didn't work
        
        gameDirection =`${player1.name} please pick your  spot on the board`
        directionElement.textContent = gameDirection
        playerTurn = "one"
        let choice = parseInt(input)
            if (choice >= 1 && choice <=3){
                topRow[choice - 1] = player1.symbol;
                selectedNumbers.push(input)
                let para = document.createElement("h1");
                para = topRow.toString()
                gameboardElement1.textContent = para
                console.log(input);
               state = true
               playerTurn = "two"
            
                
            }
            if (choice >= 4 && choice <= 6){
                midRow[choice - 4] = player1.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para2 = midRow.toString()
                gameboardElement2.textContent = para2
                console.log(input);
               state = true
               playerTurn = "two"
            
            }
            if (choice >= 7 && choice <= 9){
                bottomRow[choice - 7] = player2.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para3 = bottomRow.toString()
                gameboardElement3.textContent = para3
                console.log(input);
                state = true
                playerTurn = "two"
                
            }
            
            gameDirection = `${player2.name} please pick a number `
            directionElement.textContent = gameDirection
            playerTurn = "two"
            choiceInput.value= ""
            console.log('BOW working default');  
            winCheck()
        return  // if I remove this then goes stright to line 195 
    } else   // if the player turn gets changed to "one" or "two" run this else condition 
        
    if (playerTurn === "one") {
        if (selectedNumbers.includes(input)) {
            gameDirection = `${player1.name} please pick a number that was not used before`
            directionElement.textContent = gameDirection
            playerTurn = "one"
            
        } else {
            let choice = parseInt(input)
            if (choice >= 1 && choice <=3){
                topRow[choice - 1] = player1.symbol;
                selectedNumbers.push(input)
                let para = document.createElement("h1");
                para = topRow.toString()
                gameboardElement1.textContent = para
                console.log(input);
                state = false
                playerTurn = "two"
                gameDirection = `${player2.name} please pick a number `
                
            }
            if (choice >= 4 && choice <= 6){
                midRow[choice - 4] = player1.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para2 = midRow.toString()
                gameboardElement2.textContent = para2
                console.log(input);
                state = false
                playerTurn = "two"
                gameDirection = `${player2.name} please pick a number `
            }
            if (choice >= 7 && choice <= 9){
                bottomRow[choice - 7] = player1.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para3 = bottomRow.toString()
                gameboardElement3.textContent = para3
                console.log(input);
                state = false
                playerTurn = "two"
                gameDirection = `${player2.name} please pick a number `
            }
            console.log('BOW working player 1');
            choiceInput.value= ""
            gameDirection = `${player2.name} please pick a number `
            directionElement.textContent = gameDirection
            winCheck()
            return
            
        }
        
    } 
    else if (playerTurn === "two") {
        if (selectedNumbers.includes(input)) {
            gameDirection = `${player2.name} please pick a number that was not used before`
            directionElement.textContent = gameDirection
            console.log(input);
            playerTurn = "two"
            
        } else {
            
            let choice = parseInt(input)
            if (choice >= 1 && choice <=3){
                topRow[choice - 1] = player2.symbol;
                selectedNumbers.push(input)
                let para = document.createElement("h1");
                para = topRow.toString()
                gameboardElement1.textContent = para
                console.log(input);
               state = true
               playerTurn = "one"
               gameDirection = `${player1.name} please pick a number `
                directionElement.textContent = gameDirection
                
            }
            if (choice >= 4 && choice <= 6){
                midRow[choice - 4] = player2.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para2 = midRow.toString()
                gameboardElement2.textContent = para2
                console.log(input);
               state = true
               playerTurn = "one"
               gameDirection = `${player1.name} please pick a number `
                directionElement.textContent = gameDirection
            }
            if (choice >= 7 && choice <= 9){
                bottomRow[choice - 7] = player2.symbol;
                selectedNumbers.push(input)
                let para3 = document.createElement("h1");
                para3 = bottomRow.toString()
                gameboardElement3.textContent = para3
                console.log(input);
                state = true
                playerTurn = "one"
                gameDirection = `${player1.name} please pick a number `
                directionElement.textContent = gameDirection
            }
            gameDirection = `${player1.name} please pick a number `
            directionElement.textContent = gameDirection
            choiceInput.value= ""
            playerTurn = "one"
            console.log('BOW working player 2');
            winCheck()
            
        }
       
        
        return
        
    }
    
  
}

const winCheck = () => { 

    if (
        (topRow[0]=== player1.symbol && topRow[1]=== player1.symbol && topRow[2]=== player1.symbol)  // check for 3 in a row for first row
        ||
        (midRow[0]=== player1.symbol && midRow[1]=== player1.symbol && midRow[2]=== player1.symbol)  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== player1.symbol && bottomRow[1]=== player1.symbol && bottomRow[2]=== player1.symbol)  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== player1.symbol && midRow[0]=== player1.symbol && bottomRow[0]=== player1.symbol)//check left column
        ||
        (topRow[1]=== player1.symbol && midRow[1]=== player1.symbol && bottomRow[1]=== player1.symbol)//check middle column
        ||
        (topRow[2]=== player1.symbol && midRow[2]=== player1.symbol && bottomRow[2]=== player1.symbol)//check right column
        ||
        (bottomRow[0]=== player1.symbol && midRow[1]=== player1.symbol && topRow[2]=== player1.symbol)// check diag left to right from the bottom
        ||
        (topRow[0]=== player1.symbol && midRow[1]=== player1.symbol && bottomRow[2]=== player1.symbol)//check diag left to right from the top
        ) { 
            gameDirection = `${player1.name} (${player1.symbol}) is the winner. ` 
            directionElement.textContent = gameDirection
            state = true
            inputVal = ""
            inputCount = 0
            selectedNumbers = []
            topRow = [1, 2, 3]
            midRow = [4, 5, 6]
            bottomRow = [7, 8, 9]
            return
    } else if (
        (topRow[0]=== player2.symbol && topRow[1]=== player2.symbol && topRow[2]=== player2.symbol)  // check for 3 in a row for first row
        ||
        (midRow[0]=== player2.symbol && midRow[1]=== player2.symbol && midRow[2]=== player2.symbol)  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== player2.symbol && bottomRow[1]=== player2.symbol && bottomRow[2]=== player2.symbol)  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== player2.symbol && midRow[0]=== player2.symbol && bottomRow[0]=== player2.symbol)//check left column
        ||
        (topRow[1]=== player2.symbol && midRow[1]=== player2.symbol && bottomRow[1]=== player2.symbol)//check middle column
        ||
        (topRow[2]=== player2.symbol && midRow[2]=== player2.symbol && bottomRow[2]=== player2.symbol)//check right column
        ||
        (bottomRow[0]=== player2.symbol && midRow[1]=== player2.symbol && topRow[2]=== player2.symbol)// check diag left to right from the bottom
        ||
        (topRow[0]=== player2.symbol && midRow[1]=== player2.symbol && bottomRow[2]=== player2.symbol)//check diag left to right from the top
        ) {
            gameDirection = `${player2.name} (${player2.symbol}) is the winner. ` 
            directionElement.textContent = gameDirection
            state = true
            inputCount = 0
            inputVal = ""
            selectedNumbers = []
            topRow = [1, 2, 3]
            midRow = [4, 5, 6]
            bottomRow = [7, 8, 9]
            return
    } else if (selectedNumbers.length === 9) {
        gameDirection = "Looks like there wasn't a winner." 
        directionElement.textContent = gameDirection
        state = true
        inputCount = 0
        inputVal = ""
        selectedNumbers = []
        topRow = [1, 2, 3]
        midRow = [4, 5, 6]
        bottomRow = [7, 8, 9]
        return

    } 



}


/**------------------------------------------------------Event Listeners/calls-------------------------------------- */


gameButtonElement.addEventListener('click', () =>{   // event listener for player info (start game)
    while(gameboardElement1.firstChild &&  gameboardElement2.firstChild && gameboardElement3.firstChild) { 
        gameboardElement1.removeChild(gameboardElement1.firstChild);  //This loop clears the gameboard before starting
        gameboardElement2.removeChild(gameboardElement2.firstChild);  //This loop clears the gameboard before starting
        gameboardElement3.removeChild(gameboardElement3.firstChild);  //This loop clears the gameboard before starting
    }
    while(directionElement.firstChild) { 
        directionElement.removeChild(directionElement.firstChild);  //This loop clears the gameboard before starting
        
    }
    
     const para = document.createElement("h1");
     const para2 = document.createElement("h1");
     const para3 = document.createElement("h1");
    const para4 = document.createElement ('h2')
    gameDirection ="Please enter the name of Player 1 in the input box, then player 2's name after submitting"
    


    para.textContent = textMaker1 
    para2.textContent = textMaker2
    para3.textContent = textMaker3 
    para4.textContent = gameDirection
    para4.setAttribute("class","directions")
    para.style.wordSpacing = "10px"
    para2.style.wordSpacing = "10px"
    para3.style.wordSpacing = "10px"
    gameboardElement1.appendChild(para);
    gameboardElement2.appendChild(para2);
    gameboardElement3.appendChild(para3);
    directionElement.appendChild(para4);


    
})



direcButtonElement.addEventListener('click', () =>{    // button to display game directions
    while(gameboardElement1.firstChild &&  gameboardElement2.firstChild && gameboardElement3.firstChild) { 
        gameboardElement1.removeChild(gameboardElement1.firstChild);  //This loop clears the gameboard before starting
        gameboardElement2.removeChild(gameboardElement2.firstChild);  //This loop clears the gameboard before starting
        gameboardElement3.removeChild(gameboardElement3.firstChild);  //This loop clears the gameboard before starting
    }
    while(directionElement.firstChild) { 
        directionElement.removeChild(directionElement.firstChild);  //This loop clears the gameboard before starting
        
    }
    const para = document.createElement("p");
   
    
    para.textContent = 'The object of tic tac toe is to get three in a row vertically horizontally or diagonally. You will face your computer and play turn for turn. Each player will be asked for their desired symbol. First player to get three in a row wins! Rules are simple, the fun is the strategy!'
    
    directionElement.appendChild(para);
    
})



submitButton.addEventListener('click', () =>{ // submit button listener 
    
    
    if(choiceInput.value != "" ){
        inputCheck(choiceInput.value)
        console.log("inputCheck(fire)");
    } 
    
    if (digits.includes(choiceInput.value)) {
        tableChange(choiceInput.value)
        
    }
    
    
})

battleButton.addEventListener('click', () =>{   // start game logic battle
    
    ticBattle() 
   
    
})     
    
