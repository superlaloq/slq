
<html>
<head>
  <title>Calculadora</title>
  <script>
    //Define las variables
    var num1;
    var num2;
    var op;
    var result;
    
    // Establece los valores de los números
    function setValues(){
      num1 = parseInt(document.getElementById("num1").value);
      num2 = parseInt(document.getElementById("num2").value);
      op = document.getElementById("op").value;
    }
    
    // Realiza la operación
    function calculate(){
      setValues();
      if (op == "+") {
        result = num1 + num2;
      } else if (op == "-") {
        result = num1 - num2;
      } else if (op == "*") {
        result = num1 * num2;
      } else if (op == "/") {
        result = num1 / num2;
      }
      document.getElementById("result").value = result;
    }