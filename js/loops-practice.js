// var e = 2;
// while (e < 100) {
//     console.log( + e);
//     e += 2;
// }
// function f() {
//     var e = 1;
//     while (e <= 10) {
//         console.log( e * e);
//         e++;
//     }
// }
//
// function guy() {
//     var f = 5;
//     while (f <= 100){
//         console.log(f * 5);
//         f++;
//     }
// }
//
// var i = 1;
//
// do {
//     console.log("The number is " + i);
//     i++;
// }while (i <= 25 );
//
// var j = 100;
//
// do {
//     console.log(j);
//     j -= 10;
// }while (j > -50);

// --------------- EXAMPLE-----------------
// for (intialize, condition, increment){
//     console.log(var)
// }
//
//            --NESTED EXAMPLE--
// for (intialize, condition, increment){
//     for(var j = 1; j<= 10; j++){
//      console.log(j *1);
// }



for (var i = 1; i <=100; i++){
if (i % 15 === 0) console.log("Fizzbuzz");
else if (i % 5) console.log("Buzz");
if (i % 3 === 0) console.log("Fizz");
else console.log(i);
}


