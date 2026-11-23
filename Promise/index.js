// let res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return reject("Promise Rejected")       // This is a hardcoded promise 
//     }, 1000)
// })

// res.then((result)=>{
//     console.log(result)
// }).catch((err) =>{
//     console.log(err)
// }).finally(() =>{
//     console.log("Promise Completed")
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(result =>{
//     console.log(result.json())
// })
// .catch((err) =>{
//     console.log(err+"  from err")
// })
// .finally(() =>{
//     console.log("Promise Completed")
// })

// async function doeverything(){
//     let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await posts.json()
//     console.log(data)
// }

// doeverything()

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {       // It will reject if any one or more promise rejects
//   console.log(values);
// });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>              // It will fullfill all the promise
//   results.forEach((result) => console.log(result.status)),
// );


// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "slow"));

// const promises = [promise1, promise2, promise3];            // will reject if all the promise reject
// Promise.any(promises).then((value) => console.log(value));  // will return the value of any promise that is fullfilled


const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
