// array methods
// this

let array = ['Rachel', 'Joseph', 'Mohammed', 'chel']

console.log(array.find(name => name === 'chel'))

const condition = name => name === 'Rachel'

const findArray = (array,func) => {
    for(let name of array){
        console.log(name)
        if(func(name)){
            
            return name
        }
    }

}

console.log(findArray(array,condition))

const  mapArray = (array,callback) => {
    const result = []

    for(let i = 0; i < array.length; i++){
        const changedItem = callback(array[i])
        result.push(changedItem)
    }
    return result

}
const change = (elem) => elem.toUpperCase()
console.log(mapArray(array, change))


const  forEachArray = (array,callback) => {
    for(let i = 0; i < array.length; i++){
        callback(array[i])
    }
}

console.log(forEachArray(array, change))


// let person = {
//     name: 'Mohammed'
// }
console.log(person)

let person2 = new Object()
person2.name = 'Joseph'

function person3 (name){
    this.name = name
}

// class person3 {
//     constructor( name){
//         this.name = name
//     }
// }

const person4 = new person3 ('Rachel')
console.log(person4)

console.log(this)


function person(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

function group(){
    this.person1 = new person('Mohammed', 1)
    console.log(this)
}
const pryCalledQuest = new group() 

array.forEach((elem) => console.log(elem))

function ourARRAY(array){
    this.data = [...array]
    this.forEach = () => {
        return this.data
    }
}
const qqq = [23, 23, 23]

const test = new Array( 23, 23 ,23)


console.log(test)
console.log(qqq)

const ourAr = new ourARRAY([12, 34, 45])

console.log(ourAr.forEach())


function qArray(array){
    this.data = [...array]
    this.log = () => {
        return this.data
    }
    this.forEach
    this.map
}

const arr = [23, 23, 23]

new String()

const arr2 = new Array([23, 23, 23])
console.log(arr2)

const arr3 = new qArray([23,23,23])

arr3.prototype.log()

console.log(arr3.log())







