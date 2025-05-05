let fullName = document.querySelector("h1");
let login = document.querySelector("#login");
let signup = document.querySelector("#signup");


login.addEventListener("click", (function () {
    alert("Login SuccessFully");
    fullName.innerHTML = "LOGIN";
    
}))

signup.addEventListener("click", (function () {
    alert("Sign Up SuccessFully");
    fullName.innerHTML = "SIGN UP";
}))