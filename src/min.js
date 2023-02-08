const activateButton = document.getElementById("activate");

const cardBody = document.querySelector(".card_body");

const card1 = document.querySelectorAll("#icon");

const card2 = document.querySelectorAll("#icon1");

const card3 = document.querySelectorAll("#icon2");

let randomNum;

activateButton.addEventListener("click", activate);

function activate(){
    cardBody.style.transform = "rotate(-20deg)";
    let firstNum = generateRand()
    let secondNum = generateRand()
    let thirdNum = generateRand()
    
    for(let i = 0; i < card1.length; i++){
        card1[i].textContent = firstNum;
    }

    for(let i = 0; i < card2.length; i++){
        card2[i].textContent = secondNum;
    }

    for(let i = 0; i < card3.length; i++){
        card3[i].textContent = thirdNum;
    }
}

function generateRand(){
    randomNum = Math.floor(Math.random()*13 +5)
    return randomNum;
}

