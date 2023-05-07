// const promise = new Promise(function(resolve, reject) {
//     // setTimeout(() => resolve('done'), 1000)
//     setTimeout(() => reject (new Error('Whoops'), 1000))
// })

// promise.then(
//     function(result)
//     function(error)
// )

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(
//   result => console.log(result), 
//   error => console.log(error) 
// );

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject(new Error('Whoops')) 
//     }, 1000)
// })
// promise.then(
//     result => console.log(result),
//     error  => console.log(error) 
// )

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // resolve('done')
//         reject(new Error('Whoops'))
//     }, 1000)
// })
// // promise.then()
// promise.then(null, f)
// // promise.catch()

// const promise = new Promise(function(resolve, reject) {

// })
// .finally(() => ...)
// .then(result => ...)

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('result')
//     }, 2000)
// })
// .finally(function() {
//     console.log('promise the end')
// })
// .then(function(result) {
//     console.log(result)
// })

// new Promise(function(resolve, reject) {
//     throw new Error('error')
// })
// .finally(function() {
//     console.log('promise is finished')
// })
// .catch(function(err) {
//     console.log(err)
// })

// const promise = new Promise(function(resolve (function() {
//     console.log(resolve('the ready'))
// }))
// promise.then()

// function loadScript(src, callback) {
//     const script = document.createElement('script')
//     script.src = src

//     script.onload = function() {
//         callback(null, script)
//     }
//     script.onerror = function() {
//         callback(new error(This is error ${src}))
//     }
//     document.head.append(script)
// }

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         const script = document.createElement('script')
//         script.src = src

//         script.onload = function() {
//             resolve(script)
//         }
//         script.onerror = function() {
//             reject(new Error('ошибка загрузки скрипта ${src}'))
//         }
//         document.head.append(script)
//     })
// }

// const promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
// promise.then(
//     function(script) {
//         console.log(`script ${script.src} is loading`)
//     }
//     function(error) {
//         console.log(`It is error ${error.message}`)
//     }
// promise.then(function(script) {
//     console.log('It is one event yet')
// })
// )

// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// console.log(promise.then())

// function delay(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms)       
//     }, ms)
// }
// delay(3000).then(function() {
//     console.log('выполнилось через 3 секунды')
// })



 // function go() {
 //        showCircle(150, 150, 100).then((div) => {
 //          div.classList.add('message-ball');
 //          div.append('Hello, world!');
 //        });
 //      }

 //      function showCircle(cx, cy, radius) {
 //        let div = document.createElement('div');
 //        div.style.width = 0;
 //        div.style.height = 0;
 //        div.style.left = cx + 'px';
 //        div.style.top = cy + 'px';
 //        div.className = 'circle';
 //        document.body.append(div);

 //        return new Promise((resolve) => {
 //          setTimeout(() => {
 //            div.style.width = radius * 2 + 'px';
 //            div.style.height = radius * 2 + 'px';

 //            div.addEventListener('transitionend', function handler() {
 //              div.removeEventListener('transitionend', handler);
 //              resolve(div);
 //            });
 //          }, 0);
 //        });
 //      }