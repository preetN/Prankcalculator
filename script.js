let displayelm = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");
let ac = document.querySelector(".btn-ac");
let c = document.querySelector(".btn-c");
let equals = document.querySelector(".btn-equals");
var stringToDisplay = "";
const operators = ["+", "-", "/", "%", "*"];
var lastoperator = "";
const audio = new Audio("./sound.mp3");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    displayelm.classList.remove("prank");
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
  const prankval = randomnum();
  if (prankval) {
    audio.play();
    displayelm.classList.add("prank");
  }
  const ttl = eval(stringToDisplay) + prankval;
  stringToDisplay = ttl.toString();
  display(ttl);
};
const clear = (str) => {
  if (str) {
    str = str.slice(0, -1);
  }
  return str;
};
const randomnum = () => {
  const num = Math.round(Math.random() * 10);
  return num <= 3 ? num : 0;
};
