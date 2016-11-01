(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    console.log("ItemsCtrl.items: ", items);
    var itemsCtrl = this;
    itemsCtrl.items = items;
  }

}());
