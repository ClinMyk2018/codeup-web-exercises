//
// var e = 2;
// while (e <= 65536) {
//     console.log(e);
//     e *= 2;
// }


// Mykal

//
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);
// var remainingCones = allCones;
// do {
//     var requestedcones = Math.floor(Math.random() * 5) + 1;
//
//
//     if (remainingCones > requestedcones) {
//         remainingCones = remainingCones - requestedcones;
//         console.log(requestedcones + " cones sold, now you have " + remainingCones + " left.");
//     } else if (remainingCones < requestedcones) {
//             console.log("You requested " +requestedcones+ " cones, and I only have " +remainingCones+ " left, sorry!");
//         break;
//     } else if (remainingCones === 0){
//         console.log("Perfect I sold my last cone")
//     }
//
// }while (remainingCones > 0);
//     console.log("Yay, I sold them all!");
//

// ------------------------------------------------


// Attempt number 2!!


var totalCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have " + totalCones + " to sell today!");
var requestedAmountOfCones;
do {
    requestedAmountOfCones = Math.floor(Math.random() * 5) + 1;
    if (totalCones-requestedAmountOfCones<0){
        console.log("You requested " +requestedAmountOfCones+ " cones, and I only have " +totalCones+ " left, sorry!");
        continue;}
        totalCones = totalCones-requestedAmountOfCones;
        console.log("You bought "+requestedAmountOfCones+ " cones, and now I have " +totalCones+ "left.")
}while (totalCones > 0);
console.log("I have sold all of my cones!");




// Example



// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

