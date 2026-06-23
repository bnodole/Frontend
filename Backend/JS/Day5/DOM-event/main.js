const colorname = document.getElementById("color");
const username = document.getElementById("username");
const password = document.getElementById("password");
const login_btn = document.getElementById("btn_login");

colorname.addEventListener("input",(e)=>{
    document.body.style.backgroundColor = e.target.value;
});

username.addEventListener("focus",()=>{
    document.body.style.backgroundColor = "pink";
});
username.addEventListener("blur",()=>{
    document.body.backgroundColor = "";
});

login_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
})