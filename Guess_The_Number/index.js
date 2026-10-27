let Correct_Number = Number.parseInt(Math.random()*100)
console.log(Correct_Number + "Just For checking if it is working or not")
let Guessed_Number = document.getElementsByTagName("input")[0]
let btn = document.getElementsByTagName("button")[0]
let cnt = 0

btn.addEventListener("click", ()=>
    {   
        cnt++
        if(cnt < 7){
            if(Correct_Number == Guessed_Number.value){
                alert("Congratulation!!!!! You guessed the number")
            } else if(Correct_Number < Guessed_Number.value){
                console.log("You guessed high")
            } else{
                console.log("You guessed low")
            }
        } else{
            alert("Out of chances")
        }
    }
)