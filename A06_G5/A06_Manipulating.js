import product from "./uniqoProduct.js";

const productEle = document.querySelector('body');

for (let i = 0; i < product.length; i++) {
    let createDiv = document.createElement('div');
    createDiv.className = product[i].productId;
    createDiv.id = 'products';
    let append = productEle.appendChild(createDiv);
    let createP = document.createElement('p');
    createP.textContent = product[i].productname;
    let createT = document.createElement('p');
    createT.textContent = product[i].productType;
    let createS = document.createElement('p');
    createS.textContent = product[i].productSize;
    let createD = document.createElement('p');
    createD.textContent = product[i].productDesc;
    let createPr = document.createElement('p');
    createPr.textContent = product[i].productPrice;
    let createI = document.createElement('img');
    createI.src = product[i].img;
    let createSt = document.createElement('p');
    createSt.textContent = product[i].stock;
    append.appendChild(createI)
    append.appendChild(createP);
    append.appendChild(createT);
    append.appendChild(createS);
    append.appendChild(createD);
    append.appendChild(createPr);
    append.appendChild(createSt);
}