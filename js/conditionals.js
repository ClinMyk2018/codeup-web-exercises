"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var userconfirm = confirm("Would you like to write a number?");
//     if (userconfirm === true){
//         var number1 = prompt("Please enter a number 1 - 12 :");
//             if (isNaN(number1)){
//                 alert("Enter a number or leave please!");
//             }else{
//                 if (+number1 % 2 === 0){
//                     alert("Your number was even!");}
//                 else {
//                     alert("Your number was odd");}
//                 alert("Your number, plus 100 is: " + (+number1 + 100));
//                 if (+number1 < 0){
//                     alert("Your number is negative!")
//                 } else{
//                     alert("Your number is positive!")
//                 }
//             }
//     }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // var randomColor = colors[Math.floor(Math.random() * colors.length)];
// var ask = prompt("What is your favorite color from this list: 'red, orange, yellow, green, blue, indigo, violet'");
//
//
// function analyzeColor(c) {
//     return (c)
// }
// console.log(analyzeColor(ask));
//
// if (randomColor === "red"){
//     alert("Strawberries are red!")
// } else if (randomColor === "blue"){
//     alert("Blue is the color of the sky!")
// } else if (randomColor === "orange"){
//     alert("Have you ate one of those cuties? Its basically a small orange!")
// } else if (randomColor === "yellow"){
//     alert("Yellow, well this means you need to hydrate! Drink water!")
// } else if (randomColor === "green"){
//     alert("Green is important because money is GREEN!")
// } else if (randomColor === "indigo"){
//     alert("Who colors anything indigo!!??")
// } else {
//     alert("Violet is the worst color, sorry....!")
// }


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (ask.toLowerCase()){
//     case ("red"):
//         alert("Strawberries are red!");
//         break;
//     case ("blue"):
//         alert("Blue is the color of the sky!");
//         break;
//     case ("orange"):
//         alert("Have you ate one of those cuties? Its basically a small orange!");
//         break;
//     case ("yellow"):
//         alert("Yellow, well this means you need to hydrate! Drink water!");
//         break;
//     case ("green"):
//         alert("Green is important because money is GREEN!");
//         break;
//     case ("indigo"):
//         alert("Who colors anything indigo!!??");
//         break;
//     case ("violet"):
//         alert("Violet is the worst color, sorry....!");
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// var bill = prompt("Enter the amount of your total bill?");
// var luckyNumber = Math.floor(Math.random() * 7);
// console.log(luckyNumber);
//
// function calculateTotal(luckyNumber, totalAmount){
//     var newPrice;
//     switch(luckyNumber){
//         case 1:
//             newPrice = totalAmount*(1-.1);
//             break;
//         case 2:
//             newPrice = totalAmount*(1-.25);
//             break;
//         case 3:
//             newPrice = totalAmount*(1-.35);
//             break;
//         case 4:
//             newPrice = totalAmount*(1-.5);
//             break;
//         case 5:
//             newPrice = totalAmount*(1-.75);
//             break;
//         default:
//             newPrice=0;
//             break;
//     }
//     console.log(newPrice);
//     return newPrice;
// }
//
// var discountedPrice = calculateTotal(luckyNumber, bill);
// alert("Your old bill was $"+ bill+ ", your lucky number was: " + luckyNumber+ ". Your lucky number discounted your price to a new price of: $" + discountedPrice+"!")
//
