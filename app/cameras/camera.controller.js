class CameraCtrl {
  constructor() {
    this.subtotal = 0;
    this.wantedCameras = [];

    this.addToWanted = (camera) => {
      this.subtotal += camera.price;
      for (let wantedCamera of this.wantedCameras) {
        if (wantedCamera.name === camera.name) {
          wantedCamera.quantity++;
          return true;
        }
      }

      this.wantedCameras.push({
        name: camera.name,
        price: camera.price,
        quantity: 1,
      });
    }
  }
}

export default CameraCtrl;
