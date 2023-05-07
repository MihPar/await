// fetch('https://no-such-server.blabla')
// .then(function(response) {
//     return response.json
// })
// .catch(function(err) {
//     console.log(err)
// })


// fetch('/article/promise-chaining/user.json')
//     .then(function(response) {
//         return response.json
//     })
//     .then(function(user) {
//         return fetch(https://api.github.com/users/${user.name})
//     })
//     .then(function(response) {
//         return response.json
//     })
//     .then(function(gitHubUser) {
//         return new Promise(function(resolve, reject) {
//             const img = document.createElement('img')
//             img.src = gitHubUser.avatar_urt
//             img.className = 'promise-avatar-example'
//             donument.body.append(img)

//             setTimeout(function() {
//                 img.remove()
//                 resolve(gitHubUser)
//             }, 3000)
//         })
//     })
//     .catch(function(error) {
//         console.log(error.message)
//     })


// new Promise(function(resolve, reject) {
//     throw new Error('error')
// }).catch(alert)

// new Promise(function(resolve, reject) {
//     return reject(new Error('error'))
// }).catch(alert)


// new Promise(function(resolve, reject) {
//     return resolve('ok')
// }).then(function(result) {
//     throw new Error('error')
// }).catch(alert)


// new Promise(funciton(resolve, reject) {
//     return resolve('ok')
// }).then(function(result) {
//     return blablalba
// }).catch(alert)


// new Promise(function(resolve, reject) {
//     throw new Error('error')
// }).catch(function(error) {
//     console.log('errrrrrrrrrrooooooooooorrrrr')
// }).then(function() {
//     console.log('управоение першло к следующему then')
// })


// Promise.all([
//     new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(1)
//     }, 3000)
// }),
//     new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(2)
//     }, 3000)
// }),
//     new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(3)
//     }, 3000)
// })
// ]).then(alert)


// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ]
// const requests = urls.map(function(url) {
//     return fetch(url)
// })

// Promise.all(requests)
//     .then(function(responses) {
//          return responses.forEach(function(response) {
//              console.log(`${response.url}: ${response.status}`)
//          })
//     })


// const names = ['iliakan', 'remy', 'jeresig']
// const requests = names.map(function(name) {
//     return fetch(`https://api.github.com/users/${name}`)
// })
// Promise.all(requests)
// .then(function(responses) {
//     for (const response of responses) {
//         console.log(`${response.url}: ${response.status}`)
//     }
//     return responses
// })
// .then(function(responses) {
//     return Promise.all(responses.map(function(r) {
//         return r.json()
//     }))
// })
// .then(function(users) {
//     users.forEach(function(user) {
//         console.log(user.name)
//     })
// })




// Promise.all([
//     new Promise(function(resolve, reject) {
//         setTimeout(function() {
//              return resolve(1)
//         }, 1000)
//     }),
//     new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             return reject(new Error('error'))
//         }, 2000)
//     }),
//     new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             return resolve(3)
//         }, 3000)
//     })
// ]).catch(alert)


// Promise.all([
//     new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             return resolve(1)
//         }, 1000)
//     }),
//     2,
//     3
// ]).then(alert)


// const promise = Promise.allSettled(iterable)

// Promise.all([
//     fetch('/template.html'')
//     fetch('/style.css')
//     fetch('/data.json')
// ]).then(render)


const urls = [
    'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
]

Promise.allSettled(urls.map(function(url) {
    return fetch(url)
}))
.then(function(result) {
    return result.forEach(function(result, num) {
        if (result.status === 'fulfilled') {
            console.log(`${urls.num}: ${result.value.status}`)
        }
        if (result.status === 'rejected') {
            console.log(`${urls.num}: ${result.reason}`)
        }
    })
})