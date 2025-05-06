









// try {
//     console.log("hello mama")
// }catch {
//     let result = hablu(10,20)
// console.log(result)
// } finally {
//     console.log("please subscribe")
// }



function MyFun(){
    let x = document.getElementById("demo").value;
    let message = document.getElementById("Ptag");
    try {
        if(x.trim() == "") throw "input field is empty";
        else if ( x < 5 ) throw "number is too low";
        else if ( x > 10) throw "number is too much high";
        else{
            throw "everything is ok"
        }
    }catch(err){
        message.innerHTML = err;
    }
}















