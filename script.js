let credits = 100;
let jackpot = 0;
//Genertate Random Number
const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 4);
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

const updateJackpot = () =>{
    const prize = getElement('prize');
    const value = jackpot;
    prize.innerHTML = `${value}`;
}

//Play Function
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

    credits -= 10
    jackpot += 10

    updateCredits();
    updateJackpot();
    

}

const spin = () =>{

}