"use strict"
let x;
x = "hablu mama";
console.log(x)

//interation

const info = ["eshan", "tutul", "nasif", "rakibul"];

info.forEach(companyInfo)

function companyInfo(value, index, itself){
    console.log(value + " " + index)
}




//array map method

const number = [2,4,6,8,10];

let number2 = number.map(function(value){
    return value * 2
})

console.log(number2)

//array flatmap method

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(myArr) //original
console.log(newArr)


//array filter

let myFilter = [1,2,3,4,5,6,7,8,9,10];

const fresh = myFilter.filter(filterFun)


function filterFun(value) {
    return value > 5
}

console.log(fresh)