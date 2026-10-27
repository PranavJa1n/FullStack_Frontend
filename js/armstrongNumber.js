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
    let para = document.createElement("h2")
    if(isArmstrong(val)){
        console.log("Armstrong Number")
        document.getElementById("result").innerHTML = "Armstrong"
        para.textContent = "Armstrong (para created by js)"
    } else{
        console.log("Not armstrong")
        document.getElementById("result").innerHTML = "<b>Not</b> Armstrong"
        para.textContent = "Not Armstrong (para created by js)"
    }
    document.getElementsByTagName("body")[0].append(para)
}