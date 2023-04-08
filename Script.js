let Num = document.getElementById("number");
let Num1 = document.getElementById("number1");
let Num2 = document.getElementById("number2");
let Num3 = document.getElementById("number3");
let Num4 = document.getElementById("number4");
let counter = 0,
  counter1 = 0,
  counter2 = 0,
  counter3 = 0,
  counter4 = 0;

let int = setInterval(() => {
  Num.innerHTML = `${counter}%`;
  if (counter == 87) {
    clearInterval(int);
  }
  counter += 1;
}, 20);
let int1 = setInterval(() => {
  Num1.innerHTML = `${counter1}%`;
  if (counter1 == 82) {
    clearInterval(int1);
  }
  counter1 += 1;
}, 28.27);
let int2 = setInterval(() => {
  Num2.innerHTML = `${counter2}%`;
  if (counter2 == 85) {
    clearInterval(int2);
  }
  counter2 += 1;
}, 22);
let int3 = setInterval(() => {
  Num3.innerHTML = `${counter3}%`;
  if (counter3 == 80) {
    clearInterval(int3);
  }
  counter3 += 1;
}, 30);
let int4 = setInterval(() => {
  Num4.innerHTML = `${counter4}%`;
  if (counter4 == 55) {
    clearInterval(int4);
  }
  counter4 += 1;
}, 30);
// let card = document.querySelector(".card");
// function autoResize() {
//   card.style.height = window.innerHeight + "px";
// }
// window.onresize = autoResize();
let styleSheet =
  document.styleSheets[1].cssRules[0].parentStyleSheet.cssRules[0];
const changeMode = () => {
  let getMode = document.querySelector(".icon");
  let round = document.querySelector(".round");
  let Main = document.querySelector(".main");
  // console.log("Hello");
  let length = round.classList.length;
  // Main.classList.toggle("light");
  if (length == 1) {
    styleSheet.style[0] = "#ffffff";
    styleSheet.style[1] = "#152028";
    round.style.transform = "translateX(37px) rotate(360deg)";
    round.classList.add("light");
    round.style.backgroundColor = "#ffffff";
    getMode.innerHTML =
      ' <ion-icon name="sunny-outline" style="color:#000000;"></ion-icon>';
  } else {
    styleSheet.style[1] = "#ffffff";
    styleSheet.style[0] = "#152028";
    round.classList.remove("light");
    round.style.transform = "translateX(0px) rotate(-360deg)";
    round.style.backgroundColor = "#000000b3";
    getMode.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
  }
};
