import { getCookie } from "./Cookies.js";

// console.log("alohaaaaa"+getCookie("username"))
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
// let timeContainerh1 = document.querySelector(".timeContainer h1");
// let nameContainer = document.querySelector(".nameContainer h1");
// let scoreContainer = document.querySelector(".scoreContainer h1");
// let ResultContainer = document.querySelector(".ResultContainer h1");
// let tableCells = document.querySelectorAll(".editValue");
// let ReferencesImages = document.querySelectorAll(".groupSelected .item");
//let group = localStorage.getItem("Group");
//let groupType = localStorage.getItem("groupType");
// console.log(group);
let group = localStorage.getItem("Group");
let groupType = localStorage.getItem("groupType");
let source;
source = `../images/${groupType}/${group}/`;
useredit.innerHTML = getCookie("username"); //fitting the username into place
let currentHighScore = 0;
if (localStorage.getItem(userName+"-"+level)) {
  //if the user exist fetch his highscore
  currentHighScore = JSON.parse(localStorage.getItem(userName+"-"+level)).highscore;
}
scoreedit.innerHTML = currentHighScore; //fitting the new highscore saved last time

(function groupSwitching() {
  if (groupType == "ocean_theme") {
    // body.style.backgroundImage = "url(../images/ocean_theme/ocean3.jpg)";
    // start.style.backgroundColor = "#00405e";
    // start.style.border = "5px solid #011324";
    // timeContainerh1.style.backgroundColor = "#00405e";
    // timeContainerh1.style.border = "5px solid #011324";
    // nameContainer.style.backgroundColor = "#00405e";
    // nameContainer.style.border = "5px solid #011324";
    // scoreContainer.style.backgroundColor = "#00405e";
    // scoreContainer.style.border = "5px solid #011324";
    // ResultContainer.style.backgroundColor = "#00405e";
    // ResultContainer.style.border = "5px solid #011324";
    // for (let index = 0; index < tableCells.length; index++) {
    //   tableCells[index].style.backgroundColor = "#00405e";
    //   tableCells[index].style.border = "5px solid #011324";
    // }
    // for (let index = 0; index < ReferencesImages.length; index++) {
    //   ReferencesImages[index].style.border = "5px solid #011324";
    // }
    body.style.setProperty("--mainBackgroundColor", "#00405e");
    body.style.setProperty("--mainBorderColor", "#011324");
    body.style.backgroundImage = "url(../images/ocean_theme/ocean3.jpg)";
  }
})();

for (let index = 0; index < selectionImages.length; index++) {
  selectionImages[index].src = `${source}/${index + 1}.png`;
}

var arr = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
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
//changing time to try popup
let time = 60;
let tt;
let Flag = 1;

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
    // for(let i=0; i<4; i++){
    //   let x = i.toString();
    //   for(let j=0; j<4; j++){
    //     let y = j.toString();
    //     let required = x+y;
    //     let cell = document.getElementById(required);
    //     cell.disabled=true;
    //   }
    // }
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
      if (
        !currentTd.previousElementSibling.getElementsByTagName("input")[0]
          .disabled
      ) {
        currentTd.previousElementSibling
          .getElementsByTagName("input")[0]
          .focus();
      } else {
        currentTd.previousElementSibling.previousElementSibling
          .getElementsByTagName("input")[0]
          .focus();
      }
      break;
    case "ArrowRight":
      // Right pressed
      if (
        !currentTd.nextElementSibling.getElementsByTagName("input")[0].disabled
      ) {
        currentTd.nextElementSibling.getElementsByTagName("input")[0].focus();
      } else {
        currentTd.nextElementSibling.nextElementSibling
          .getElementsByTagName("input")[0]
          .focus();
      }
      break;
    case "ArrowUp":
      // Up pressed
      if (
        !Array.from(currentTr.previousElementSibling.children)[
          index
        ].getElementsByTagName("input")[0].disabled
      ) {
        Array.from(currentTr.previousElementSibling.children)
          [index].getElementsByTagName("input")[0]
          .focus();
      } else {
        Array.from(
          currentTr.previousElementSibling.previousElementSibling.children
        )
          [index].getElementsByTagName("input")[0]
          .focus();
      }
      break;
    case "ArrowDown":
      // Down pressed
      if (
        !Array.from(currentTr.nextElementSibling.children)[
          index
        ].getElementsByTagName("input")[0].disabled
      ) {
        Array.from(currentTr.nextElementSibling.children)
          [index].getElementsByTagName("input")[0]
          .focus();
      } else {
        Array.from(currentTr.nextElementSibling.nextElementSibling.children)
          [index].getElementsByTagName("input")[0]
          .focus();
      }

      break;
  }

  switch (e.target.value) {
    case "1":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "1");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[0].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "2":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "2");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[1].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "3":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "3");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[2].src;
      e.target.parentElement.children[1].children[0].style.display = "block";
      actionOnSuccess(e.target);
      break;
    case "4":
      e.target.value = "";
      arr[arrc[0]].splice(arrc[1], 1, "4");
      e.target.parentElement.children[1].children[0].src =
        selectionImages[3].src;
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
    let ran = Math.floor(Math.random() * 4);
    let ran2 = Math.floor(Math.random() * 4);
    while (diff_img.indexOf(ran) > -1 || diff_img_col.indexOf(ran2) > -1) {
      if (diff_img.indexOf(ran) > -1) {
        ran = Math.floor(Math.random() * 4);
      } else {
        ran2 = Math.floor(Math.random() * 4);
      }
    }
    let idd = ran.toString() + ran2.toString();
    diff_img.push(ran);
    diff_img_col.push(ran2);
    let el = document.getElementById(idd);
    arr[ran].splice(ran2, 1, (i + 1).toString());
    el.nextElementSibling.children[0].src = `${source}/${i + 1}.PNG`;
    el.nextElementSibling.children[0].style.display = "block";
    el.nextElementSibling.children[0].style.border="3px solid red";
    el.nextElementSibling.children[0].style.opacity="0.9";
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

// function cheat(){
//   arr=[1,2,3,4],[2,1,3,4],[3,2,1,4],[4,3,2,1];
// }

random_location();
