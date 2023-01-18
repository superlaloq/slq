//Esto es un ejemplo de una calculadora sencilla de JavaScript:

//Define las variables
var num1 = parseInt(prompt("Introduce el primer número"));
var num2 = parseInt(prompt("Introduce el segundo número"));
var op = prompt("Introduce el operador (+, -, *, /)");

//Realiza la operación
if (op == "+") {
    alert(num1 + num2);
}
else if (op == "-") {
    alert(num1 - num2);
}
else if (op == "*") {
    alert(num1 * num2);
}
else if (op == "/") {
    alert(num1 / num2);
}