var firstInput = prompt("First Input");
var secondInput = prompt("Second Input");
var a = +firstInput + +secondInput;
var b = firstInput - secondInput;
var c = firstInput * secondInput;
var d = firstInput / secondInput;
var e = firstInput % secondInput;

var operation = prompt("Operation ( + - * / %): ");

if (operation == "+"){
    document.write("First input + Second Input: " + a);
}
else if (operation == "-"){
    document.write("First input - Second Input: " + b);
}
else if (operation == "*"){
    document.write("First input * Second Input: " + c);
}
else if (operation == "/"){
    document.write("First input / Second Input: " + d);
}
else if (operation == "%"){
    document.write("First input % Second Input: " + e);
}