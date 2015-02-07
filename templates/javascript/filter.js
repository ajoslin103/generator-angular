'use strict';

(function () {

	function filter () {
		return function (input) {
			return '<%= cameledName %> filter: ' + input;
		};
	}

	/**
	* @ngdoc filter
	* @name <%= scriptAppName %>.filter:<%= cameledName %>
	* @function
	* @description
	* # <%= cameledName %>
	* Filter in the <%= scriptAppName %>.
	*/
	angular.module('<%= scriptAppName %>')
		.filter('<%= cameledName %>', filter);

})();

