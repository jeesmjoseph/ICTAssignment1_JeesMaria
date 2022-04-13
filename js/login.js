const form = document.getElementsByTagName('form')[1];

function validate() {
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})(.[a-zA-Z]{2,3})?$/;
    return regexp.test(email.value);   
}

var phone = document.getElementById("phone");

function checkPhone() {
    var check = phone.value
    var phoneNum = phone.value.replace(/[^\d]/g, '');
    if (check.match("[a-zA-Z]+")){
      phone.setCustomValidity("Phone Number should contain only numbers 0-9 ");
    }
    else if(phoneNum.length != 10) { 
        phone.setCustomValidity("Phone Number should contain 10 digits (you are currently using "+ phoneNum.length + " digits)");
    }
    else{
        phone.setCustomValidity("");
    }
}

var code = document.getElementById("pwd");
var codex = document.getElementById("confirmpwd");
   
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

function confirmpassword() {
    var strength = 0;
    password = codex.value;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    // if (password.match(/[$@#&!]+/)) {
    //   strength += 1;
    // }
    if(strength<=1){
      codex.style.border = "5px solid red";
    }
    else if(strength===2){
      codex.style.border = "3px solid orange";
    }
    else{
      codex.style.border = "3px solid green";
    }
    if (code.value != codex.value) {
      codex.setCustomValidity("Password Mismatch, Try Again!");
    } 
    else {
        codex.setCustomValidity("");
    }
  }

form.addEventListener('submit', function (event) {
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event       
        event.preventDefault();
    }    
});