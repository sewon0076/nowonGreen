let store_cart = document.querySelectorAll('.cart');
let slide_cart = document.querySelector('.cart_slide');
for(i=0;i<store_cart.length; i++){
    store_cart[i].addEventListener('click',(event)=>{
        slide_cart.classList.add('active');
    })
}
let cart_close = document.querySelector('.cart_close');
cart_close.addEventListener('click',(event)=>{
    slide_cart.classList.remove('active');
})