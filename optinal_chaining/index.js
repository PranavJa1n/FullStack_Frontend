const obj = {
    "names": {
        "first": "Pranav",
        "last": "Jain"
    },
    "age": 20,
    "pet": {
        "dog": {
            "abc": 1,
            "xyz": 10,
        },
    }
}

let test_pass = obj.names?.first
let test_fail = obj.pet.dog?.cde
console.log(`Will fail - ${test_fail}`)
console.log(`Will pass - ${test_pass}`)
console.log(`Will fail - ${obj.pet.cat}`)   // this should give us error but in some systems it is giving us undefined this is not relaible