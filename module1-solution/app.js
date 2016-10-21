(function () {
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope) {
    var messages = ['Please enter data first', 'Enjoy!', 'Too much!'];
    $scope.lunchList = "";
    $scope.message = {};

    $scope.checkLunchList = function() {
      var tokens = $scope.lunchList.split(',');
      var trimmedList = reduce(tokens, function(element, index) {
        return element.trim();
      });
      $scope.message = getMessage(trimmedList.length);
    };

    function reduce(arr, callback) {
      var reduced = [];
      for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i],i)) {
          reduced.push(arr[i]);
        }
      }
      return reduced;
    };

    function getMessage(lunchListlength) {
      var message = {};
      if (lunchListlength <= 0) {
        message["messageText"] = messages[0];
        message["messageClass"] = "red";
      } else if (lunchListlength <= 3) {
        message["messageText"] = messages[1];
        message["messageClass"] = "green";
      } else {
        message["messageText"] = messages[2];
        message["messageClass"] = "green";
      }
      return message;
    };
  };
})();
