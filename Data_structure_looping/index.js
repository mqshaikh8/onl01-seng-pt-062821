//data structure
//Arrays, objects,  hashes, trees, 

const names = ['Helen', 'Mohammed', 'John']

console.log(names[ names.length - 1])
console.log(names.length)

//deleting from the back
// //delete
console.log(names.pop())
// //adding
console.log(names.push('Joseph'))

//deleting from the front
//delete
console.log(names.shift())
//add
console.log(names.unshift(12))

// //sort
console.log(names.sort())

//Joining elements 
const example = ['test', 'ing', '123']
console.log(example.join(''))

// filter
// 4 ways of doing callbacks
//1
const age = [23, 12, 45, 67]
console.log(age.filter((age) => age > 18))
//2
names.filter(function(elem){
    if(age > 18){
        return age
    }
})
// //3
const filterFunc = (elem) => {
    if(age > 18){
        return age
    }
}
names.filter(filterFunc)
// //4
function filterFunc(elem){
    console.log(elem)
}
names.filter(filterFunc)

//find 

console.log(age.find( age => age === 18))



//looping

// const names = ['Helen', 'Mohammed', 'John', 'Mike']

for(let i = 0; i < names.length; i++){
    console.log(`Hello! ${names[i]}`)
}

const nameArr = names.forEach((name,index,array) => {
    return`Hello! ${name} ${index}`

})
const nameArr2 = names.map((name,index,array) => {
    return `Hello! ${name} ${index}`
})

console.log(nameArr)
console.log(nameArr2)


