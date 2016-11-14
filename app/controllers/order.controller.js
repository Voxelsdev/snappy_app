class OrderCtrl {
  constructor(orderSvc) {
    this.orderSvc = orderSvc;
  }

  placeOrder() {
    
  }

  orders() {
    return this.orderSvc.orders();
  }
}
