const shoppingCart = [
  { name: "shoes", price: 1200, quantity: 2 },
  { name: "shirt", price: 300, quantity: 5 },
  { name: "pant", price: 900, quantity: 8 },
];

function totalCost(products) {
  let sum = 0;
  for (var i = 0; i < products.length; i++) {
    // console.log(product[i]);
    product = products[i];
    // console.log(product);
    productPrice = product.price * product.quantity;
    sum += productPrice;
  }
  return sum;
}

const cost = totalCost(shoppingCart);
console.log(cost);
