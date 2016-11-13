class OrderCtrl {
  constructor(orderSvc) {
    this.orderSvc = orderSvc;
  }

  orders() {
    return this.orderSvc.orders();
  }
}
