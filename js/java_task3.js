
var products=document.querySelectorAll(".container div #product-name")
var cartContent=document.querySelector(".rt-content #cart-content")
var priceContent=document.querySelector(".rt-content #price-content")
var btn=document.querySelector("#btn")
var price=0
products.forEach(function(item){

    item.onclick=function(){
        cartContent.innerHTML +=item.textContent+ " /"
        price += Number(item.getAttribute("price"))
        if(cartContent != ""){
            btn.style.display="block"
            
        }
    }
})
btn.onclick=function(){
    priceContent.innerHTML=price +"$"
   
}