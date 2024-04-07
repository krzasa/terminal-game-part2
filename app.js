
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

const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]
const xsOrOs = ['X', 'x', 'O', 'o']
const selectedNumbers = []
let playerTurn= ""



 

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
        gameDirection = `${player1.name} 's symbol is ${player1.symbol} , and ${player2.name} is ${player2.symbol}, once you're ready click the "Start battle button"`
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
         // changes the state to true so the second part of submit event listener can start
        //console.log(state);//
    } 
    
}

const ticBattle = () => {
    
    // console.log(state);
    // if (state === null){
        console.log("This is working ");
        gameDirection = `${player1.name} has started the game, please pick your first spot on the board `
        directionElement.textContent = gameDirection
        console.log(state);
        playerTurn = "two"
        return
        
        
         
//     } else if (state != null){
//         if (state = false )
//         {
//         console.log("THis gets skipped");
//         gameDirection =`${player2.name} please pick your  spot on the board`
//         directionElement.textContent = gameDirection
//         state = true
      
//         } 
    
//         if (state === true ){
//         console.log(state);
//         console.log("This is not working ");
//         gameDirection =`${player1.name} please pick your  spot on the board`
//         directionElement.textContent = gameDirection
//         state= false

//         } 
// }

   
    
    
}
const tableChange = (input) => {
    console.log('BOW working');
    console.log(state);
    if (playerTurn === "") {
        
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
               gameDirection = `${player2.name} please pick a number `
                directionElement.textContent = gameDirection
                
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
               gameDirection = `${player2.name} please pick a number `
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
                playerTurn = "two"
                gameDirection = `${player2.name} please pick a number `
                directionElement.textContent = gameDirection
            }
            playerTurn = "two"
            console.log('BOW working');
        return
    } else {
        
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
            console.log('BOW working');
            
            return
        }
        
    } 
     if (playerTurn === "two") {
        if (selectedNumbers.includes(input)) {
            gameDirection = `${player2.name} please pick a number that was not used before`
            directionElement.textContent = gameDirection
            console.log(input);
            playerTurn = "two"
            
        } else {
            console.log("bow bow");
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
        }
       // playerTurn = "one"
        console.log('BOW working');
        return
    }

    }
}


/**------------------------------------------------------Event Listeners/calls-------------------------------------- */


gameButtonElement.addEventListener('click', () =>{  
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
    gameboardElement1.appendChild(para);
    gameboardElement2.appendChild(para2);
    gameboardElement3.appendChild(para3);
    directionElement.appendChild(para4);


    
})



direcButtonElement.addEventListener('click', () =>{  
    while(gameboardElement1.firstChild &&  gameboardElement2.firstChild && gameboardElement3.firstChild) { 
        gameboardElement1.removeChild(gameboardElement1.firstChild);  //This loop clears the gameboard before starting
        gameboardElement2.removeChild(gameboardElement2.firstChild);  //This loop clears the gameboard before starting
        gameboardElement3.removeChild(gameboardElement3.firstChild);  //This loop clears the gameboard before starting
    }
    while(directionElement.firstChild) { 
        directionElement.removeChild(directionElement.firstChild);  //This loop clears the gameboard before starting
        
    }
    const para = document.createElement("p");
   
    // gameboardElement.removeChild()
    para.textContent = 'The object of tic tac toe is to get three in a row vertically horizontally or diagonally. You will face your computer and play turn for turn. Each player will be asked for their desired symbol. First player to get three in a row wins! Rules are simple, the fun is the strategy!'
    
    directionElement.appendChild(para);
    
})



submitButton.addEventListener('click', () =>{ 
    // console.log(choiceInput.value); 
    
    if(choiceInput.value != "" ){
        inputCheck(choiceInput.value)
        console.log("inputCheck(fire)");
    } 
    
    if (digits.includes(choiceInput.value)) {
        tableChange(choiceInput.value)
        // console.log(choiceInput.value);
    }
    
    
})

battleButton.addEventListener('click', () =>{ 
    // when battle button is pressed run ticBattle AND tableChange
    // console.log("The click works ");
    ticBattle() 
   
    
})     
    
continueButton.addEventListener('click', () =>{ 
    
    // console.log("The click works ");
    tableChange()
    
})    