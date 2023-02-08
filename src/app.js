const gameStatus = document.getElementById("status");
const displayCards = document.getElementById("cards");
const displaySum = document.getElementById("sum");
const buttonStart = document.getElementById("start_game");
const buttonNew = document.getElementById("new_card");
const displayUserInfo = document.getElementById("greetingEl");
const userBet = document.querySelector("#bet"); //It didn't work at first because i used document.getElementById to get the element from the DOM;
const gameHolder = document.querySelector(".game-holder");
const oddsDisplay = document.getElementById("oddsDisplay");
const gameOver = document.getElementById("gameOver");

let isActive = false;
let isBlackJack = false;
let isBet = false;
let result;
let cards;
let sum;
let userInfo = {
    name: "Tobi",
    coin: 200
}

let currentOdds = "0.00";

console.log(currentOdds);

const titleDesign = document.querySelector(".title");

oddsDisplay.textContent = currentOdds;

function randomOdds(min = 0.7, max = 5){
    let diff = max - min;
    let randOdds = Math.random();
    randOdds = Math.floor(randOdds * diff);
    randOdds = randOdds + min;

 
    return randOdds;
}

function disableBet(){
    document.getElementById("bet").disabled = true;
}

function enableBet(){
    document.getElementById("bet").disabled = false;
}

function displayFinal(){
    displayUserInfo.textContent = userInfo.name + ": $" + userInfo.coin;
}

function randomNumber(){
    // let randomNum = Math.floor(Math.random()*13 + 1); //starting from 1 and ending at 5.999 (which is approximately 6 because of the math.floor method)
    // if(randomNum > 10){
    //     randomNum = 10;
    // }
    // else if (randomNum < 2){
    //     randomNum = 11;
    // }

    let randomNum = 10;
  
    return randomNum;
    
}

function stakeBet(){
    let removeBetAmount = userInfo.coin - userBet.value;
    userInfo.coin = removeBetAmount;
    return removeBetAmount;
}

function startGame(){

    if(userInfo.coin < 0){
        console.log("zero balance");
        // gameHolder.style.display = "none";
        // gameOver.style.display = "flex";
    }

    else{
    
    isBlackJack = false;

    enableBet();

    if(isBlackJack === false && userBet.value === ""){
        
        gameStatus.textContent = "Please place a new Bet💰";   
        gameStatus.style.backgroundColor = "red" ;
        gameStatus.style.width = "300px";
        displayCards.textContent = "Cards: 0,0";
        displaySum.textContent = "Sum: 0";
        titleDesign.style.backgroundColor = "white";
        titleDesign.style.color= "rgb(181, 118, 36)";
        buttonNew.innerText = "NEW CARD";
        oddsDisplay.style.backgroundColor = "rgb(181, 118, 36)";
        // currentOdds.push(randomOdds());
        oddsDisplay.textContent = currentOdds;
    }
    else{
        oddsDisplay.textContent = currentOdds;
        console.log("game is running with Users coin: " + userBet.value + " at " + currentOdds);

        if(isActive === true){
            gameStatus.textContent = "game is already running";
            buttonStart.innerText = "Playing...";
            buttonNew.innerText = "NEW CARD";
            disableBet();
            userBet.setAttribute("placeholder", userBet.value);
        }

        else{
            displayUserInfo.textContent = userInfo.name + ": $" + stakeBet();
            buttonStart.innerText = "Playing...";
            isActive = true;
            cards = [];
            sum = 0;
            let firstNum = randomNumber();
            cards.push(firstNum);
            let secondNum = randomNumber();
            cards.push(secondNum);
            console.log("This is the initial array: " + cards)
            renderGame();
        }
    }
}
}

function renderGame(){

    disableBet();
    userBet.setAttribute("placeholder", userBet.value);
//looping through to get the number of items and summing itup
        for(let i = 0; i < cards.length; i++){
            sum += cards[i];
        }

//Displaying the result on the DOM
        displayCards.textContent = "Cards: " + cards;
        displaySum.textContent = "Sum: " + sum

//Checking through to know if the sum of cards falls betwen the jackpot and display result in the DOM
        if (sum < 21){
            gameStatus.textContent = "Draw a new card? 😀";
            gameStatus.style.background = "none";
            displaySum.textContent = "Sum: " + sum;
            isActive = true;
        }
    
        else if (sum === 21){
            titleDesign.style.backgroundColor = "white";
            titleDesign.style.color = "green";
            oddsDisplay.style.backgroundColor = "green";
            oddsDisplay.style.color = "white";
            gameStatus.textContent = "You have won the Jackpot! 🎊🥳";
            displaySum.textContent = "Sum: " + sum;
            isBlackJack = true;
            isActive = false;
            buttonStart.innerText = "START GAME";
            buttonNew.innerText = "NEW GAME";
            let newConvCoin = userBet.value * currentOdds;
            let newCoin = parseInt(newConvCoin);
            userInfo.coin += newCoin;
            displayFinal()
            console.log("New Coin Amount: " + userInfo.coin);
            userBet.value = "";
            // resetGame();
        }
    
        else{
            titleDesign.style.color = "red";
            gameStatus.textContent = "You have lost the game 😭";
            oddsDisplay.style.backgroundColor = "red";
            oddsDisplay.style.color = "white";
            titleDesign.style.backgroundColor = "white";
            displaySum.textContent = "Sum: " + sum;
            isBlackJack = false;
            isActive = false;
            buttonStart.innerText = "START GAME";
            buttonNew.innerText = "New Game";
            // userInfo.coin;
            displayFinal()
            console.log("New Coin Amount: " + userInfo.coin);
            userBet.value = "";
            currentOdds = [];
            // oddsDisplay.textContent = "0.00";
        }
}

function newCard(){

   if(isBlackJack === true && isActive === false){
        gameStatus.textContent = "Another round?";
        // displayCards.textContent = "Cards: 0,0";
        // displaySum.textContent = "Sum: 0";
        oddsDisplay.style.backgroundColor = "rgb(181, 118, 36)";
        oddsDisplay.style.color = "white";
        titleDesign.style.backgroundColor = "white";
        titleDesign.style.color= "rgb(181, 118, 36)";
        buttonNew.innerText = "NEW GAME";
        currentOdds = [];
        
        // oddsDisplay.textContent = currentOdds[0];
        // currentOdds.replace = randomOdds();
        // oddsDisplay.textContent = currentOdds;
       
    }

    else if(buttonNew.innerText === "NEW GAME"){
        startGame();
        isBlackJack = false;
    }

     else if(isActive === true && isBlackJack === false){
            sum = 0;
            let thirdNumber = 1;
            // let thirdNumber = randomNumber();
            cards.push(thirdNumber);
            console.log(cards)
            renderGame();
            }
        else{
            startGame();
            }
}
    
    


buttonStart.addEventListener("click", startGame);
buttonNew.addEventListener("click", newCard);
displayFinal();



function resetGame(){
    isBlackJack === false;
    isActive === false;
    isBet = false;
    gameStatus.textContent = "Do you want to start a New Game?";
    buttonStart.innerText = "START GAME";
    buttonNew.innerText = "NEW GAME";
}