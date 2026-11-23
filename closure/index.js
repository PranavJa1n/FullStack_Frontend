// function outer(){
//     let a = 5
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }

// outer()     // we cannot access a without using inner so a is now encapsulated


// function manageCounter(){
    
//     let count = 0       // this variable cannot be attacked
    
//     function increment(){
//         count++
//         console.log(count)
//     }

//     function decrement(){
//         count--
//         console.log(count)
//     }
    
//     return {increment, decrement}
// }

// let counter = manageCounter()

// counter.increment()
// counter.decrement()


// // currying

// function a(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(a(1)(2)(3))

// // or

// const add = a => b => c => a+b+c

// console.log(add(1)(2)(3))


// Memoization
function memoize(fn){
    const cache = {}
    return function(x,y){
        const key = `${x}, ${y}`;
        if(key in cache){
            console.log("from cache");
            return cache[key];
        }
        const res = fn(x, y);
        cache[key] = res;
        return res
    }
}

const add = memoize(function(x,y){
    return x+y;
});

console.log(add(1,2));
console.log(add(1,2));