// var odd = prompt("please give me an 'odd number' between 1 - 50: ");
//
// while (odd % 2 === 0) {
//     odd = prompt("Error, please give me an 'odd number' between 1 - 50: ");
// }
// console.log("This is the number you chose: " + odd);
// for (var i = 1; i <= 50; i += 2){
//     console.log("Here is a odd number: " + i);
//     if (i === odd){
//         console.log("We are skipping this number: " + odd);
//         break;
//         console.log("you shouldnt see this line.");
//     }
// }

function even(odd) {
    return odd % 2 === 0;
}
var usernum ;

do {
    usernum = parseFloat(prompt("please give me an 'odd number' between 1 - 50: "));
    if (even(usernum) || (usernum > 50) || (usernum < 1)){
        usernum = false;
    }else {break;}
}while (usernum === false);
console.log("The number to skip is : " + usernum);

for (var i = 1; i <= 50; i += 2) {
    console.log("Here is a odd number: " + i);
    if (i === usernum) {
        console.log("We are skipping this number: " + usernum);
        continue;
    }
}

// for (var i = 1; i <=50; i++){
//     if (i % 2 === 0){
//         continue;
//     }
//     if (i === usernum){
//         console.log("We are skipping this number " + usernum);
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
