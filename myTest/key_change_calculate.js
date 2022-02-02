let change;

/* key */
function changeCalculator(order, pay) {
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    changeResult.B500 = Math.floor(change / 500);
    changeResult.B100 = Math.floor((change % 500) / 100);
    changeResult.B50 = Math.floor(((change % 500) % 100) / 50);
    changeResult.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
    changeResult.B5 = Math.floor(((((change % 500) % 100) % 50) % 20) / 5);
    changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
    changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
    return changeResult;
  }
  console.log(changeCalculator(222, 1000));
  console.log(changeCalculator(500, 1000));
  console.log(changeCalculator(5, 1000));

/** New Edition - กดตะกร้าให้เห็นสินค้าที่สั่งได้ เตือนแบบ alert */
let cartNumbers = [];
for (let i = 0; i < addCart.length; i++) {
  cartNumbers[i].addEventListener("click", () => {
    let addP = createI2.getAttributeById(`${product[i].productId}`);
    if(!cartNumbers.include(addP)) {
      let cartC = {};
      let amountC = 0;
      cartC.idProd = `${addCart[i].id}`;
      cartC.amount = ++amountC;
      cartNumbers.push(cartC);
    } else if(cartNumbers.include(addP)){
      cartC.idProd(`${addCart[i].id}`).amount = ++amountC;
    }
    alert(cartNumbers);
  },true)
}

createI2.addEventListener("click", () => {
    let addProd = createI2.getAttributeById('`${product[i].productId}`');
    if(!incart.include(addProd)) {
        alert(`new ${addProd} added`);
    }
    alert(`${addProd} had been added`);
    incartEle.innerHTML += ++count;
    incart.push(addProd);
    console.log(incart);
} , false)

// ----------------------------------------------------------------
let addCart = document.querySelectorAll(".Add");
let cartNumbers = document.querySelector("#cart");
let createCart = document.createElement("p");

let cartEle = document.querySelector('#incart')
// createCart.id = 'a'

cartNumbers.appendChild(createCart);

let amount = 0;
let cartCollect = [];
cartEle.innerHTML = cartNumbers.innerHTML = `${amount}`
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    amount += 1;
    alert(`เพิ่ม ${addCart[i].id} 1 ชิ้น`);
    cartEle.innerHTML = cartNumbers.innerHTML = `${amount}`;
    let addProduct = addCart.getAttribute('id')
    if(!cartCollect.include(addProduct)){
      let cartC = {};
      cartC.id = `${addCart[i].id}`;
      cartC.amount = 1;
      cartCollect.push(cartC);
    } else {
      if(cartCollect.cartC.id == `${addCart[i].id}`)
        cartC.amount++;
    }
  })
}

cartNumbers.addEventListener("click", 
  () => {alert(cartCollect);},true)
// ----------------------------------------------------------------

/** let creatI2 = document.createElement("img");
         * createI2.className = "Add";
         * createI2.Id = product[i].productId;
         * createI2.src = "";      
         * 
         * createI2.addEventListener("click", () => {
            *  let addProd = createI2.getAttribute('id');
            *  if(!incart.include(addProd)) {
            *      alert(`new ${addProd} added`);
            *    }
            *  alert(`${addProd} had been added`);
            *  incartEle.innerHTML += ++count;
            *  incart.push(addProd);
            *  console.log(incart);
            * }, false)
*/