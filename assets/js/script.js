let counter = 0;
let buttonMore = document.querySelector("#more");
let buttonLess = document.querySelector("#less");
let reset = document.querySelector("#reset");
let numberPar = document.querySelector("#number");
let Audio1 = new Audio("assets/audio/Bicycle-bell-notification-tone.mp3");
let Audio2 = new Audio("assets/audio/Applause.mp3");

buttonMore.addEventListener("click", changeValue);
buttonLess.addEventListener("click", changeValue);
reset.addEventListener("click", changeValue);

function changeValue() {
  let valueSelected = this.attributes["data-name"].value;

  if (valueSelected == "button-more") {
    Audio1.play();
    counter++;
    buttonMore.classList.add("active");
    buttonLess.classList.remove("active");
    reset.classList.remove("active");
  } else if (valueSelected == "button-less") {
    Audio1.play();
    counter--;
    buttonLess.classList.add("active");
    buttonMore.classList.remove("active");
    reset.classList.remove("active");
  } else {
    Audio2.play();
    counter = 0;
    reset.classList.add("active");
    buttonMore.classList.remove("active");
    buttonLess.classList.remove("active");
  }
  numberPar.innerHTML = counter;
}
