let btnOut = document.querySelector(".login-out")
btnOut.addEventListener('click' , ()=>{
    localStorage.clear()
    setInterval(()=>{
        window.location = "login.html"
    } , 1500)
})