console.log("app.js")
define(['angular'], function (angular) {
  console.log('angular.js file loaded');

  var app = angular.module('MyApp', []);

  app.init = function () {
    console.log('inicializacion de la aplicacion');
    angular.bootstrap(document, ['MyApp']);
  };
  
  return app;
});