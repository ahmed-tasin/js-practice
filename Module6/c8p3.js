//scope

let say = "hi"//global scope

function sayHi(){
    let sayhi = "message"; //function scope // block scope
    console.log(sayhi)
}
sayHi()

{
    let sayHello = "message sent"; //block scope
    console.log(sayHello)
}



























