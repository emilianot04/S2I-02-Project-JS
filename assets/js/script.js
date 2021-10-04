/* Creazioni variabili */
let initialValue = 0;
let counter = document.createElement("p");
let buttonMore = document.createElement("button");
let buttonLess = document.createElement("button");
let reset = document.createElement("button");
let Audio1 = new Audio("assets/audio/Bicycle-bell-notification-tone.mp3");
let Audio2 = new Audio("assets/audio/Applause.mp3");

/* Creazione contatore html  */
counter.innerHTML = initialValue;
counter.setAttribute("id", "number");
document.getElementById("counter").appendChild(counter);

/* Creazione pulsanti html  */
function htmlCreateElement(varName, text, idName) {
  varName.innerHTML = text;
  varName.setAttribute("id", idName);
  varName.setAttribute("data-name", "button-" + idName);
  document.getElementById("button-" + idName).appendChild(varName);
  varName.addEventListener("click", changeValue);
}

/* Crazione tre pulsanti tramite la  funzione pulsanti html  */
htmlCreateElement(buttonLess, "-", "less");
htmlCreateElement(buttonMore, "+", "more");
htmlCreateElement(reset, "RESET", "reset");

/* Creazione Funzione per cambiare il valore */
function changeValue() {
  let valueSelected = this.attributes["data-name"].value;

  if (valueSelected == "button-more") {
    Audio1.play();
    initialValue++;
    buttonMore.classList.add("active");
    buttonLess.classList.remove("active");
    reset.classList.remove("active");
  } else if (valueSelected == "button-less") {
    Audio1.play();
    initialValue--;
    buttonLess.classList.add("active");
    buttonMore.classList.remove("active");
    reset.classList.remove("active");
  } else {
    Audio2.play();
    initialValue = 0;
    reset.classList.add("active");
    buttonMore.classList.remove("active");
    buttonLess.classList.remove("active");
  }
  counter.innerHTML = initialValue;
}
