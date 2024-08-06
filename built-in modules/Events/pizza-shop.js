const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
      super()
      this.orderNumber = 0;
    }
  orderPizza(size,topping) {
    if(size){
      this.orderNumber++;
      this.emit('order',size,topping);
    }
  }
  displayOrder(){
    console.log(`total number of orders : ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;