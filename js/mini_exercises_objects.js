// Mini Exercise 1
//
// Create a few beverage objects and assign values to each object for the following properties:
//
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - dateTimesOfLastSips
//     - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try
// defining empty objects and assign property values in separate statements.


var beverages = [
    {
        brandName: "Coke",
        type: "Soda",
        volume: "10ml",
        price: 1,
        experationDate: 2022,
        dateTimesOfLastSips: "never",
        isOpen: false
    },

    {
        brandName: "Tea",
        type: "Healthy",
        volume: "20ml",
        price: 3,
        experationDate: 2020,
        dateTimesOfLastSips: "never",
        isOpen: false
    },
    {
        brandName: "Pepsi",
        type: "Soda",
        volume: "14ml",
        price: 2,
        experationDate: 2022,
        dateTimesOfLastSips: "never",
        isOpen: false
    },
    {
        brandName: "Kracken",
        type: "Rum",
        volume: "1L",
        price: 40,
        experationDate: 2028,
        dateTimesOfLastSips: "never",
        isOpen: false
    }

];

console.log(beverages);


//
//     Mini Exercise 2
//
var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];
//
// 1. Log the names of all users in a single console log seperated by spaces.
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?

// console.log(users.name(", "));
// console.log(users.name.replace("", "John Doe"));
// console.log(users.age = users.age + 1);

//
//     Mini Exercise 3
//
// Create a dog object...
//
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date
// to the shotRecords array
//

var dog = [
    {breed: "Wolf"},
        {weightInPounds: 120,
            age: 4,
            color: "white",
            steralized: false,
            shotRecords: {rabbies:
                            {yesORNo: true, date: "01/2019"},
                        inFlu:
                                {yesORNo:true, date: "01/2018"},
                        heartWorm:
                                {yesORNo:false, date: "01/2016"}
        }
    }
            ];

dog.bark = "Woof!";
dog.getOlder = dog.age + 1;
dog.fix = (dog.steralized = true);
dog.vaccinate = dog.shotRecords.pop(vanerial, {yesOrNo: false, date: "01/2017"} );

console.log(dog.bark);
console.log(dog.getOlder);
console.log(dog.fix);



//
// BONUS 1 (expanding on the books object exercise):
//
// Add a property "keywords" that contains an array of possible genres the book may be categorized by
// Add a boolean property "isAvailable" and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
//
//
// BONUS 2 (expanding on the books object exercise):
//
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//
//     Allow a user to delete a book or a group of books by title or author last name
//
// Allow a user to edit a book by index number in the books array
// Collapse
//
//
//
//
