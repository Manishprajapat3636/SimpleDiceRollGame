const btn  = document.querySelector('#roll-button');
const diceEl = document.getElementById('dice');

const history = document.getElementById("roll-history");
let listDice = [];


function rollDice(){
    const rollResult = Math.floor(Math.random()*6)+1;
    console.log(rollResult);
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML=diceFace;
    listDice.push(rollResult);
    updateListDice();
}

function updateListDice(){
    history.innerHTML="";
    for(let i=0;i<listDice.length;i++){
        const li = document.createElement("li");
        li.innerHTML = `Roll ${i+1} : <span> ${getDiceFace(listDice[i])} </span>`;
        history.appendChild(li);
    }
}
function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
           return "&#9856;";
            break;
        case 2:
            return "&#9857;";
            break;
        case 3:
            return "&#9858;";
            break;
        case 4:
            return "&#9859;";
            break;
        case 5:
            return "&#9860;";
            break;
        case 6:
            return "&#9861;";
            break;
            default : 
            return "";
    }
}
btn.addEventListener("click", () => {
    
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
         }, 1000); 
});
