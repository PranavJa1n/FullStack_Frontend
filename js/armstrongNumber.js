let num = 1634
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
    console.log("Yes")
} else{
    console.log("No")
}