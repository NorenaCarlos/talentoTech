function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  } else {
    return a / b;
  }
}

function calculator() {
  let continueCalculating = true;

  while (continueCalculating) {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operator = prompt("Enter the operator (+, -, *, /) or 'exit' to exit: ");

    if (operator === "exit") {
      continueCalculating = false;
      alert("Goodbye!");
      break;
    }

    let result;
    switch (operator) {
      case "+":
        result = sum(num1, num2);
        break;
      case "-":
        result = sub(num1, num2);
        break;
      case "*":
        result = mul(num1, num2);
        break;
      case "/":
        result = div(num1, num2);
        break;
      default:
        alert("Invalid operator");
        continue;
    }

    alert(`The result is ${result}`);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  calculator();
});