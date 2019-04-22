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


function filteredNumbers(arr){
    var output=[];

}






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

function makeSandwichObjects(bread, fillings){
    var output = [];
    for (var i=0; i<breads.length; i += 1){

        var sandwich ={};
        sandwich.bread = breads[i];
        sandwich.fillings = fillings[i];

        // or
        //
        // output.push({
        // breads: bread[i],
        //     fillings: fillings[i]
        // });
    }
    return output;
}
console.log(makeSandwichObjects(breads, fillings));