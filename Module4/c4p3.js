//date object
//formating
// let myDate = new Date("2025-04-11");
// console.log(myDate)

//get date method

let myDate = new Date();

let currentYear = myDate.getFullYear();
let currentMonth = myDate.getMonth();
let currentDay = myDate.getDate();
let currentWeekend = myDate.getDay();
let currentHours = myDate.getHours();
let currentMiniute = myDate.getMinutes();
let currentsecond = myDate.getSeconds();
let currentMIlsecond = myDate.getMilliseconds();


console.log(currentMIlsecond)


//set method
let d = new Date();
// d.setFullYear(2025,11,3)
d.setMinutes(25)

console.log(d)
