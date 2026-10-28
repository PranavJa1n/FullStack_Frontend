let sample_space = ["Rock", "Paper", "Scissors"]
let selected = Number.parseInt(Math.random()*3)
let computer_move = sample_space[selected]
console.log(computer_move + " Just for testing")
let rBtn = document.getElementById("r")
let pBtn = document.getElementById("p")
let sBtn = document.getElementById("s")

rBtn.addEventListener("click", ()=>
    {
        if(computer_move == "Rock"){
            console.log("Draw")
        } else if(computer_move == "Paper"){
            console.log("You Lose")
        } else{
            console.log("You Win")
        }
    }
)
pBtn.addEventListener("click", ()=>
    {
        if(computer_move == "Rock"){
            console.log("You Win")
        } else if(computer_move == "Paper"){
            console.log("Draw")
        } else{
            console.log("You Lose")
        }
    }
)
sBtn.addEventListener("click", ()=>
    {
        if(computer_move == "Rock"){
            console.log("You Lose")
        } else if(computer_move == "Paper"){
            console.log("You Win")
        } else{
            console.log("Draw")
        }
    }
)