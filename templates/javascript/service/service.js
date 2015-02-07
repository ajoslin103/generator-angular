'use strict';

(function () {

	function service () {
		// AngularJS will instantiate a singleton by calling "new" on this function
	}

	/**
	 * @ngdoc service
	 * @name <%= scriptAppName %>.<%= cameledName %>
	 * @description
	 * # <%= cameledName %>
	 * Service in the <%= scriptAppName %>.
	 */
	angular.module('<%= scriptAppName %>')
	  .service('<%= cameledName %>', service);

})();

