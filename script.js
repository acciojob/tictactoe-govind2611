//your JS code here. If required.
const firstContainer = document.querySelector(".conatiner-1");
const secondContainer = document.querySelector(".conatiner-2");
const cells = document.querySelectorAll(".cell");
const btn = document.getElementById("submit");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const message = document.querySelector(".message");
const xMark = "X";
const oMark = "O";
let turn = true;
let win = false;
const winnerCombo =[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

//to display tic tac toe playground
btn.addEventListener("click",()=>{
    if(player1.value!=="" && player2.value!==""){
        firstContainer.style.display = "none";
	    secondContainer.style.display = "block"
        message.textContent = `${player1.value}, you're up`;
    }
});

// iterating every cell
cells.forEach(cell =>{
	cell.addEventListener("click", handleClick, {once:true});
});

// every function that should happen on click
function handleClick(e){
	let currentCell = e.target;
	const currentMark = turn? xMark : oMark;
	markTicTac(currentCell,currentMark);
	takeTurn();
	if(winner(currentMark)){
		win = true;
		if(currentMark==="X"){
			message.textContent = `${player1.value}, congratulations you won!`;
		}
		else{
			message.textContent = `${player2.value}, congratulations you won!`;
		}
	}
}

// marking by different player 
function markTicTac(currentCell,currentMark) {
	if(currentMark==="X"){
		message.textContent = `${player2.value}, you're up`;
	}
	else{
		message.textContent = `${player1.value}, you're up`;
	}

	if(!win)
		currentCell.textContent = currentMark;
}

//deciding winner
function  winner(currentMark) {
	return winnerCombo.some(combinations =>{
		return combinations.every(element =>{
			let val = cells[element].textContent;
			if(val!==currentMark)
				return false;
			return true;
		});
	});
}

// alternating between player
function  takeTurn() {
	turn = !turn;
}