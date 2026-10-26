let btn = document.getElementsByTagName("button")[0]
let cnt = 0

btn.addEventListener('click', ()=>{
    cnt++
    console.log("Button Clicked")
    console.log(cnt)
})