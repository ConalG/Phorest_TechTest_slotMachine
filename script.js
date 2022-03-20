let credits = 100;
let jackpot = 0;
let result = false;


//Genertate Random Number
const generateRandomNumber = () =>{
    return Math.floor(Math.random() * 4);
  }

const randomInt = (min, max)=>{
	return Math.floor((Math.random() * (max-min+1)) + min);
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
    let slot1Number = randomInt(5,10);
    let slot2Number = randomInt(10,15);
    let slot3Number = randomInt(15,20);
    let slot4Number = randomInt(20,25);
    
    let slot1Count = 0;
    let slot2Count = 0;
    let slot3Count = 0;
    let slot4Count = 0;

    let resultBox = getElement("result")
    resultBox.innerHTML="Spinning"
    
    const slot1Spin = () =>{
        slot1Count++;
        if(slot1Count>=slot1Number){
            clearInterval(setspinslot1);
            return null
        }
        let slot1 = getElement(`slot1`);
        if (slot1.className=="c4"){
			slot1.className = "c0";
		}
        slot1.className = "c"+(parseInt(slot1.className.substring(1))+1)
    }
    
    const slot2Spin = () =>{
        slot2Count++;
        if(slot2Count>=slot2Number){
            clearInterval(setspinslot2);
            return null
        }
        let slot2 = getElement(`slot2`);
        if (slot2.className=="c4"){
			slot2.className = "c0";
		}
        slot2.className = "c"+(parseInt(slot2.className.substring(1))+1)
    }
    
    const slot3Spin = () =>{
        slot3Count++;
        if(slot3Count>=slot3Number){
            clearInterval(setspinslot3);
            return null
        }
        let slot3 = getElement(`slot3`);
        if (slot3.className=="c4"){
			slot3.className = "c0";
		}
        slot3.className = "c"+(parseInt(slot3.className.substring(1))+1)
    }
    
    const slot4Spin = () =>{
        slot4Count++;
        if(slot4Count>=slot4Number){
            clearInterval(setspinslot4);
            getresult();
            return null
        }
        let slot4 = getElement(`slot4`);
        if (slot4.className=="c4"){
			slot4.className = "c0";
		}
        slot4.className = "c"+(parseInt(slot4.className.substring(1))+1)
    }
    setspinslot1 = setInterval(slot1Spin, 150);
    setspinslot2 = setInterval(slot2Spin, 150);
    setspinslot3 = setInterval(slot3Spin, 150);
    setspinslot4 = setInterval(slot4Spin, 150);
    
    updateCredits();
    updateJackpot();

}


const spinning = () =>{
    let resultBox = getElement("result")
    if(credits >= 10){
        credits -= 10
        jackpot += 10
        playGame();
    }
    else{
        resultBox.innerHTML="Not Enough Credits"
    }

}

//Gathers result of Game 
const getresult = () =>{
    let slot1 = getElement(`slot1`).className;
    let slot2 = getElement(`slot2`).className;
    let slot3 = getElement(`slot3`).className;
    let slot4 = getElement(`slot4`).className;
    let resultBox = getElement(`result`);
    
    if(slot1 == slot2 && slot2 == slot3 && slot3 == slot4){
        resultBox.innerHTML="Congratulations you have won the Jackpot"
        credits += jackpot
        jackpot = 0
    }
    else{
        resultBox.innerHTML="Better luck next time!"
    }
    
}


