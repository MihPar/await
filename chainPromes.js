// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(1)
//     }, 1000)
// })
// promise.then(function(result) {
//     console.log(result)
//     return result * 2
// }).then(function(result) {
//     console.log(result)
//     return result * 2
// }).then(function(result) {
//     console.log(result)
//     return result * 2
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(1)
//     }, 1000)
// }).then(function(result) {
//     console.log(result) // 1
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(result * 2)
//         }, 1000)
//     })
// }).then(function(result) {
//     console.log(result) // 2
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(result * 2)
//         }, 1000)
//     })
// }).then(function(result) {
//     console.log(result) // 4
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(result * 2)
//         }, 1000)
//     })
// })


// loadScript('/article/promise-chaining/one.js')
//     .then(function(script) {
//         return loadScript('/article/promise-chaining/two.js')
//     })
//     .then(function(script) {
//         return loadScript('/article/promise-chaining/three.js')
//     })
//     .then(function(script) {
//         one()
//         two()
//         three()
//     })


// class Thenable {
//     constructor(num) {
//         this.num = num
//     }
//     then(resolve, reject)
//     console.log(resolve)
//         setTimeout(function() {
//             resolve(this.num * 2)
//         }, 1000)
// }
//     new Promise(function(resolve, reject) {
//         resolve(1)
//         .then(function(result) {
//             return new Thenable(result)
//         })
//     })
// .then(console.log())


// const promise = fetch(url)


// fetch('/article/promise-chaining/user.json')
// .then(function(response) {
//     return response.text()     
// })
// .then(function(text) {
//     console.log(text)
// })


