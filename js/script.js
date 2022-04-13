const form = document.getElementsByTagName('form')[1];

function validate() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})(.[a-zA-Z]{2,3})?$/;
    var pwd = document.getElementById("pwd");

    
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var phoneNum = phone.replace(/[^\d]/g, '');
    if(phoneNum.length != 10) { 
        return false; 
    }
    else{
        return true;
    }
}

var code = document.querySelectorAll("input[type=password]");
code.addEventListener("keyup", function() {
    checkpassword(code.value);
  });
   
function checkpassword(password) {
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
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if(strength<=1){
    code.style.border = "5px solid red";
  }
  else if(strength<=3){
    code.style.border = "3px solid orange";
  }
  else{
    code.style.border = "3px solid green";
  }
}

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!checkPhone()) {
        // Then we prevent the form from being sent by canceling the event       
        event.preventDefault();
    }
    if (!validate()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});