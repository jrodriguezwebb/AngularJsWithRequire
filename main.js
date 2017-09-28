console.log("main.js");

require.config({
    //required to use requirejs on plunker
    //baseUrl: document.location.href,    
    //using cdn urls. You may decide to replace them with local ones
    paths: {
        //jquery: "https://code.jquery.com/jquery-1.12.4.min",
        'angular': 
          [
            //'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min',
            './lib/angular.min'
            //'https://code.angularjs.org/1.3.5/angular',
          //If the CDN location fails, load from this location
          
          ]
    },
    shim: {
      angular: {
          exports : 'angular'
      }
    }
});

//requirejs dependencies replace script loading order
//for angular dependencies to work we only need the files
//to load as they are applied on instantiation.
// Eg: changing services and controllers file order doesn't
//   create any errors even when controllers depend on services
//   they are only instantiated by DI after angular has been 
//   bootstrapped
require(['app', './app/services/services', './app/controllers/controllers'], function (app) {
  console.log('app.js, services.js and controllers.js files loaded');
  app.init();
});