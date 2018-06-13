/*
Higher order functions :  functions as values
    - a function that takes another function as an argument and calls it to do a part of a task.
    - It provides composition. You can compose a function into another.
*/

//one common example is filter
//Filter iterates through each item in the array and the callback function passed to it returns true/false based on the condition. the returned array contains all the elements of that array for which the callback function returned true.

var lens = [
    {brand:"nikon", type: "telephoto", description:"50-200mm"},
    {brand:"nikon", type: "telephoto", description:"200-500mm"},
    {brand:"canon", type: "telephoto", description:"55-250mm"},
    {brand:"opteka", type: "fish-eye", description:"6.5mm"},
    {brand:"nikon", type: "kit lens", description:"18-55mm"},
    {brand:"samyang", type: "wide-angle", description:"8.5mm"},
]

var nikonLens = lens.filter((l) => {
    return l.brand ==="nikon";
});

console.log("Available nikon lens: \n", nikonLens);    

//Find
console.log("Search Result : ", lens.find( (l) => l.type === "telephoto"));

//Map
//Similar to filter but it returns new object instead of true/false.
var modelWithDescription = lens.map((l) => {return l.brand + " " + l.description});     //for arrow function for return stmt 
                                                                                        //either () => expression
                                                                                        // or () => {return expression}

console.log(modelWithDescription);
//top of the rock
//rockafeller
//statern island
                                    