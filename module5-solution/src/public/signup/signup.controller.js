(function() {
  'use strict';

  angular.module("public")
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', 'MenuService'];
  function SignupController(UserService, MenuService) {
    var signupCtrl = this;

    signupCtrl.menutExistsError = false;
    signupCtrl.userSaved = false;

    signupCtrl.printUser = function() {
      console.log("User: ", this.user);
    }

    signupCtrl.saveUser = function() {
      MenuService.getMenuItem(signupCtrl.user.favoriteDish).then(
        function (data) {
          signupCtrl.menuExistsError = false;
          saveUserData(data);
        }, function (data) {
          signupCtrl.menuExistsError = true;
        });
    }

    function saveUserData(data) {
      signupCtrl.user.favoriteDishDetails = data;
      UserService.saveUserData(signupCtrl.user);
      signupCtrl.userSaved = true;
    }
  }

}());
