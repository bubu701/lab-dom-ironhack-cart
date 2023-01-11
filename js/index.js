// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;

  let productPriceQuant = price * quantity;

  document.querySelector('.subtotal span').innerHTML = productPriceQuant;

  return productPriceQuant;

  //... your code goes here
}

function calculateAll() {
  let totalsum = 0;
  const productlist = document.getElementsByClassName('product');
  productlist.forEach((singleProduct) => {
    productPriceQuant = updateSubtotal(singleProduct);
    totalsum += productPriceQuant;

    const total = document.querySelector('#total-value span');
    total.innerHTML = totalsum;
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
