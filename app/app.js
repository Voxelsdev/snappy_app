import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import CatalogCtrl from './catalog/catalog.controller';
import CameraCtrl from './cameras/camera.controller';

angular.module('myApp', [angularMaterialize])
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CameraCtrl', CameraCtrl);
