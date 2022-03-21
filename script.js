let credits = 100;
let jackpot = 0;
let doing = false;
 
const randomInt = (min, max)=>{
	return Math.floor((Math.random() * (max-min+1)) + min);
}

const getElement = (id) =>{
    return document.getElementById(id);
}

const creditBalance = () =>{
    let resultBox = getElement("result");
    const value = credits;
    resultBox.innerHTML = `Your Balance is:<br>${value} Credits`;
}

const currentJackpot = () =>{
    let resultBox = getElement("result");
    const value = jackpot;
    resultBox.innerHTML = `Current Jackpot is:<br>${value} Credits`;
}

const add100Credits = () =>{
    let resultBox = getElement("result");
    credits += 100;
    resultBox.innerHTML = `100 Credits Added.<br>Balance is now ${credits} Credits`;
}

const spinSlots = (slotNumber) => {
    let slot = getElement(slotNumber);
    if(slot.className=='c4'){
        slot.className = "c0";
    }
    slot.className = "c"+(parseInt(slot.className.substring(1))+1);
}

const playGame = () =>{
    if(doing){return null;}
    doing = true;

    credits -= 10;
    jackpot += 10;

    let stopTimer1 = randomInt(1000,2000);
    let stopTimer2 = randomInt(2000,3000);
    let stopTimer3 = randomInt(3000,4000);
    let stopTimer4 = randomInt(4000,5000);

    let resultBox = getElement("result");
    resultBox.innerHTML="Spinning";

    setSpinSlot1 = setInterval(spinSlots, 150, "slot1");
    setSpinSlot2 = setInterval(spinSlots, 150, "slot2");
    setSpinSlot3 = setInterval(spinSlots, 150, "slot3");
    setSpinSlot4 = setInterval(spinSlots, 150, "slot4");
    
    stopSpin1 = setTimeout(clearInterval, stopTimer1, setSpinSlot1);
    stopSpin2 = setTimeout(clearInterval, stopTimer2, setSpinSlot2);
    stopSpin3 = setTimeout(clearInterval, stopTimer3, setSpinSlot3);
    stopSpin4 = setTimeout(function(){clearInterval(setSpinSlot4), getresult()}, stopTimer4);
}

const getresult = () =>{
    let slot1 = getElement(`slot1`).className;
    let slot2 = getElement(`slot2`).className;
    let slot3 = getElement(`slot3`).className;
    let slot4 = getElement(`slot4`).className;
    let resultBox = getElement(`result`);
    
    if(slot1 == slot2 && slot2 == slot3 && slot3 == slot4){
        resultBox.innerHTML=`Congratulations you have won the Jackpot:<br>${jackpot} Credits!`;
        credits += jackpot;
        jackpot = 0;
    }
    else{
        resultBox.innerHTML="Better luck next time!";
    }
    doing = false;
}

const spin = () =>{
    let resultBox = getElement("result");
    if(credits >= 10){
        playGame();
    }
    else{
        resultBox.innerHTML="Not Enough Credits";
    }
}

