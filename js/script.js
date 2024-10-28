let btnLogin = document.querySelector(".li-login")
btnLogin.addEventListener('click' , ()=>{
    setInterval(()=>{
        window.location="login.html"
    } , 1500)
})

/////////////////////////////////////////////////////

let ulLink = document.querySelector(".header-ul")
let welName = document.querySelector(".wel-header")
let userInfo = document.querySelector("#user-info")

if(localStorage.getItem("username")){
    ulLink.remove()
    userInfo.style.display = "flex"
    welName.innerHTML = `Welcome ${localStorage.getItem("username")}`
}

////////////////////////////////////////////////////////

let AllProdact = document.querySelector(".prodacts")
let prodacts =[
    {
        id : 1,
        title : "MacBook Pro",
        Price : "500 $",
        Color : "Block" ,
        imagePro : "images/1.jpg"
    },
    {
        id : 2,
        title : "Lenovo ThinkPad",
        Price : "640 $",
        Color : "White" ,
        imagePro : "images/2.jpg"
    },
    {
        id : 3,
        title : "Lonovo IdeaPad",
        Price : "400 $",
        Color : "Gree" ,
        imagePro : "images/3.jpg"
    },
    {
        id : 4,
        title : "MacBook Air",
        Price : "700 $",
        Color : "Gree" ,
        imagePro : "images/4.jpg"
    },
    {
        id : 5,
        title : "Asus ROG Strix",
        Price : "650 $",
        Color : "Black" ,
        imagePro : "images/5.jpg"
    },
    {
        id : 6,
        title : "Asus Tuf",
        Price : "500 $",
        Color : "Black" ,
        imagePro : "images/6.jpg"
    },
    {
        id : 7,
        title : "MacBook Pro M1",
        Price : "800 $",
        Color : "Gree" ,
        imagePro : "images/7.jpg"
    },
    {
        id : 8,
        title : "Lenovo Yoga",
        Price : "500 $",
        Color : "Black" ,
        imagePro : "images/8.jpg"
    },
    {
        id : 9,
        title : "Asus ROG",
        Price : "700 $",
        Color : "Gree" ,
        imagePro : "images/9.jpg"
    },
    {  }
]
function drawItem(){
    let m = prodacts.map((item)=>{
        return `<div class="col-lg-3 col-12">
                    <div class="card card-fam prodact-item my-3 mx-auto" style="width:100%;">
                        <img src="${item.imagePro}" class="card-img-top" alt="..." height="300vh">
                        <div class="card-body div-ifo">
                            <span class="card-title feat-sp fs-4">${item.title}</span> <br> <br>
                            <p class="card-text feat-p fs-5">Price: ${item.Price}</p> 
                            <p class="card-text feat-p fs-5">Color: ${item.Color}</p>
                            <button class="btn" onclick ="BUY(${item.id}">BUY</button> <br>
                            <i class="far fa-heart far fs-4"></i>
                        </div>
                    </div>
               </div>`
    })
    
    AllProdact.innerHTML= m
}
drawItem()

////////////////////////////////////////////////////////////////////////

let cartProdactDiv = document.querySelector(".cart-prodacts div")
let badge = document.querySelector(".badge")
let addProdact = localStorage.getItem("prodactInCart")? JSON.parse(localStorage.getItem("prodactInCart")):[];

if(addProdact){
    addProdact.map(item=>{
        cartProdactDiv.innerHTML += `<p> ${item.title} </p>`;
    })
    badge.style.display = "block"
    badge.innerHTML = addProdact.length
}

function BUY(id){
    if(localStorage.getItem("username")){
        let chosenItem = prodacts.find((item) =>item.id===id)
        cartProdactDiv.innerHTML += `<p> ${chosenItem.title} </p>`
        let cartsProdoctLength = document.querySelectorAll(".cart-prodacts div p")
        badge.style.display = "block"
        badge.innerHTML = cartsProdoctLength.length
        addProdact = [...addProdact , chosenItem]
        localStorage.setItem("prodactInCart" , JSON.stringify(addProdact))
    }else{
        window.location = "login.html";
    }
}

//////////////////////////////////////////////////////////////////////////////

let icon =document.querySelector(".shopping-cart")
let  cartsProdoct = document.querySelector(".cart-prodacts")
icon.addEventListener("click" , function(){
    if(cartProdactDiv.innerHTML != ""){
        if(cartsProdoct.style.display=="none"){
            cartsProdoct.style.display="block"
        }else{
            cartsProdoct.style.display="none"
        }
    }
})

//////////////////////////////////////////////////////////////////////////////

let iconHeart = document.querySelector(".div-ifo i")
iconHeart.addEventListener("click" , function(){
    if(iconHeart.style.Color==="red"){
        iconHeart.style.Color="none"
    }else{
        iconHeart.style.Color="red"
    }
})