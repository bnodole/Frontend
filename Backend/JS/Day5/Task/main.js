const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("btn_login");
const message = document.getElementById("message");

login_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(email.value=="" || password.value == ""){
        message.textContent="All fields must be filled";
    }else if(password.value.length < 6){
        message.textContent = "Password must be atleast 6 char long";
    }else if(!email.value.includes("@")){
        message.textContent = "Email must include @";
    }
});