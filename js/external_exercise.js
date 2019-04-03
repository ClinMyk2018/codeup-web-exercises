


                        // From the first exercise:



alert("Welcome to my website!");

console.log("Hello from external JavaScript");

var userInput = prompt('What is your favorite color?:');
console.log('The user entered: ' + userInput);

var myfavoitecolor = (userInput);
alert("Wow, hey my favorite color is also " + myfavoitecolor + "!");


                        // From the second exercise:

const price=3;
var movies=(" 1. Little Mermaid, 2. Brother Bear, 3. Hercules ");
alert("Here is your choice of movies:" + movies);

var userinputLM=prompt("How many days would you like to rent Little Mermaid? ")
console.log('Rent little mermaid for ') + userinputLM + "amount of days";
console.log(userinputLM);

var userinputBB=prompt("How many days would you like to rent Brother Bear? ")
console.log('Rent little mermaid for ') + userinputBB + "amount of days";
console.log(userinputBB);

var userinputHC=prompt("How many days would you like to rent Hercules? ")
console.log('Rent little mermaid for ') + userinputHC + "amount of days";
console.log(userinputHC);

var total = (userinputLM*price + userinputBB*price + userinputHC*price);
    alert("You are renting the Little Mermaid for " + userinputLM + " days, " + "Brother Bear for " + userinputBB + " days, and " + "Hercules for " + userinputHC + " days. " + "the total amount you owe is: $" + total + ".");



var english = 24;
var math = 20;
var history = 22;
var science = 15;

var classmax = 22;

console.log(english <= classmax );
console.log(math <= classmax );
console.log(history <= classmax );
console.log(science <= classmax );

var classsize=confirm("Is the class currently full? If yes hit ok");
var classchedule = confirm("Does this class conflict with your schedule? if yes hit ok");
var enrollmentstatus = !classsize && !classchedule;

alert("Student enrollment status: " + enrollmentstatus);



var offerstatus =confirm("Is the offer valid?");
var numberofitems = prompt("How many items did they buy?");
console.log(numberofitems);
var mberstatus=confirm("Are you a member?");

if((mberstatus && offerstatus) || (numberofitems < 2 && offerstatus)){
    console.log("You can use the offer!")
}else{
    console.log("Sorry it's expired.")
}




