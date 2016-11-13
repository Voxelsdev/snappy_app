class OrderService {
  constructor($http) {
    this.$http = $http;
  }

  orders() {
    this.$http.get('/api/orders')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.erorr(err);
      return err;
    })
  }
}

OrderService.$inject = ['$http'];

export default OrderService;
