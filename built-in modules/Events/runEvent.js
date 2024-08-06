const PizzaShop = require('./pizza-shop');
const Drink = require('./drink');

const pizzaShop = new PizzaShop();
const drink = new Drink();

pizzaShop.on('order',(size,topping)=>{
    console.log(`You ordered a ${size} pizza with ${topping}`);
    drink.drinkComps(size);
})

pizzaShop.orderPizza('large','mushroom');
pizzaShop.orderPizza('small','cheese');
pizzaShop.orderPizza('','grass');
pizzaShop.displayOrder();

