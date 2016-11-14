(function() {
  'use strict';

  angular.module('common')
  .service('UserService', UserService);

  function UserService() {
    var service = this;

    this.saveUserData = function(userData) {
      service.userData = userData;
      console.log(service.userData);
    }

    this.getUserData = function() {
      return this.userData;
    }
  }

}());
