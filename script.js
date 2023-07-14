let displayelm = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let ac = document.querySelector(".btn-ac");
let c = document.querySelector(".btn-c");
let equals = document.querySelector(".btn-equals");
var stringToDisplay = "";
const operators = ["+", "-", "/", "%", "*"];
var lastoperator = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    if (operators.includes(val)) {
      lastoperator = val;
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
    if (val === ".") {
      const lastoperatorIndex = stringToDisplay.lastIndexOf(lastoperator);
      const checkdot = stringToDisplay.slice(lastoperatorIndex);
      if (checkdot.includes(".")) {
        return;
      }
      if (!lastoperator && stringToDisplay.includes(".")) {
        return;
      }
    }
    stringToDisplay += val;
    display(stringToDisplay);
  });
});
const display = (str) => {
  displayelm.innerText = str || "0.00";
};
const total = () => {
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
