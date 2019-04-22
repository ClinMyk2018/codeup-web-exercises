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