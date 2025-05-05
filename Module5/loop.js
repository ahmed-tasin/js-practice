
for (let i=0; i < 10; i++ ){
    console.log("hello programmers" + i)
}

//for in loop
const person = {
    name: "tasin",
    phone: "0190250",
    age: "19",
    gender: "male"
}

let storage = "";

for (let prop in person){
// storage += person[prop] + "\n"      
storage += prop + "\n"
}
console.log(storage)

//for of loop

// const arr = ["eshan", "tutul", "rakibul", "nasir", "sajeeb"];
const str = "hablu-programmer"

for (let i of str){
    console.log(i)
}


// //while loop
// let count = 0;
// while (count <= 5){
//     console.log(count)
//     count ++
// }


//do while loop
let count = 0;

do {
    console.log(count)
    count ++

}while (count <= 10)












