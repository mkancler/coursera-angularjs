(function() {
  'use strict';

  angular.module("public")
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'MenuService'];
  function MyInfoController(UserService, MenuService) {
    var myInfoCtrl = this;
    myInfoCtrl.userPresent = false;

    myInfoCtrl.getUser = function() {
      myInfoCtrl.user = UserService.getUserData();
      console.log(myInfoCtrl.user);
      if (myInfoCtrl.user) {
        myInfoCtrl.userPresent = true;
      }
      console.log(myInfoCtrl.user);
    }

    myInfoCtrl.getUser();
  }

}());
