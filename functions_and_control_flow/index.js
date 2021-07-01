

//standard function
function greet1(name){
    return `Hello ${name}`
}
console.log(greet1('Mohammed'))


//arrow function
const greet2 = (name) => (
    `Hello ${name}`
)
console.log(greet2('Mohammed'))

// hoisting
    //this will work
console.log(greet1('Mohammed'))
function greet1(name){
    return `Hello ${name}`
}

    //this will not work
console.log(greet2('Mohammed'))
const greet2 = (name) => (
    `Hello ${name}`
)

// implicit vs explicit reurn 
    //implicit
    const add = (a,b) => a + b

    //explicit
    function add(a,b){
        return a + b
    }

//alias
const aliasGreet = greet2
console.log(aliasGreet('Mohammed'))


let numOne = 2
let numTwo = 1
let operator = '+'
let answer = 0

if(operator === '+'){
    answer = numOne + numTwo
}
else if(operator === '-'){
    answer = numOne - numTwo
}
else if(operator === '*'){
    answer = numOne * numTwo
}
else{
    'invalid answer'
}


switch(operator){
    case '+':
        console.log('+')
        break
    case '-':
        console.log('+')
        break
    case '*':
        console.log('*')
        break
    case '/':
        console.log('/')
        break
    default:
        'invalid answer'
}




