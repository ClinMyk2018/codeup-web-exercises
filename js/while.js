//
// var e = 2;
// while (e <= 65536) {
//     console.log(e);
//     e *= 2;
// }


// Mykal


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



// Ricky


// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("I have " + allCones + " cones to sell.");
// // This expression will generate a random number between 1 and 5
// var sold;
// do{
//     sold = Math.floor(Math.random() * 5) + 1;
//     if (allCones-sold<0){console.log("Cannot sell you "+sold+" cones I only have "+allCones);continue}
//     allCones-=sold;
//     console.log(sold+" cones sold... " + allCones + " left");
// }while(allCones>0);
// console.log("Yay! I sold them all!");






// Samuel



// var allCones = Math.floor(Math.random() * 50) + 50;
// var requestedCones;
// var stops = 0;
// var remainingCones = allCones;
//
// console.log("I have " + allCones + " cones to sell today");
//
// do{
//     requestedCones = (Math.floor(Math.random() * 5) + 1);
//     stops++;
//
//     if(remainingCones > requestedCones){
//         remainingCones = remainingCones - requestedCones;
//         console.log("stop :" + stops);
//         console.log("I sold " + requestedCones + " cones and I have a total of " + remainingCones + " cones left");
//
//     }else if (remainingCones < requestedCones) {
//         console.log("stop :" + stops);
//         console.log("I dont have " + requestedCones + " cones, but I do have " + remainingCones + " cones to sell");
//         remainingCones = remainingCones - requestedCones;
//
//     }else if (remainingCones === 0){
//         console.log("Perfect I sold my last cone")
//
//     }
// }while (0 < remainingCones);
// console.log("Sold a total of " + allCones + " today");
// console.log("Sold all my cones for the day");
//
//



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

