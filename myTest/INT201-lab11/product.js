export let product = [{
    productId: '001',
    productName: 'shirt',
    productPrice: 0,
    productStocks: 0 
},{
    productId: '002',
    productName: 'skirt',
    productPrice: 0,
    productStocks: 0 
}]

// const productsEle = document.querySelector('#products');
// console.log(productsEle);
// const divProductEle = document.createElement('div');
// //1.<div></div>
// divProductEle.setAttribute('id', product.productId);
// //2. <div id='p001'></div>
// const pProductNameEle = document.createElement('p');
// //3. <p></p>
// pProductNameEle.textContent = product.productName;
// //4. <p>iphone</p>;
// divProductEle.appendChild(pProductNameEle);
// //5.<div id='p001'><p>iphone</p></div>
// productsEle.appendChild(divProductEle);
// //6.<div id="products"><div id='p001'><p>iphone</p></div></div>

export const productEle = document.querySelector('#products')
const divProductEle = document.createElement('div')
const pProductNameEle = document.createElement('p')

for(let i = 0; i < product.length; i++){
    divProductEle[i];
    var getProductEle = document.getElementsByClassName(product[i].productId)
    getProductEle.setAttribute('id, ', product[i].productId);
    pProductNameEle[i];
    getProductEle.TextContent += product[i].productName;
    divProductEle.appendChild(pProductNameEle[i]);
    productEle.appendChild(divProductEle[i])
}





// var arr = ["mouse","cat","dog"];

// var holder = document.getElementById("holder");

// for(var i=0; i < arr.length; i++)

//   holder.innerHTML += "<p>"+arr[i]+"</p><br>";