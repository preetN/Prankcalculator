let displayelm = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let ac = document.querySelector(".btn-ac");
let c = document.querySelector(".btn-c");
let equals = document.querySelector(".btn-equals");
var stringToDisplay = "";
// const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "/", "%", "*"];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    if (operators.includes(val)) {
      const lastChar = stringToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
    }
    if (val === "AC") {
      stringToDisplay = "";
      return display(stringToDisplay);
    }
    if (val === "C") {
      let a = clear(stringToDisplay.toString());
      stringToDisplay = a;
      return display(stringToDisplay);
    }
    if (val === "=") {
      const lastChar = stringToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
      return total();
    }
    stringToDisplay += val;
    display(stringToDisplay);
  });
});
const display = (str) => {
  displayelm.innerText = str || "0.00";
};
const total = () => {
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     if (arr.includes(str[i])) {
  //       break;
  //     }
  //     str = str.slice(0, -1);
  //   }
  const ttl = eval(stringToDisplay);
  stringToDisplay = ttl.toString();
  display(ttl);
};
const clear = (str) => {
  if (str) {
    str = str.slice(0, -1);
  }
  return str;
};
