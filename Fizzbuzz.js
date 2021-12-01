// let num;
// function fiz(num){
//     if(num%3==0 && num%5==0){
//         console.log("FizBuzz")
//     }
//     else if(num%3==0){
//         console.log("Fiz")
//     }
//     else if(num%5==0){
//         console.log("Buzz")
//     }
//     else if(typeof(num)!=Number){
//         console.log("Not a number")
//     }

// } 

const output=fiz("suf")
console.log(output)
function fiz(num){
    if(num%3===0 && num%5===0)
    return "fizbuzz";
    if(typeof(num)!=NaN)
    return NaN;
    if(num%3===0)
    return "fiz";
    if(num%5===0)
    return "buzz";

    return num;
}
