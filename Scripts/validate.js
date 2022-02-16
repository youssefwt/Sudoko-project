window.addEventListener("load",function(){
    var username = this.document.getElementById("username");
    var usernameerror = this.document.getElementById("usernameerror");
    username.focus();
    var form = this.document.forms[0];


    username.addEventListener("blur",function() {
        if (!checkusername(this.value)) {
            usernameerror.style.display = "block";
            usernameerror.style.color = "red";
            this.className = "error";
            this.focus();
            this.select();
        }else{
            usernameerror.style.display = "none";
            this.className = "success";
        }
    });

    form.addEventListener("submit", function (e) {
        var my_error = "";
        if (!checkusername(username.value)) {
          my_error += "Bad username, ";
          e.preventDefault();
        }
        
        if (e.defaultPrevented) {
            alert(my_error);
        }
    });
});

function checkusername(v) {
    //Checking if it has characheters only range from 4 to 20.
    return v.match(/^[a-zA-Z]{4,20}$/);
  }
function makeCookie(){
    var userName = document.getElementById("username").value;
    var level = document.getElementById("levels").value;
    var expireYear = new Date().getFullYear() + 1; //This year + 1
    
    document.cookie = "username="+userName+";expires="+expireYear; //e.g. username=nostalk;expires=2023
    document.cookie = "level="+level+";expires="+expireYear; //e.g. level=1;expires=2023
}
