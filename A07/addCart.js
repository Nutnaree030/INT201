// import productList from './productList.js';

import defaultExport from "./productList";

cart.addEventListener("click", () => {
    let addCart = document.querySelectorAll("#addToCart");
    let cartNumbers = document.querySelector("#cart");
    let amount = 0;
    cartNumbers.innerHTML = `${amount}`;
    for (let i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener("click", () => {
            alert(`${addCart[i].id}`)
            amount += 1;
            cartNumbers.innerHTML = `${amount}`;
        })
    }

});