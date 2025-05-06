"use strict"
//this

const person = {
    firstName: "Tasin ",
    lastname: "Ahmed",
    fullname: function (){ 
        return this.firstName + this.lastname
    }
}
console.log(person.fullname())

//global obj

console.log(typeof this)




//function under globaal obj

function sayHi() {
    console.log(typeof this )
}

sayHi()





