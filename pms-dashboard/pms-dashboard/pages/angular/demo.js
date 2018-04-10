var demo = angular.module('Demo', ['ngMaterial', 'ngMdMultiLevelMenu', 'ngRoute', 'hc.marked']);

demo.config(['menuProvider', function(menuProvider) {
   menuProvider.items([
{
	   id: 'item-1',
	   label: 'Approvals',
       icon: 'google-plus',
       link:'main',
       items: [
    	   {
	         label: 'CDM',
	        // link: 'item-3-1',
	         icon: 'twitter',
	         items: [
	        	 {
		            label: 'Milestone',
		            link: 'milestones',
		           // icon: 'windows'
	        	 }, 
	        	 {
		            label: 'Risks',
		            link: 'risks',
		           // icon: 'windows'
	        	 }
	        	 , 
	        	 {
		            label: 'Issues',
		            link: 'issues',
		          //  icon: 'windows'
	        	 }
	        	 , 
	        	 {
		            label: 'Resources',
		            link: 'users',
		           // icon: 'windows'
	        	 }
	        	 ]
    	   },
    	   {
	         label: 'Flexi Migration',
	         icon: 'github-box',
	         items: [
	        	 {
			            label: 'Milestone',
			            link: 'item-3-2-1',
			           // icon: 'windows'
		        	 }, 
		        	 {
			            label: 'Risks',
			           // icon: 'windows'
		        	 }
		        	 , 
		        	 {
			            label: 'Issues',
			          //  icon: 'windows'
		        	 }
		        	 , 
		        	 {
			            label: 'Resources',
			           // icon: 'windows'
		        	 }
	        	 ]
	      }]
   }]);
}]);

demo.config(['markedProvider', function(markedProvider) {
   markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function(code, language) {
         if (!language) {
            language = 'bash';
         } else if (language == 'html') {
            language = 'markup';
         }
         return Prism.highlight(code, Prism.languages[language]);
      }
   });
}]);

demo.controller('Demo', ['$scope', '$menu', '$mdSidenav', function($scope, $menu, $mdSidenav) {
   $scope.breadcrumb = $menu.breadcrumb();
   $scope.style = $menu.style();
   $scope.count = $menu.get('item-1').badge;

   $scope.toggle = function() {
      $mdSidenav('left').toggle();
      $scope.icon = $scope.icon == 'menu' ? 'close' : 'menu';
   };

   $scope.test = function() {
      var item = $menu.get('item-4');
      if (item.items) {
         item.items = undefined;
      } else {
         item.items = [{
            label: 'Item 4.1',
            link: 'item-4-1',
            icon: 'favorite'
         }, {
            label: 'Item 4.2',
            link: 'item-4-2',
            icon: 'grade'
         }]
      }
   };

   $menu.callback(function() {
      console.log('ok');
      $scope.toggle();
   });

   $mdSidenav('left', true).then(function(instance) {
      $scope.icon = 'menu';
      instance.onClose(function () {
         $scope.icon = 'menu';
      });
   });

   $scope.$watch('count', function(value) {
      $menu.get('item-1').badge = $scope.count;
      //$menu.get('item-1').label = 'Item 1: ' + $scope.count;
   });

   $scope.$watch('breadcrumb', function(value) {
      $menu.breadcrumb(value);
   });

   $scope.$watch('style', function(value) {
      $menu.style(value);
   });
}]);
