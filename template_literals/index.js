let op = "okay"
let a = `GLA University
is
${op}`
console.log(a)
console.log(`\`` == "`")    // true

let img = 'https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg'
let title = "title"
let decription = "description"
let mycode = `<img src=${img}><p><h3>${title}</h3>${decription}</p>`

document.getElementById("div").innerHTML = mycode;