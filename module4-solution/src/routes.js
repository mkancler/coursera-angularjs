(function() {
  'use strict';

  angular.module("MenuApp")
  .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouterConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/main-categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/item-list/{category}',
      templateUrl: 'src/menuapp/templates/main-items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
  }

}());
