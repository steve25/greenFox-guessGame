window.onload = () => {
  clearInput();
};

const lowNumber = 1;
const highNumber = 100;

document.getElementById("lowNumber").innerHTML = lowNumber;
document.getElementById("highNumber").innerHTML = highNumber;

let guessNumberEnter = document.getElementById("guessedNumber");

guessNumberEnter.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    guess();
  }
});

let report = document.getElementById("report");
let reportNumber = document.getElementById("report-number");
let reportContent = document.getElementById("report-content");

const newNumber = () => {
  return Math.floor(Math.random() * (highNumber + 1 - lowNumber) + lowNumber);
};

let findedNumber = newNumber();

const guess = () => {
  guessNumber = Number(guessedNumber.value);

  if (!guessNumber || isNaN(guessNumber)) {
    const content =
      "Zadajte prosím číslo od<br /><strong>" +
      lowNumber +
      " po " +
      highNumber +
      "</strong>";
    attemp(null, content);
    return;
  }

  if (guessNumber > highNumber) {
    const content = "Maximálne číslo je<br /><strong>" + highNumber+'</strong>';
    return attemp(null, content);
  }

  if (guessNumber < lowNumber) {
    const content = "Minimálne číslo je<br /><strong>" + lowNumber +'</strong>';
    return attemp(null, content);
  }

  while (guessNumber !== findedNumber) {
    if (guessNumber < findedNumber) {
      return attemp(guessNumber, "je príliš malé");
    }
    if (guessNumber > findedNumber) {
      return attemp(guessNumber, "je príliš veľké");
    }
  }
  win();
};

const clearInput = () => {
  guessedNumber.value = "";
  guessedNumber.focus();
};

const attemp = (guessNumber, content) => {
  reportNumber.innerHTML = guessNumber;
  reportContent.innerHTML = content;
  clearInput();
};

const win = () => {
  guessedNumber.disabled = true;
  report.classList.add("green-bg");
  attemp(guessNumber, "je hľadané číslo");
  setTimeout(() => {
    findedNumber = newNumber();
    guessedNumber.disabled = false;
    report.classList.remove("green-bg");
    attemp(null, "Hraj znova");
  }, 3000);
};
