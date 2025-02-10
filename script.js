let box = document.querySelectorAll(".blocks");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

resetBtn.classList.remove("hide");
container.classList.remove("hide");

let turn_X =true; 

const winPatterns = [
    [0,3,6],[1,4,7],[2,5,8],
    [0,1,2],[3,4,5],[6,7,8],
    [0,4,8],[2,4,6]
];

const resetGame = () =>{
    turn_X =true; 
    enableBoxes();
    msgConatiner.classList.add("hide");
    resetBtn.classList.remove("hide");
    container.classList.remove("hide");
}

box.forEach((blocks) =>{
    blocks.addEventListener("click",() =>{
        if(turn_X){
            blocks.style.color = 'red';
            blocks.innerText = 'X';
            turn_X = false;
        }else{
            blocks.style.color = 'green';
            blocks.innerText = 'O';
            turn_X = true;
        }
        blocks.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let boxx of box){
        boxx.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let boxx of box){
        boxx.disabled = false;
        boxx.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide");
    container.classList.add("hide");
};

const checkWinner = () =>{
    for(let pattern of winPatterns) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]].innerText,
            box[pattern[1]].innerText,
            box[pattern[2]].innerText,
        );
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val == pos2Val && pos2Val ==pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);