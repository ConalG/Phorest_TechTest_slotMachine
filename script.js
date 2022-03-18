let credits = 100;
let jackpot = 0;
let result = false;

//Genertate Random Number
const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 2);
  }

//Get Element ID
const getElement = (id) =>{
    return document.getElementById(id);
}
//Update Display for credits
const updateCredits = () =>{
    const money = getElement('money');
    const value = credits;
    money.innerHTML = `${value}`;
}
//Update Display for Jackpot
const updateJackpot = () =>{
    const prize = getElement('prize');
    const value = jackpot;
    prize.innerHTML = `${value}`;
}

//Main Functionality of Game
const playGame = () =>{
    let slot1 = getElement(`slot1`);
    let slot2 = getElement(`slot2`);
    let slot3 = getElement(`slot3`);
    let slot4 = getElement(`slot4`);

    let num1 = generateRandomNumber();
    let num2 = generateRandomNumber();
    let num3 = generateRandomNumber();
    let num4 = generateRandomNumber();

    slot1.className = "c"+num1;
    slot2.className = "c"+num2;
    slot3.className = "c"+num3;
    slot4.className = "c"+num4;

    updateCredits();
    updateJackpot();
    
    if(num1 == num2 && num2 == num3 && num3 == num4){
        credits += jackpot;
        jackpot = 0;
        return result = true;
     }
    else{
        return result = false;
    }
}

//Gathers result of Game 
const getresult = () =>{
    let resultBox = document.getElementById("result")
    if(result){
        resultBox.innerHTML="Congratulations you have won the Jackpot"
    }
    else{
        resultBox.innerHTML="Better luck next time!"
    }
    
}

//Checks if enough creidts to play the Game
const spin = () =>{
    let resultBox = document.getElementById("result")
    if(credits >= 10){
        credits -= 10
        jackpot += 10
        playGame();
        getresult();
    }
    else{
        resultBox.innerHTML="Not Enough Credits"
    }

}