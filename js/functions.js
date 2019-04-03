"use strict";

var myName= "Mykal";

function sayHello(name) {
    return "Hello, " + name;
}
var helloMessage = sayHello(myName);
console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


function isTwo(n) {
    console.log(n);
    return n===2
}
console.log(isTwo(random));


function calculateTip(tip, bill) {
    var totaltip = bill * tip;
    return totaltip;
}
var tipPerc = prompt("What is the tip percentage?");
var billTotal = prompt("What is the total bill?");
alert("$" + calculateTip(tipPerc,billTotal));


function applyDiscount(priceBeforeDiscount, discount) {
    var newPrice = priceBeforeDiscount * (1-discount);
    return newPrice;
}
var price = prompt("What is the price?");
var discount = prompt("Discount percentage in decimal form: ")
console.log("$" + applyDiscount(price, discount));
