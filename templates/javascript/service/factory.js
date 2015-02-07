'use strict';

(function () {

  function factory () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  }

  /**
  * @ngdoc service
  * @name <%= scriptAppName %>.<%= cameledName %>
  * @description
  * # <%= cameledName %>
  * Factory in the <%= scriptAppName %>.
  */
  angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', factory);

})();

