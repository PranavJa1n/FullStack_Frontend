let a = {
    "name": "pranav",
}
console.log(a)

let myDetails = Object.create(a)    // we have used 'a' as the prototype 
console.log(myDetails.name)         // myDetails do not have name property but its prototype is a and it have name
myDetails.name = "PranavJain"       // myDetails will have a field called 'name' but a will have original value only
console.log(myDetails.name)
console.log(a.name)
