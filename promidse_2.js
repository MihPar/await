// const listPromise = fetch('https://api.sampleapis.com/countries/countries')
// listPromise
//     .then(function(data) {
//     return data.json()
// })
//     .then(function(countries) {
//     console.log(countries)
// })
// .catch(function(err) {
//     console.log('Ошибка >', err)
// })

// const coffee = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//     return reject(Error('Ваш кофе готов'))
//     }, 1500) 
// })
// coffee.then(function(data) {
//     console.log(data)
// }).catch(function(err) {
//     console.log(err)
// })


const family = [
    {member: 'father', id: 111, coffee: 'Lutte'},
    {member: 'mother', id: 222, coffee: 'Cappuchino'},
    {member: 'son',    id: 333, coffee: 'Ecpresso'},
]

const getFamilyCoffee = function(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const member = family.find(function(respons) {
                return respons.id === id
            })
            if (member) {
                resolve(member)
            } else {
                reject(Error('Члена семьи нет'))
            }
        }, 1500)
    })
}
getFamilyCoffee(111).then(function(data) {
    console.log(data)
})
