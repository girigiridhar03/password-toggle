const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
     if(password.type == "password"){
         btn.src = "eye-icons/eye-open.png"
        password.type = "text"
     }
     else{
        password.type = "password"
        btn.src = "eye-icons/eye-close.png"
     }
})