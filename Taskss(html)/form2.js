const message = document.getElementById("message");
const login = document.getElementById("btn_login");
const rememberMe = document.getElementById("rememberMe");

function ButtonStatus() {
    if(rememberMe.checked){
        login.disabled = false;
        login.style.backgroundColor = "white";
    }else{
        login.disabled = true;
        login.style.backgroundColor = "grey";
    }
}

ButtonStatus();

rememberMe.addEventListener("change", ButtonStatus);

login.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        message.textContent = "All fields are required";
        message.style.color = "Red";
    } else {
        message.textContent = "Login Success";
        message.style.color = "green";
    }
});