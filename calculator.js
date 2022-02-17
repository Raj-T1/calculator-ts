function calculate() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var operator = document.getElementById("operator");
    var op = operator.options[operator.selectedIndex].text;
    var result;
    if (op === "+") {
        result = parseFloat(num1.value) + parseFloat(num2.value);
    }
    else if (op === "-") {
        result = parseFloat(num1.value) - parseFloat(num2.value);
    }
    else if (op === "*") {
        result = parseFloat(num1.value) * parseFloat(num2.value);
    }
    else if (op === "/") {
        result = parseFloat(num1.value) / parseFloat(num2.value);
    }
    document.getElementById("result").innerHTML = result.toString();
}
