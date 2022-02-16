export function getCookie(name){ //name should be username//level
  var cookies = document.cookie.split(";");
  for (let index = 0; index < cookies.length; index++) {
    var element = cookies[index].split("=");
    if(element[0].trim()==name){
      return element[1];
    }
  }
}