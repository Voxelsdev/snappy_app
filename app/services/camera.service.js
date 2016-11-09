class CameraService {
  constructor() {
    this.subtotal = 0;
    this.wantedCameras = [];
  }

  addToWanted (camera) {
    this.subtotal += camera.price;
    for (let wantedCamera of this.wantedCameras) {
      if (wantedCamera.name === camera.name) {
        wantedCamera.quantity++;
        return;
      }
    }

    this.wantedCameras.push({
      name: camera.name,
      price: camera.price,
      quantity: 1,
    });
  }

  getWantedCameras() {
    return this.wantedCameras;
  }
}

export default CameraService;
