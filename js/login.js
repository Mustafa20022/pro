var sign_in_btn = document.querySelector("#sign-in-btn")
var sign_up_btn = document.querySelector("#sign-up-btn")
var container = document.querySelector(".header")

sign_up_btn.addEventListener('click' , () =>{
    container.classList.add("sing-up-mode")
})

sign_in_btn.addEventListener('click' , () =>{
    container.classList.remove("sing-up-mode")
})

//////////////////////////////////////////////////////////////////////////

var solidBtn = document.querySelector("#solid")
var usernameUp = document.querySelector(".Username-up")
var emailUp = document.querySelector(".email-up")
var passUp = document.querySelector(".pass-up")
var alert = document.querySelector(".alert")

solidBtn.addEventListener('click' , function(m){
    m.preventDefault()

    if(usernameUp.value==="" || emailUp.value==="" || passUp.value===""){
        alert.style.display = "block"
    }
    else{
        localStorage.setItem("username" , usernameUp.value);
        localStorage.setItem("email" , emailUp.value);
        localStorage.setItem("pass" , passUp.value);

        container.classList.remove("sing-up-mode")
    }
})

/////////////////////////////////////////////////////////////////////////

var usernameIn = document.querySelector(".Username-in")
var passIn = document.querySelector(".pass-in")
var alert1 = document.querySelector(".alert1")
var alert2 = document.querySelector(".alert2")
var signBtn = document.querySelector("#sign-btn")

let getUsername = localStorage.getItem("username")
let getPass = localStorage.getItem("pass")

signBtn.addEventListener('click' , function(m){
    m.preventDefault()
    
    if(usernameIn.value==="" || passIn.value===""){
        alert1.style.display = "block"
        
    }else{
        if(getUsername && getUsername.trim() === usernameIn.value.trim() && getPass && getPass.trim()===passIn.value.trim()){
            setTimeout(()=>{
                window.location= "index.html"}, 1500)
        }else{
            alert1.style.display = "none"
             alert2.style.display = "block"
        }
    }
})

/////////////////////////////////////////////////////////////////////////