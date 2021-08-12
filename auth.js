var userName = document.getElementById("username");
var password = document.getElementById("password");

var login1 = document.getElementById("login1");

login1.addEventListener('click', () => {
    if (userName.value == "gl1692830@gmail.com" && password.value == "Gathib09$") {
        return window.location.href = "https://oakfinancialridge.github.io/account/";
    } else {
        alert("Sorry, invalid details..");
        return false;
    }
});

//VALIDATOR..
function auth() {

}
