const display = document.getElementById("display")
const buttons = document.querySelectorAll(".button")
let total = ""
console.log(window.math)

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
      console.log(total);
      display.value = window.math.evaluate(total)
    }

    // 
    if (button.id === "addition") {
      display.value += "+"
      total += "+"
    }

  })
})
