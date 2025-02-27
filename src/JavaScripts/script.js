const display = document.getElementById("display")
const buttons = document.querySelectorAll(".button")
let total = ""
let isBracketOpen = false


// Handling Every Button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.id)

    // Hendling The AC Button
    if (button.id === "AC") {
      display.value = ""
      total = ""
    }

    // Hendling The All Constant Values
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    if (numbers.includes(button.id)) {
      display.value += Number(button.id)
      total += button.id
    }

    // Handling The Delete Button
    if (button.id === "back") {
      display.value = display.value.slice(0, -1)
      total = total.slice(0, -1)
    }

    // Handling The Decimal Button
    if (button.id === "decimal") {
      if (display.value.slice(-1) === ".") {
        display.value = display.value.slice(0, -1)
        total = total.slice(0, -1)
      } else {
        display.value += "."
        total += "."
      }
    }

    // Handling The Equal Button
    if (button.id === "equal") {
      if (window.math) {
        display.value = window.math.evaluate(total);
        total = display.value
        
      } else {
        console.error("math is undefined. Please check if preload.js is loaded correctly.");
      }
    }

    // Handling The Add Operation
    if (button.id === "addition") {
      display.value += "+"
      total += "+"
    }

    // Handling The Subtraction Operation
    if (button.id === "subtraction") {
      display.value += "-"
      total += "-"
    }

    // Handling The multiplication Operation
    if (button.id === "multiplication") {
      display.value += "X"
      total += "*"
    }

    // Handling The divide Operation
    if (button.id === "divide") {
      display.value += "÷"
      total += "/"
    }

    // Handling The percentage Operation
    if (button.id === "percentage") {
      display.value += "%"
      total += "%"
    }

    // Handling The pow Operation
    if (button.id === "pow") {
      if (display.value.slice(-1) === "^") {
        display.value = display.value.slice(0, -1)
        total = total.slice(0, -1)
      } else {
        display.value += "^"
        total += "^"
      }
    }

    // Handling The pi Operation
    if (button.id === "pi") {
      display.value += "π"
      total += `${Math.PI}`;
    }

    // handling the sqrt Operation
    if (button.id === "root") {
      if (display.value.slice(-1) === "√") {
        display.value = display.value.slice(0, -1)
        total = total.slice(0, -1)
      } else {
        display.value += "√"
        total = "√"
      }
    }

    // handling the bracket Operation
    if (button.id === "bracket") {
      if (isBracketOpen === false) {
        display.value += "("
        total += "("
        isBracketOpen = true
      } else {
        display.value += ")"
        total += ")"
        isBracketOpen = false
      }
    }

    // Handling the Faltorial Operation
    if (button.id === "fact") {
      let factorialIs
      let num
      if (display.value.slice(-1) === "!") {
        display.value = display.value.slice(0, -1)
        total = total.slice(0, -1)
      } else {
        num = display.value.split(/[\+\-\X\/]/).pop()
        display.value += "!"
        factorialIs = window.math.factorial(num);
        total += factorialIs
      }
    }

  })
})
