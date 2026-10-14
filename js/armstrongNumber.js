function isArmstrong(num){
    let digit = 0
    let cp = num

    while(cp > 0){
        cp = Number.parseInt(cp/10)
        digit++
    }

    cp = num
    let res = 0

    while(cp > 0){
        res = res + (cp%10)**digit
        cp = Number.parseInt(cp/10)
    }

    if(num == res){
        return true
    }
    return false
}

function checkAndShow(){
    let val = document.getElementById("val").value
    if(isArmstrong(val)){
        console.log("Armstrong Number")
    } else{
        console.log("Not armstrong")
    }
}