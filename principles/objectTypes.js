const product_01 = {};
product_01.id = 8339;
product_01.name = 'Mountain Dew';
product_01.category = 'drinks';
product_01.price = 2.65;

const sale = {};
sale.id = 22456;
sale.customer_id = 10056;
sale.product_id = product_01.id;
sale.qty = 15;
sale.discount = 0.05;
sale.total = `U$${((sale.qty*product_01.price)-(sale.discount*(sale.qty*product_01.price))).toFixed(2)}`;

console.log(product_01);
console.log(sale);
