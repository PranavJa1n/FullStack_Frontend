const _name = "football"            // const
console.log(_name)
console.log($credit)                // this will be declared but not initilizer thus giving us undefined
{
    let a = "hello"                 // only have scope in this block
    console.log(a)
    var $credit = "$1234567890"     // have a global scope
}
// console.log(a)       This will give error
console.log($credit)
var a = 6
var b = 5
console.log(a + b + "h" + a + b)      // '11h65' before "h" which is a string everything will be treated as int and after that it will be treated as string
var c;
console.log(a + b + c + "h" + a + b + c)  // NaNh65undefined
console.log("1.1" + "1.1")              // 1.11.1
console.log((+"1.1") + (+"1.1"))        // 2.2