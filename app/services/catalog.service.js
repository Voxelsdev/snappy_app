class CatalogService {
  constructor($http) {
    this.$http = $http;
    this.cameras = [];
    this.$http.get('/api/cameras')
    .then((cams) => {
      this.cameras = cams.data;
    });
  }

  getCameras() {
    return this.cameras;
  }
}

CatalogService.$inject = ['$http'];

export default CatalogService;
