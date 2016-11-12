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

    const newCam = camera;

    newCam.quantity = 1;

    this.wantedCameras.push(newCam);
  }

  getWantedCameras() {
    return this.wantedCameras;
  }
}

export default CameraService;
