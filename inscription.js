function init() {
  function store() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let mdp = document.getElementById("mdp");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (username.value.length < 3) {
      let invalid = document.getElementById("invalidUsername");
      invalid.innerText =
        "Choiissez un pseudo contenant au moins 3 caractères.";
    } else if (email) {
    } else if (mdp.value.length == 0) {
      let invalid = document.getElementById("invalidMdp");
      invalid.innerText =
        "Choiissez un pseudo contenant au moins 3 caractères.";
    } else if (username.value.length == 0 && mdp.value.length == 0) {
      alert("Please fill in email and password");
    } else if (mdp.value.length > 8) {
      alert("Max of 8");
    } else if (!mdp.value.match(numbers)) {
      alert("please add 1 number");
    } else if (!mdp.value.match(upperCaseLetters)) {
      alert("please add 1 uppercase letter");
    } else if (!mdp.value.match(lowerCaseLetters)) {
      alert("please add 1 lovercase letter");
    } else {
      localStorage.setItem("username", username.value);
      localStorage.setItem("mdp", mdp.value);
      alert("Your account has been created");
    }
  }

  //checking
  function check() {
    let storedUsername = localStorage.getItem("username");
    let storedMdp = localStorage.getItem("mdp");

    let userUsername = document.getElementById("userName");
    let userMdp = document.getElementById("userPw");
    let userRemember = document.getElementById("rememberMe");

    if (userUsername.value == storedUsername && userMdp.value == storedMdp) {
      alert("You are logged in.");
    } else {
      alert("Error on login");
    }
  }
}
