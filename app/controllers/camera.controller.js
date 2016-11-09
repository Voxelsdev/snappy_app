class CameraCtrl {
  constructor(cameraSvc) {
    this.cameraSvc = cameraSvc;
  }

  wantedCameras() {
    return this.cameraSvc.wantedCameras;
  }

  addCamera(camera) {
    this.cameraSvc.addToWanted(camera);
  }

  getSubtotal() {
    return this.cameraSvc.subtotal;
  }
}

CameraCtrl.$inject = ['cameraService'];

export default CameraCtrl;
