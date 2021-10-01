let counter = 0;
let buttonMore = document.querySelector("#more");
let buttonLess = document.querySelector("#less");
let reset = document.querySelector("#reset");
let numberPar = document.querySelector("#number");

buttonMore.addEventListener("click", buttonMoreFunction);
buttonLess.addEventListener("click", buttonLessFunction);
reset.addEventListener("click", resetFunction);

function buttonMoreFunction() {
  counter++;
  numberPar.innerHTML = counter;
  buttonMore.classList.add("active");
  buttonLess.classList.remove("active");
  reset.classList.remove("active");

  /* buttonMore.style.backgroundColor = "#000";
  buttonMore.style.color = "#FFF";
  buttonLess.style.color = "#000";
  buttonLess.style.backgroundColor = "#fff";
  reset.style.backgroundColor = "#FFF";
  reset.style.color = "#000"; */
}
function buttonLessFunction() {
  counter--;
  numberPar.innerHTML = counter;
  buttonMore.classList.remove("active");
  buttonLess.classList.add("active");
  reset.classList.remove("active");
}

function resetFunction() {
  counter = 0;
  numberPar.innerHTML = 0;
  buttonMore.classList.remove("active");
  buttonLess.classList.remove("active");
  reset.classList.add("active");
}
