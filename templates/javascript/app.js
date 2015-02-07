'use strict';

(function () {

  /**
   * @ngdoc overview
   * @name <%= scriptAppName %>
   * @description
   * # <%= scriptAppName %>
   *
   * Main module of the application.
   */
  angular
    .module('<%= scriptAppName %>', [<%= angularModules %>]);

  <% if (ngRoute) { %>
  function routing ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular
    .module('<%= scriptAppName %>')
    .config(routing);
  <% } %>

})();
