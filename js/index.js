console.log(a)
var a = 5       // declaration of this variable will be at the top to make it golbal this is called hoisting therefore the line 1 will give undefined as var delares the variable at the top and only defines it at the line
const b = 123   // always have to give a value to const and this is also hoisted and it stays in temporal dead zone as if it is declared at the top without defaining then it will never be defined again
let c = 432 // let is also like const and it stays in temporal dead zone

/**
 * Premitive Data Types
 * 
 * Number
 * String
 * Boolean
 * undefined
 * null
 * 
*/
let q = 5
console.log(q, typeof q)
q = "hello"
console.log(q, typeof q)
q = true
console.log(q, typeof q)
q = null
console.log(q, typeof q)    // null is a typeof object
q = undefined
console.log(q, typeof q)

let n = null
if(n == null){
    console.log(true)
}
n = 5
if(n == "5"){       // == for checking the value
    console.log(true)
}
if(n === "5"){      // === for checking the datatype
    console.log(true)
}

/**
 * Secondary Datatypes
 * 
 * Object
 * Function
 * Array
 * 
*/ 

var myObj = {
    name: "Pranav",
    show: showName
}
myObj.show()
function showName(){        // these are also hoisted but they also take there funcnality with them
    console.log(myObj.name)
}

let arr = [1, "PJ", 2.5, null, undefined, true]
console.log(arr)

arr.unshift(123)
console.log(arr)

// arr.splice(1,3)      1 and 3 both are included
// console.log(arr)

