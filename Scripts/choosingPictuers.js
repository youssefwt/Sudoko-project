// "use strict"
import { getCookie } from "./Cookies.js";

let contButton = document.getElementById("continue");
let groupButtons = document.querySelectorAll('input[type="radio"]');
let goTo = document.getElementById("anchor");

document.onload = function(){
  for(let i = 0; i < groupButtons.length; i++){
    groupButtons[i].checked = false;
  }
}

let picGroup;
let groupType;

for (let i = 0; i < groupButtons.length; i++) {
  groupButtons[i].addEventListener("change", function (e) {
    picGroup = e.target.id;
    switch (picGroup) {
      case "rocket_ships":
      case "aliens":
        groupType='space_theme';
        break;
      case "Fish":
      case "boats":
        groupType='ocean_theme';
        break;
    }
    console.log('theme: '+groupType);
    console.log('picture group: '+picGroup);
    localStorage.setItem("Group", picGroup);
    localStorage.setItem("groupType", groupType);
  });
}


contButton.onclick = function () {
  switch (picGroup) {
    case "rocket_ships":
    case "aliens":
    case "Fish":
    case "boats":        
        let level = getCookie("level");
        if(level==1){
          goTo.href = "../HTML/Grid4x4.html";
        }else{
          goTo.href = "../HTML/Grid9x9.html";
        }
        console.log(level);
        break;
    default :
        alert("you must choose a picture group !")
  }
};
