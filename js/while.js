//
// var e = 2;
// while (e <= 32768) {
//     console.log(e);
//     e *= 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones);
    allCones -= cones;

    if (allCones === 0) {
        console.log("Yay, you sold all the cones!");
    }
    if (allCones < cones) {
        console.log("You are asking for " + cones + " cones, I only have " + allCones + " cones.");
        break;
    }
}while (allCones - cones >= 0);
console.log(cones + " cones sold.");


// You need to loop it back somehow!    <-------------------- LOOOOOK!


//
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

