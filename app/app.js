import angular from 'angular';
import CatalogCtrl from './controllers/catalog.controller';

import CameraCtrl from './controllers/camera.controller';
import CameraService from './services/camera.service';

import AuthCtrl from './controllers/auth.controller';
import AuthService from './services/auth.service';

import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';

angular.module('snapShop', ['ngAnimate', uiRouter])
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CameraCtrl', CameraCtrl)
  .service('cameraService', CameraService)
  .controller('AuthCtrl', AuthCtrl)
  .service('authService', AuthService)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('catalog', {
        url: '',
        templateUrl: 'views/catalog.html',
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/catalog.html',
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
      });
  }]);
