'use strict';

(function () {

	function controller ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	}

	/**
	 * @ngdoc function
	 * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
	 * @description
	 * # <%= classedName %>Ctrl
	 * Controller of the <%= scriptAppName %>
	 */
	angular.module('<%= scriptAppName %>')
		.controller('<%= classedName %>Ctrl', controller); 

})();
