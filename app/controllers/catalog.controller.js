class CatalogCtrl {
  constructor(catalogSvc) {
    this.cameraList = catalogSvc;
  }

  cameras() {
    return this.cameraList.getCameras();
  }
};

CatalogCtrl.$inject = ['catalogService'];

export default CatalogCtrl;
