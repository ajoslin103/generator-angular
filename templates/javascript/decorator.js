'use strict';

(function () {

	function decorator ($provide) {
		$provide.decorator('<%= cameledName %>', function ($delegate) {
			// decorate the $delegate
			return $delegate;
		});
	}

	/**
	 * @ngdoc function
	 * @name <%= scriptAppName %>.decorator:<%= classedName %>
	 * @description
	 * # <%= classedName %>
	 * Decorator of the <%= scriptAppName %>
	 */
	angular.module('<%= scriptAppName %>')
		.config(decorator);

})();
