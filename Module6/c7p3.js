//pass-by-value of primitives values

function hablu(a){
    return a = a * a
}

let b = 10;

let result = hablu(b)

console.log(result)

console.log(b)

//pass-by-value of refference values

let person = {
    name:"tasin",
    age:20
}

function increaseValue(a){
    a.age += 5
}

increaseValue(person)
console.log(person)


// recurtion in js

function Hello(number){
    if (number === 0) return;
    console.log(number)
    Hello(number - 1)

}

Hello(10)

//
function eshan(a="ahad"){
    console.log(a)
}
eshan("hablu mama")




























