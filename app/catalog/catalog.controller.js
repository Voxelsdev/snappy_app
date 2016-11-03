class CatalogCtrl {
  constructor() {
    this.cameras = [{
      id: 1,
      name: 'Nikon D3100 DSLR',
      type: 'Nikon',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
    }, {
      id: 2,
      name: 'Canon EOS 70D',
      type: 'Canon',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
    }, {
      id: 3,
      name: 'Nikon D810A',
      type: 'Nikon',
      image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 3,
      price: 3796.95,
      onSale: true
    }];
  }
}

export default CatalogCtrl;
