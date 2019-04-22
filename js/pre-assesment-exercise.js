//
// ## Problem 1
//
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
//     ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
//     ```js
// [3, 5]
// ```


var input = ["fred", true, 5, 3, 12];

function filteredNumbers(arr){
    var output=[];

    for (var i=0; i<arr.length; i +=1){
        //verify if element is a number
        //if element is number, push onto output arr
        if(typeof arr[i] === "number"){
            output.push(arr[i]);
        }
    output.sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    }

}

console.log(filteredNumbers(input));




//
// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
// ```




function getOlder(dogs){
dogs.forEach(function(dogs){
    dogs.age +=1;
});
}
getOlder(dogs);
console.log(dogs);


// var letters = ["a", "b", "c"];
//
// letters.forEach(function (letter, index) {
//     // console.log(letter);//"a", "b", "c"
//     letters[index] += 1;//"a1", "b1", "c1"
// });
//
// console.log(letters);
//
// for (var i = 0; i < letters.length; i+=1) {
//     console.log(letters);
// }
//
// function add1(arr){
// arr.forEach(function (element, index) {
//     arr[index] += 1
//     });
// }


//
// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
//     Example Input:
//
//     ```js
// var breads  = [
//     "white",
//     "wheat",
//     "rhy",
//     "white"
// ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
// ```
//
// function makeSandwichObjects(breads, fillings){
//     var output = [];
//     for (var i=0; i<breads.length; i += 1){
//
//         var sandwich ={};
//         sandwich.breads = breads[i];
//         sandwich.fillings = fillings[i];
//
//         // or
//         //
//         // output.push({
//         // breads: breads[i],
//         //     fillings: fillings[i]
//         // });
//     }
//     return output;
// }
// console.log(makeSandwichObjects(breads, fillings));




// # Second JavaScript Assessment Study Problems
//
// ## Problem 1
//
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
//     ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
//     ```js
// [3, 5]
// ```

// function filterNumbers(arr) {
//     var outputArr = [];
//     for (var i = 0; i < arr.length; i += 1) {
//         console.log(typeof arr[i]);
//         if (typeof arr[i] === "number") {
//             outputArr.push(arr[i]);
//         }
//     }
//     return outputArr.sort(function(a, b) {
//         if (a > b) {
//             return 1;
//         } else if (a < b) {
//             return -1;
//         } else {
//             return 0;
//         }
//     });
// }
//
// console.log(filterNumbers(["fred", true, 5, 3, 12])); // [3, 5]



// ------------------------------>




//
// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
// [
// {
//     name: "Chompers",
//     breed: "Pug",
//     age: 7
// },
// {
//     name: "Freddy",
//     breed: "Lab",
//     age: 4
// },
// {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 10
// }
// ];
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     name: "Chompers",
//     breed: "Pug",
//     age: 8
// },
// {
//     name: "Freddy",
//     breed: "Lab",
//     age: 5
// },
// {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 11
// }
// ];
// ```

// var dogs =  [
// {
//     name: "Chompers",
//     breed: "Pug",
//     age: 7
// },
// {
//     name: "Freddy",
//     breed: "Lab",
//     age: 4
// },
// {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 10
// }
// ];
//
// function getOlder(dogs) {
//     dogs.forEach(function(element) {
//         element.age += 1;
//     });
// }
//
// getOlder(dogs);
//
// dogs.forEach(function(dog) {
//     console.log(dog.age);
// });

//
// ## Problem 3
//
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
// [
// {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: true
// },
// {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false
// },
// {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: true
// }
// ]
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: false // changed to false
// },
// {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false // stays the same
// },
// {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: false // changed to false
// }
// ]
// ```

// var cars = [
// {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: true
// },
// {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false
// },
// {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: true
// }
// ];
//
// function washCars(cars) {
//     cars.forEach(function(car) {
//         if (car.isDirty === true) {
//             car.isDirty = false;
//         }
//     });
// }
//
// cars.forEach(function(car) {
//     console.log(car.isDirty);
// });
//
// washCars(cars);
//
// cars.forEach(function(car) {
//     console.log(car.isDirty);
// });

// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:
//
//     ```js
// [
// {
//     isAdmin: true,
//     email: 'user1@email.com'
// },
// {
//     isAdmin: true,
//     email: 'user2@email.com'
// }
// {
//     isAdmin: false,
//     email: 'user3@email.com'
// }
// ];
// ```
//
// Example Output (before refactor):
//
// ```js
// 2
// ```
//
// Example Output (after 1st refactor):
//
// ```js
// [
// 'user1@email.com',
// 'user2@email.com'
// ]
// ```
//
// Example Output (after 2nd refactor):
//
// ```js
// [
// {
//     isAdmin: true,
//     email: 'user1@email.com'
// },
// {
//     isAdmin: true,
//     email: 'user2@email.com'
// }
// ]
// ```

// var users = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];

// function adminList(users) {
//     var count = 0;
//     users.forEach(function(user) {
//         if (user.isAdmin) count++;
//     });
//     return count;
// }
//
// console.log(adminList(users));

// function adminList(users) {
//     var emails = [];
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             emails.push(user.email);
//         }
//     });
//     return emails;
// }
//
// console.log(adminList(users));

// function adminList(users) {
//     var outputArr = [];
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             outputArr.push(user);
//         }
//     });
//     return outputArr;
// }
//
// console.log(adminList(users));



// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
//     Example Input:
//
//     ```js
var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     bread: "white,
//     filling: "pb&j"
// },
// {
//     bread: "wheat",
//     filling: "ham"
// },
// {
//     bread: "rhy",
//     filling: "cheese steak"
// },
// {
//     bread: "white",
//     filling: "tuna"
// }
// ]
// ```

function makeSandwhichObjects(breads, fillings) {
    var sandwiches = [];
    for (var i = 0; i < breads.length; i += 1) {
        sandwiches.push({
            bread: breads[i],
            filling: fillings[i]
        });
    }
    return sandwiches;
}

console.log(makeSandwhichObjects(breads, fillings));

//
// ## Problem 6
//
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
//
//     Example Input:
//
//     ```js
// {
// propA: true,
// propB: "hello"
// propC: 23,
// propD: "world"
// }
// ```
//
// Example Output:
//
//     ```js
// ['h', 'w']
// ```

var someObj = {
    propA: true,
    propB: "hello",
    propC: 23,
    propD: "world"
};

function firstLettersOfStringProps(obj) {
    var output = [];
    Object.keys(obj).forEach(function(prop) {
        if (typeof obj[prop] === "string") {
            output.push(obj[prop][0]);
        }
    });
    return output;
}

console.log(firstLettersOfStringProps(someObj));

// ## Problem 7
//
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
//
//     Example Input:
//
//     ```js
// [
// {
//     name: "Fred Smith",
//     favColor: "Blue",
//     age: 25
// {,
// {
//     name: "Sally Smith",
//     favPet: "Dogs",
//     isAdmin: true,
//     age: 37
// {,
// {
//     phoneNumber: "5552759898",
//     name: "Karen Smith",
//     age: 19
// {
// ]
//
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     name: "Fred Smith",
//     age: 25
// {,
// {
//     name: "Sally Smith",
//     age: 37
// {,
// {
//     name: "Karen Smith",
//     age: 19
// {
// ]
//
// ```

var users = [
    {
        name: "Fred Smith",
        favColor: "Blue",
        age: 25
    },
    {
        name: "Sally Smith",
        favPet: "Dogs",
        isAdmin: true,
        age: 37
    },
    {
        phoneNumber: "5552759898",
        name: "Karen Smith",
        age: 19
    }
];

function returnBasicUserData(users) {
    var output = [];
    users.forEach(function(user) {
        output.push({
            name: user.name,
            age: user.age
        });
    });
    return output;
}

console.log(returnBasicUserData(users));

// ## Problem 8
//
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
//
//     Example 1 Input:
//
//     ```js
// ['hello', true, 25, null, undefined, '', 'world']
// ```
//
// Example 1 Output:
//
//     ```js
// 10
// ```
//
// Example 2 Input:
//
//     ```js
// {
// someProp1: true,
// someProp2: null,
// someProp3: "hello",
// someProp4: 88,
// someProp5: "world"
// }
// ```
//
// Example 2 Output:
//
//     ```js
// 10
// ```

// var ex1 = ['hello', true, 25, null, undefined, '', 'world'];
//
// var ex2 = {
//     someProp1: true,
//     someProp2: null,
//     someProp3: "hello",
//     someProp4: 88,
//     someProp5: "world"
// };
//
// function returnCharCount(input) {
//     var output = 0;
//     for (var x in input) {
//         if (typeof input[x] === "string") {
//             output += input[x].length;
//         }
//     }
//     return output;
// }
//
// console.log(returnCharCount(ex2));