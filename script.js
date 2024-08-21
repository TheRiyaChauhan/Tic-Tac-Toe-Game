let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");



let turn = true; //player O



const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "O";
            turn = false;

        }
        else {
            box.innerText = "X";
            turn = true;

        }
        box.disabled = true;
        checkWinner();


    });
});



const checkWinner = () => {
    let Draw = true;
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }


        }
        boxes.forEach((box) => {
            if (box.innerText === "") {
                Draw = false;
            }
        })
        if (Draw) {
            msg.innerText = `oops`
            msgContainer.classList.remove("hide");
        }
    }
}



const showWinner = (winner) => {
    msg.innerHTML = `congo, winner is ${winner} <br> Wohoo!!`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);