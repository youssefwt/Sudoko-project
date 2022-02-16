import { getCookie } from "./Cookies.js";

var userName = getCookie("username");
var level = getCookie("level");
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var exacttime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var highscore = 0;
let scoreTime;
let start = document.getElementById("start");
var table = document.getElementsByTagName("table")[0];
let player_state = document.getElementById("win_lose");
let selectionImages = document.querySelectorAll(".item img");
let body = document.body;
let useredit = document.getElementById("useredit");
let scoreedit = document.getElementById("scoreedit");

//let group = localStorage.getItem("Group");
let group = "aliens";
console.log(group);
let source;
source = `../images/space_theme/${group}/`;

useredit.innerHTML = getCookie("username"); //fitting the username into place
let currentHighScore = 0;
if (localStorage.getItem(userName+"-"+level)) {
  //if the user exist fetch his highscore
  currentHighScore = JSON.parse(localStorage.getItem(userName+"-"+level)).highscore;
}
scoreedit.innerHTML = currentHighScore; //fitting the new highscore saved last time

body.style.setProperty("--mainBackgroundColor", "#00405e");
    body.style.setProperty("--mainBorderColor", "#011324");
    body.style.backgroundImage = "url(../images/ocean_theme/ocean3.jpg)";

for (let index = 0; index < selectionImages.length; index++) {
  selectionImages[index].src = `${source}/${index + 1}.png`;
}

var arr = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];
function vail() {
  let care = true;
  let state = true;
  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr[k].length; i++) {
      var itrator = 0;
      var itr = 0;
      for (let j = 0; j < arr[k].length; j++) {
        if (arr[k][i] == arr[k][j]) {
          itrator++;
        }
        if (arr[k][i] == arr[j][k]) {
          itr++;
        }
        if (itrator > 1) {
          state = false;
        }
        if (itr > 1) {
          care = false;
        }
      }
    }
  }
  if (state && care) {
    //player_state.innerText = "Success";
    return true;
  } else {
    //player_state.innerText = "Fail!";
    return false;
  }
}

//change inner text of result
function changeStatus(isSuccessful) {
  if (isSuccessful) {
    player_state.innerText = "Success";
  } else {
    player_state.innerText = "Fail!";
  }
}


let tmContainer = document.getElementById("time");
let time = 120;

let tt;
let Flag = 1;

start.addEventListener("click", function () {
  table.style.transform = "rotate(360deg)";
  table.style.visibility = "visible";
  if (Flag == 1) {
    tt = setInterval(() => {
      time--;
      tmContainer.innerText = time;
      scoreTime = time;
    }, 1000);
    setTimeout(() => {
      clearInterval(tt);
      //vail();
      changeStatus(vail());
      //for popup
      actionOnTimeOut();
    }, time * 1000);
  }
  Flag = 0;
});

table.addEventListener("keyup", (e) => {
  let currentInput = document.activeElement;
  let currentTd = currentInput.parentNode.parentNode;
  let currentTr = currentTd.parentNode;
  let index = Array.from(currentTr.children).indexOf(currentTd);
  let id = e.target.getAttribute("id");
  let arrc = id.split("");

  switch (e.key) {
    case "ArrowLeft":
      // Left pressed
      currentTd.previousElementSibling.getElementsByTagName("input")[0].focus();
      break;
    case "ArrowRight":
      // Right pressed
      currentTd.nextElementSibling.getElementsByTagName("input")[0].focus();
      break;
    case "ArrowUp":
      // Up pressed
      Array.from(currentTr.previousElementSibling.children)
        [index].getElementsByTagName("input")[0]
        .focus();
      break;
    case "ArrowDown":
      // Down pressed
      Array.from(currentTr.nextElementSibling.children)
        [index].getElementsByTagName("input")[0]
        .focus();
      break;
  }

  switch (e.target.value) {
    case "1":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "rect");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[0].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "2":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "circle");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[1].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "3":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "triangle");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[2].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "4":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "star");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[3].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "5":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "oval");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[4].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "6":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "PARABOLIC");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[5].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "7":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "ELLIPSE");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[6].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "8":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "TRAPEZOID");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[7].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "9":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "CIRCULARSECTION");

      e.target.parentElement.children[1].children[0].src =
        selectionImages[8].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "":
      break;
    default:
      e.target.value = "";
      console.log("enter valid number");
      break;
  }
});

/*---------------code for default img--------------*/
let diff_img = [];
let diff_img_col = [];

function random_location() {
  for (let i = 0; i < arr.length; i++) {
    let ran = Math.floor(Math.random() * 9);
    let ran2 = Math.floor(Math.random() * 9);
    while (diff_img.indexOf(ran) > -1 || diff_img_col.indexOf(ran2) > -1) {
      if (diff_img.indexOf(ran) > -1) {
        ran = Math.floor(Math.random() * 9);
      } else {
        ran2 = Math.floor(Math.random() * 9);
      }
    }
    let idd = ran.toString() + ran2.toString();
    diff_img.push(ran);
    diff_img_col.push(ran2);
    let el = document.getElementById(idd);
    arr[ran].splice(ran2, 1, (i + 1).toString());
    el.nextElementSibling.children[0].src = `${source}/${i + 1}.PNG`;
    el.nextElementSibling.children[0].style.display = "block";
    el.disabled = true;
    console.log(`source: ${source}`);
    console.log(`group: ${group}`);
  }
}

function setHighScore() {
  // currentHighScore = JSON.parse(localStorage.getItem(userName)).highscore;
  if (scoreTime > currentHighScore) {
    highscore = scoreTime;
    let newUserInfo = {
      //userinfo as object for local storage
      username: userName,
      score: time,
      lastplayed: date + ":" + exacttime,
      highscore: highscore,
      level: level,
    };
    localStorage.setItem(userName+"-"+level, JSON.stringify(newUserInfo));
    console.log("saved from inside if condition on the set highscore--------------");
  }else{
    let newUserInfo = {
      //userinfo as object for local storage
      username: userName,
      score: time,
      lastplayed: date + ":" + exacttime,
      highscore: currentHighScore,
      level: level,
    };
    localStorage.setItem(userName+"-"+level, JSON.stringify(newUserInfo));
  }
  console.log("saved from outside if condition on the set highscore");
}

let userInfo = {
  //userinfo as object for local storage
  username: userName,
  score: time,
  lastplayed: date + ":" + exacttime,
  highscore: highscore,
  level: level,
};

function saveIntoLocalStorage() {
  localStorage.setItem(userName+"-"+level, JSON.stringify(userInfo));
}

random_location();


/* ****check if array is full**** */
function checkIfFull() {
  let checker = 0;
  // loop the outer array
  for (let i = 0; i < arr.length; i++) {
    // get the size of the inner array
    var innerArrayLength = arr[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      if (arr[i][j]) {
      } else {
        checker++;
      }
    }
  }
  if (checker > 0) {
    //empty
    return false;
  } else {
    //full
    return true;
  }
}

// function actionOnSuccess(){}
function actionOnSuccess(e) {
  if (checkIfFull()) {
    if (vail()) {
      //success
      popup.className = "window";
      popup.style.display = "block";
      popup.style.border = "5px solid green";
      popup.style.color = "green";
      message.innerText = "SUCCESS";
      popup.style.backgroundColor = "rgba(155, 242, 162 , 0.7)";
      start.disabled = true;
      player_state.innerText = "Success";
      clearInterval(tt);
      e.disabled=true;
    }
  }
}

//action on time out
function actionOnTimeOut() {
  if (checkIfFull() || !vail()) {
    popup.className = "window";
    popup.style.display = "block";
    popup.style.border = "5px solid crimson";
    popup.style.color = "red";
    popup.style.backgroundColor = "rgba(245, 176, 176 , 0.7)";
    message.innerText = "FAIL !";
    start.disabled = true;
    let cell = document.activeElement;
    cell.disabled=true;
  }
}

//play again button
playagain.onclick = function () {
  saveIntoLocalStorage();
  setHighScore();
  window.location.reload();
};
home.onclick = function () {
  saveIntoLocalStorage();
  setHighScore();
}