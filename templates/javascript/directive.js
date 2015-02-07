'use strict';

(function () {

	function directive () {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				element.text('this is the <%= cameledName %> directive');
			}
		};
	}

	/**
	* @ngdoc directive
	* @name <%= scriptAppName %>.directive:<%= cameledName %>
	* @description
	* # <%= cameledName %>
	*/
	angular.module('<%= scriptAppName %>')
		.directive('<%= cameledName %>', directive);

})();

