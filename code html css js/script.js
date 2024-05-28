

$(document).ready(function(){
    $('#burger-icon').click(function(){
        $('ul').toggleClass('trans');
        $('#carouselExampleIndicators').toggleClass('trans');
        $('.form-slide-control').toggleClass('trans');
    })
})

const regisForm = document.querySelector("form.register");
const regisBtn = document.querySelector("label.register");
const regisLink = document.querySelector(".register-link a");
const regisTxt = document.querySelector(".reg-header .register")
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const loginTxt = document.querySelector(".reg-header .login");

regisBtn.onclick = (()=> {
    regisForm.style.marginLeft = "0%";
    regisTxt.style.marginLeft = "0%";
});

loginBtn.onclick = (()=> {
    regisForm.style.marginLeft = "-50%";
    regisTxt.style.marginLeft = "-50%";
});

regisLink.onclick = (()=> {
    regisBtn.click();
    return false;
})


const form = document.querySelector("form");
form.addEventListener('submit',function(e) {
    e.preventDefault();
});


function toggleFunction1() {

    var password = document.getElementById("register-password");
    var iconSlash = document.getElementById("togglePassw-slash-register");
    var icon = document.getElementById("togglePassw-register");

    if(password.type === "password") {
        password.type = "text";
        iconSlash.style.display = "none";
        icon.style.display = "block";
    }
    else {
        password.type = "password";
        iconSlash.style.display = "block";
        icon.style.display = "none"; 
    }
}

function toggleFunction2() {

    var password = document.getElementById("confirm-password-register");
    var iconSlash = document.getElementById("togglePassw-slash-confirm-register");
    var icon = document.getElementById("togglePassw-confirm-register");

    if(password.type === "password") {
        password.type = "text";
        iconSlash.style.display = "none";
        icon.style.display = "block";
    }
    else {
        password.type = "password";
        iconSlash.style.display = "block";
        icon.style.display = "none"; 
    }
}
function toggleFunction3() {

    var password = document.getElementById("password-login");
    var iconSlash = document.getElementById("togglePassw-slash-login");
    var icon = document.getElementById("togglePassw-login");

    if(password.type === "password") {
        password.type = "text";
        iconSlash.style.display = "none";
        icon.style.display = "block";
    }
    else {
        password.type = "password";
        iconSlash.style.display = "block";
        icon.style.display = "none"; 
    }
}

//form validation

//Registration form
function validateRegisForm() {
    
    let nameStr = document.getElementById('fullName-input').value;
    let addressStr = document.getElementById('address-input').value;
    let emailStr = document.getElementById('email-regis-input').value;
    let passStr = document.getElementById('register-password').value;
    let confPassStr = document.getElementById('confirm-password-register').value;
    let cb = document.getElementById('cb-terms-condition');

    
    if(nameStr == "" || addressStr == "" || emailStr == "" || passStr == "" || confPassStr == "") {
        alert("All field must be filled!");
        return false;
    }

    if(addressStr.length <= 7) {
        alert("**Address should consist of minimum 8 characters!");
        return false;
    }

    if(emailStr.length < 6) {
        alert("**Please fill with the valid email address");
        return false;
    }
    
    if(passStr.length <= 4) {
        alert("**Password should consist of at least 5 characters long");
        return false;
    }
    
    if(confPassStr != passStr) {
        alert("**Please recheck your password! Password should be the same.")
        return false;
    }
    
    if(!cb.checked) {
        alert("**You need to agree with the terms and conditions by checking the checkbox");
        return false;
    }

    alert(nameStr + " Successfully Registered!");
    var login = confirm("Do you want to log in?", "Yes", "No");
    if(login == true) {
        alert("Successfully logged-in!");
        var loginStatus = "logged-in";
        localStorage.setItem("status", loginStatus);
        window.location.href = "index.html";
    }
    else {
        alert("**You will be redirected to home page!");
        location.assign("index.html");
    }

}

//Login Form
function validateLoginForm() {
    let emailStr = document.getElementById('email-login-input').value;
    let passStr = document.getElementById('password-login').value;
    
    if(emailStr == "" || passStr == "") {
        alert("**All field must be filled!");
        return false;
    }

    if(emailStr.length < 6) {
        alert("**Invalid email address");
        return false;
    }
    
    if(passStr.length <= 4) {
        alert("**Invalid Password");
        return false;
    }
     
    alert("Successfully logged-in!");
    var loginStatus = "logged-in";
    localStorage.setItem("status", loginStatus);
    window.location.href = "index.html";
    
}

function logInChecker() {
    var tempStatus = localStorage.getItem("status");
    if(tempStatus == "logged-in") {
        document.getElementById("register-nav").innerHTML = "Sign out";
    }
}


function signOutValidation() {
    var a = document.getElementById("register-nav").innerHTML;
    if(a == "Sign out") {
        var signOutConf = confirm("Are you sure want to sign out of the account?")
        if(signOutConf == true) {
            document.getElementById("register-nav").innerHTML = "Register";
            localStorage.clear();
            location.assign("index.html");
        }
        else {
            return false;
        }
    }
    else {
        window.location.href = "register.html";
    }

}