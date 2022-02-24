/* getting a reference on all buttons */
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clear = document.querySelector("#clear");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const plus = document.querySelector("#plus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const minus = document.querySelector("#minus");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");
const equal = document.querySelector("#equal");
const slash = document.querySelector("#slash");
const by = document.querySelector("#by");
const modulo = document.querySelector("#modulo");
const del = document.querySelector("#delete");
const screen = document.querySelector("#result");

let acc = 0;
let storedNumber = 0;
let lastOp = "";
let isFirstOp = 1;

const storeNumber = (n) => {
  storedNumber = n;
};

const calcResult = () => {
  let lastNum = parseFloat(screen.value);
  if (isNaN(lastNum)) {
    alert("Please enter a number!");
    return;
  }
  switch (lastOp) {
    case "+":
      acc = storedNumber + lastNum;
      break;
    case "-":
      acc = storedNumber - lastNum;
      break;
    case "*":
      acc = storedNumber * lastNum;
      break;
    case "/":
      console.log("last inserted num is: " + lastNum);
      if (lastNum === "0") {
        screen.value = "ErrDivByZero";
        return;
      }
      acc = storedNumber / lastNum;
      break;
    case "%":
      acc = storedNumber % lastNum;
      break;
  }

  screen.value = acc;
  storeNumber(acc);
  lastOp = "";
};

/* add a click event to all the buttons */
equal.addEventListener("click", () => {
  calcResult();
});

clear.addEventListener("click", () => {
  screen.value = "";
  acc = 0;
  isFirstOp = 1;
  lastOp = "";
});

one.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "1";
});

two.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "2";
});

three.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "3";
});

four.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "4";
});

five.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "5";
});

six.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "6";
});

seven.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "7";
});

eight.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "8";
});

nine.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  screen.value += "9";
});

zero.addEventListener("click", () => {
  // if (lastOp !== "") screen.value = "";
  if (screen.value !== "") screen.value += "0";
});

plus.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storeNumber(parseFloat(screen.value));
  } else {
    calcResult();
  }
  lastOp = "+";
  screen.value = "";
  isFirstOp = 0;
});

minus.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storeNumber(parseFloat(screen.value));
  } else {
    calcResult();
  }
  lastOp = "-";
  screen.value = "";
  isFirstOp = 0;
});

by.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storeNumber(parseFloat(screen.value));
  } else {
    calcResult();
  }
  lastOp = "*";
  screen.value = "";
  isFirstOp = 0;
});

slash.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storeNumber(parseFloat(screen.value));
  } else {
    calcResult();
  }
  lastOp = "/";
  screen.value = "";
  isFirstOp = 0;
});

modulo.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storeNumber(parseFloat(screen.value));
  } else {
    calcResult();
  }
  lastOp = "%";
  screen.value = "";
  isFirstOp = 0;
});

del.addEventListener("click", () => {
  let currScreen = screen.value;
  let newScreen = currScreen.slice(0, currScreen.length - 1);
  screen.value = newScreen;
});
