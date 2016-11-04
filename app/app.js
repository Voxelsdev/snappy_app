import angular from 'angular';
import CatalogCtrl from './controllers/catalog.controller';
import CameraCtrl from './controllers/camera.controller';

import ngAnimate from 'angular-animate';

angular.module('snapShop', ['ngAnimate'])
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CameraCtrl', CameraCtrl);
