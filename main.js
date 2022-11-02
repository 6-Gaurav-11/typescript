"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
// tsc main --watch  -> watches file changes
var x = 10; //can work without initialization
var y = 20; //has to be initialized
//specify data type for variables
var isBeginner = true;
var total = 5;
var name = "Gaurav";
var sentence = "My name is ".concat(name, "\nI am a beginner in typescript");
console.log(sentence);
var n = null;
var u = undefined; //we can assign null or undefined to any data type (number,string)
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Que", 202]; //tuple -> fixed value with different types
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
