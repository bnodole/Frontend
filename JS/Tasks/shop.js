let item_text = document.getElementById("haha");
let btn_plus = document.getElementById("plus");
let btn_minus = document.getElementById("minus");

let cart_items = 0;

function AddItems() {
    cart_items += 1;
    item_text.textContent = cart_items;
}

function DecItems() {
    if(cart_items > 0)
        cart_items -=1;
    item_text.textContent = cart_items;
}

btn_plus.addEventListener("click",AddItems);
btn_minus.addEventListener("click",DecItems);