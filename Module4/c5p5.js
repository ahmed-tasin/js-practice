let day = 2;
let dayName;

switch (day) {
    case 1:
    console.log("Saturday")
    break;
    case 2:
        console.log("Sunday")
        break;
    case 3:
        console.log("Monday")
        break;
    case 4:
        console.log("Tuesday")
        break;
    case 5:
        console.log("Wednusday")
        break;
    case 6:
        console.log("Thrusday")
        break;
    case 7:
        console.log("Friday")
        break;
    default:
        dayName = "invalid day name"
        break;

}

console.log(dayName)
