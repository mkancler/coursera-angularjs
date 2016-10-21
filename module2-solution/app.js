(function() {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;

    toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buy = function(index) {
      console.log('Index: ', index);
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var shoppingService = this;
    var toBuyItems = [{
        name: "cookies",
        quantity: 10
      }, {
        name: "bags of chips",
        quantity: 2
      }, {
        name: "bottles of wine",
        quantity: 15
      }, {
        name: "batteries",
        quantity: 5
      }, {
        name: "angularJs book",
        quantity: 1
      }
    ];

    var boughtItems = [];

    shoppingService.buyItem = function(index) {
      boughtItems.push(toBuyItems.splice(index,1)[0]);
    };

    shoppingService.getToBuyItems = function() {
      return toBuyItems;
    };

    shoppingService.getAlreadyBoughtItems = function() {
      return boughtItems;
    };
  }
})();
