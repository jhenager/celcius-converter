const multiply = function(number1, number2) {
    return number1 * number2;
    };
    const add = function(result, number3) {
    return result + number3;
    };
    
    const number1 = parseFloat(prompt("Enter Degrees Celcius:"));
    const number2 = 1.8;
    const number3 = 32;
    const result = multiply(number1, number2);
    const conversion = add(result, number3);
    alert(conversion);