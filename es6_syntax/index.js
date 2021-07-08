const gotham = {
    detectiveOne: 'Jim gordon',
    detectiveTwo: 'Harvey Bullock',
    captain: 'nathaniel barnes'
}


//the original way
const stringOne = `Hi ${gotham.detectiveOne}, ${gotham.detectiveTwo}, ${gotham.captain}`
console.log(string)

//es6 way
const {detectiveOne, detectiveTwo:dTwo, captain:capt} = gotham
const stringTwo = `Hi ${detectiveOne}, ${detectiveTwo}, ${captain}`
console.log(string)

//function
//the normal way
function groupGreeter(group){
    return `Hi ${group.detectiveOne}, ${group.detectiveTwo}, ${group.captain}`

}
// es6
function groupGreeterTwo({detectiveOne,detectiveTwo},string){
    console.log( `Hi ${detectiveOne}, ${detectiveTwo}, ${string}`)

}
groupGreeterTwo(gotham)
groupGreeter(gotham, 'hi')

//array 
const gothamTwo = [{detectiveOne: 'Jim gordon'},{detectiveTwo: 'Harvey Bullock'},{captain: 'nathaniel barnes'}]


//es6
const [detectiveOne,detectiveTwo] = gothamTwo
console.log(detectiveOne,detectiveTwo)

//spread operator

const flash = {
    detectiveOne: 'Joe West',
    detectiveTwo: 'Eddie thawne',
    captain: 'david sing'
}

const gotham = {
    detectiveJim: 'Jim gordon',
    detectiveHarvey: 'Harvey Bullock',
    captainGcpd: 'nathaniel barnes'
}
//es6
const crossover = {
    ...flash,
    ...gotham
}
//original
const crossover = Object.assign({},flash,gotham)

//array
const superheroCharacters = ['Joe West','Eddie thawne','david sing']
const superHeroCharactersTwo = ['Jim gordon','Harvey Bullock','nathaniel barnes']
//es6
const spreadedCharacters = [...superheroCharacters,...superHeroCharactersTwo]





