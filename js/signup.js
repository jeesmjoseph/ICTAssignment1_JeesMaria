const form = document.getElementsByTagName('form')[1];

function validate() {
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})(.[a-zA-Z]{2,3})?$/;
    return regexp.test(email.value);   
}

var code = document.getElementById("pwd");
function checkpassword() {
    password = code.value;
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if(strength<=1){
      code.style.border = "5px solid red";
    }
    else if(strength===2){
      code.style.border = "3px solid orange";
    }
    else{
      code.style.border = "3px solid green";
    }
    if(strength < 3){
      code.setCustomValidity("Password should consist of atleast one uppercase , lowercase and number");
    }
    else {
      code.setCustomValidity("");
    }
  }