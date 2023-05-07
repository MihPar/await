// async function f() {
//     return Promise.resolve(1)
// }
// f().then(function(res) {
//     console.log(res)
// })

// const value = await promise

// async function f() {
//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('Готово')
//         }, 1500)
//     }
//     )
//     const result = await promise
//     console.log(result)

// }
// f()

// async function showAvatar() {
//     const respons = await fetch('/article/promise-chaining/user.json')
//     const user = await respons.json()

//     const gitHubRespons = await fetch('https://api.github.com/users/${user.name}')
//     const gitHubUser = await gitHubRespons.json()

//     const img = document.createElement('img')
//     img.src = gitHubUser.avatar_url
//     img.className = 'promise-avatar-example'
//     document.body.append(img)
//     await new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve
//         }, 1500)
//         img.remove()
//         return gitHubUser
//     })
// }
// showAvatar()

// class Theable {
//     constructor(num) {
//         this.num = num
//     }
//     .then(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(this.num * 2)
//         }, 1000)
//     })
// }
// async function f() {
//     const result  = await new Theable(1)
//     console.log(result)
// }
// f()

// class Waiter {
//     async wait() {
//         return await Promise.resolve(1)
//     }
// }
// new Waiter()
// . wait()
// .then(function(res) {
//     console.log(res)
// })

// async function f() {
//     await Promise.reject(Error('Ошибка'))
// }
// f()

// function f() {
//     return new Promise(function(resolve, reject) {
//         return reject(Error('Ошибка'))
//     })
//     .then(function(res) {
//         console.log(res)
//     })
// }
// f()

// async function f() {
//     throw new Error('Ошибка')
// }
// f()

// async function f() {

//     try {
//         const respons = await fetch('http://no-such-url')
//         const user = await respons.json()
//     } catch(res) {
//         console.log(res)
//     }
// }
// f().catch(function(res) {
//     console.log(res)
// })

// const result = await Promise.all([
//     fetch(url1)
//     fetch(url2)
// ])

// async function loadJson(url) {
//     const response = await fetch(url)

//     if(respons.status === 200) {
//         const json = await respons.json()
//         return json
//     }
//     throw new Error(respons.status)
// }
// loadJson('no-such-user.json')
// .catch(function(res) {
//     console.log(res)
// })

// class HttpError extends Error {
//     constructor(response) {
//         super(`${respons.status} for ${respons.url}`)
//         this.name = 'HttpError'
//         this.respons = respons
//     }
// }
//  function loadJson(url) {
//      return fetch(url)
//      .then(function(respons) {
//          if (respons.status === 200) {
//              return respons.json()
//          } else {
//              throw new HttpeError(respons)
//          }
//      })
//  }

// function domGitHubUser() {
//     const name = prompt("Введите логин?", "iliakan")

//     return loadJson(`https://api.github.com/users/${name}`)
//     .then(function(user) {
//         console.log(`Полное имя: ${user.name}.`)
//         return user
//     })
//     .catch(function() {
//         if (err instanceof HttpError && err.respons.status === 404) {
//             console.log("Такого пользователя не существует, пожалуйста, повторите ввод.")
//             return domGitHubUser()
//         } else {
//             throw err
//         }
//     })
// }
// domGitHubUser()

// async function wait() {
//     await new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve
//         }, 1000)
//         return 10
//     })
//     function f() {
//         wait().then(function(result) {
//             console.log(result)
//         })
//     }
// }
// f()

// async function showAvatar() {
//     const respons = await fetch('https://api.sampleapis.com/wines/reds')
//     const res = await respons.json()
//     console.log(res)
//     // respons.then(function(res) {
//     //     console.log(res)
//     // }).then(function(wine) {
//     // console.log(wine)
//     // })
//     const beer = await fetch('https://api.sampleapis.com/beers/ale')
//     const beers = await beer.json()
//     console.log(beers)

//     await new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             const div = document.createElement('div')
//             div.style.borderColor = 'blue'
//             div.style.borderStyle = 'solid'
//             div.style.padding = '10px 3px'
//             document.body.append(div)
//         }, 3000)

//     }
//     )
// }
// showAvatar()

// const delay = function(ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve()
//         }, ms)
//     }
//     )
// }
// delay(2000).then(function() {
//     console.log('two seconds')
// })

// const url = 'https://api.sampleapis.com/beers/ale'
// function fetchToDo() {
//     console.log('Fetch to do started ')
//     return delay(2000).then(function() {
//         return fetch(url).then(function(res) {
//             return  res.json()
//         })
//     })
// }
// fetchToDo().then(function(data) {
//     console.log('Data >', data)
// })
// .catch(function(err) {
//     console.log(err)
// })

// async function fetchtoAsync() {
//     console.log('two seconds')
//     try {
//         await delay(2000)
//         const respons = await fetch(url)
//         const data = await respons.json()
//         console.log('Data >', data)
//     } catch(function(e)) {
//         consol.error(e)
//     } finally {

//     }

// }
// fetchtoAsync()

// fetch('https://api.sampleapis.com/beers/ale').then(function(respons) {
//     return respons.json()
// }).then(function(res) {
//     console.log(res) 
// }).catch(function(err) {
//     console.log('Error >', err)
// })

// const video = document.createElement('video')
// const myVideo = navigator.mediaDevices.getUserMedia({video: true}).then(function(mediaStrim) {
//  video.srcObject = mediaStrim
// }).catch(function(err) {
//  console.log('video error >', err)
// })
// console.log(myVideo)

// function sleep(time) {
//     return new Promise(function(resolve, reject) {
//         if (time < 500) {
//             reject('Слишком мало сна!')
//         }
//         setTimeout(function() {
//             resolve(`Поспал ${time}`)
//         }, time)
//     }
//     )
// }
// sleep(1500).then(function(respons) {
//     console.log(respons)
//     return sleep(1000)
// }).then(function(res) {
//     console.log(res)
//     return sleep(500)
// }).then(function(res) {
//     console.log(res)
//     return sleep(200)
// }).then(function(res) {
//     console.log(res)
// }).catch(function(err) {
//     console.log('Ошибка >', err)
// })


// async function getGitData() {
//     try {
//         const respons = await fetch('https://api.sampleapis.com/codingresources/codingResources')
//     const data = await respons.json()
//     console.log(data)
//     } catch(err => {
//         console.log('Error >', err)
//     })
// }
// getGitData()