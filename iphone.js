const resultDisplay = document.getElementById("result");
const numbers = document.querySelectorAll("#number");
const clear = document.getElementById("clear");
const operation = document.querySelectorAll("#operation");
const equals = document.getElementById("equal");
let input = [];
let firstNumber=[];
let secondNumber=[];
let answer;

let isExist = false;



startApp();


function startApp(){

    for(let i = 0; i < numbers.length; i++){ 
        let eachNumber = numbers[i];
        eachNumber.addEventListener("click", ()=>{
     
        if(resultDisplay.textContent === "0" || isExist === false){
            resultDisplay.textContent = "";
            input.push(eachNumber.textContent);
            firstNumber = input.join("");
            resultDisplay.innerHTML = firstNumber   
        }
    else{
        input = [];
        input.push(eachNumber.textContent);
        secondNumber = input.join("");
        resultDisplay.innerHTML = secondNumber;
        console.log("This is the Second Number: " + secondNumber);
        }
   })}
}

for(i = 0; i < operation.length; i++){
    let arithmeticSign = operation[i];
    arithmeticSign.addEventListener("click", ()=>{
        console.log("This is the first Number: " + firstNumber);
        console.log(arithmeticSign.textContent)
        isExist = true;
        startApp();
     });
}

equals.addEventListener("click", solveEquation);


function addNum(){
    answer = firstNumber + secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function subNum(){
    answer = firstNumber - secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function mulNum(){
    answer = firstNumber * secondNumber;
    // resultDisplay.textContent = answer;
    return answer;
}

function divNum(){
    answer = firstNumber / secondNumber;
    return answer;
}


function solveEquation(){
 console.log("solving...")
}




clear.addEventListener("click", ()=>{
    input.pop();
    resultDisplay.innerHTML = input.join("")
});
