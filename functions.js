/*
Topics
    DOM manipulation
    First class function
    closure
    promise
*/    

/*Tips 
--------------------------------
    - javascript is function scoped
    - avoid global variables
    - window is a global object. when we create a global variable/function, its actually set as a propery of the window object. we can access it using window.variableName/functionName.      

    - javascript is a compiled and interprited language.
    - function delcaration resuslts in a function object being created in the compilation step itself.
    - "use strict" can also be used for only a specific method.
*/

"use strict"

//Function declaration
//--------------------------------
//1. function delcaration
function foo(){
    console.log("I am foo");
}
//2. function expression
var afoo = function(){
    var a = 0;
    var b = 0;
    console.log("I am also a foo");
}

foo();
afoo();

//3. Anonymus function and calling it 
//IIFE : immidiately invoked function expression
(function(){
 console.log("I am an anonymus function");   
})();
//why to use it?
//it does not pollute global space. no chances of duplicate names from two different .js files. it executes automatically.
//with this approach we can restrict scopes of variables. var a and b are not accessible outside.

//--------------------------------------------------------------------------------------------------------

//scopes - function scope
//it is based on functions. js does not creates scopes for blocks

//How to prove?
//- age will still print 20
var name = "john";
if(true){
    var age = 20;    
}

console.log(name + age);

//How function scoping works?
var name = "john";
var getAge = function(){
//    var age1 = 10;
    console.log(age);
}
//console.log(age1);   //undefined here : uncaught reference error


//--------------------------------------------------------------------------------------------------------
//Operations on variables

//var a = 10;     write opeation
//console.log();  read operation

//writing a variable without declaring is ok but reading is not.


//--------------------------------------------------------------------------------------------------------
//Hoisting : variable declaration are moved to the top.works for functions too.
//1. console.log(a);
//2. var a = 10;
//
//If you write only line 1, it will throw an error. with line 2 it will print 10. because in the compilation step it registers variable a because of line 2.

/*
function A(){
    B();
}

function B(){
    A();
}

//This example works because of function hoisting.

//hoisting does not work for fuction when function expressions are used.

B();

var fnA = function(){
    
}
*/
//During compilation empty variable is created fnA. during interpreter stage, it will throw an error when running fnA(); because it is undefined.


//closure
//------------------------------------------------------------------------------------------------

var a = 10;

function outerFn(){
    var b = 20;
    var innerFn = function(){           //inner function has scope inside outerFn but with closure its possible to call it outside.        
        console.log(a + b);             //var b is also accessible inside outerFn, but JS keeps snapshot of function(pointers to local                                           variables (no duplicate variables are created.) thats why it is still accessible outside.)
    }
    return innerFn;
}

var catchFn = outerFn();
catchFn();

//Using closure callback functions 

setTimeout(() => console.log("I am a delayed function.."), 2000);