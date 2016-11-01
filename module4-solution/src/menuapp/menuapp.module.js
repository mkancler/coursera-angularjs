(function() {
  'use strict';

  angular.module('MenuApp', ['data', 'ui.router'])
  .controller('TestController', TestController);

  TestController.$inject = ['MenuDataService'];
  function TestController(MenuDataService) {
    var testCtrl = this;

    testCtrl.menuItems = [];
    MenuDataService.getAllCategories().then(function(data) {
      testCtrl.menuItems = data;
    });
  }
}());
