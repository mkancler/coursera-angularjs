(function () {
  angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowDownCtrl = this;

    narrowDownCtrl.searchTerm = "";
    narrowDownCtrl.found = [];
    narrowDownCtrl.nothingFound = false;

    narrowDownCtrl.getMatchedMenuItems = function() {
      if (narrowDownCtrl.searchTerm === "") {
        narrowDownCtrl.nothingFound = true;
        narrowDownCtrl.found = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(narrowDownCtrl.searchTerm);
      promise.then( function(result) {
        narrowDownCtrl.nothingFound = result.length===0;
        narrowDownCtrl.found = result;
      });
    }

    narrowDownCtrl.removeItem = function(index) {
      narrowDownCtrl.found.splice(index,1);
    }
  }

  function FoundItems() {
    return {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<found',
        removeItem: '&onRemove',
        itemsNumber: '@itemsNumber'
      }
    };
  }

  MenuSearchService.$inject = ['$http', '$filter'];
  function MenuSearchService($http, $filter) {
    var searchService = this;

    searchService.getMatchedMenuItems = function (searchTerm) {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then( function(result) {
        //var foundItems = $filter('filter')(result.data.menu_items, {description: searchTerm});
        var foundItems = filter(result.data.menu_items, searchTerm);
        return foundItems;
      });

      function filter(menuItems, searchTerm) {
        var filtered = [];
        angular.forEach(menuItems, function(element) {
          if (element.description.indexOf(searchTerm) >= 0) {
            filtered.push(element);
          }
        });
        return filtered;
      }
    };
  }

})();
