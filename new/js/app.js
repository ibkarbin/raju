'use strict'

var App = angular.module('Drag_app', ['as.sortable']);

App.controller('MainCtrl', function ($scope,$q, initialize,WebService ) {
  	
	$scope.sections1 = [{'name': 'section1'},{'name': 'section2'}];
    //$scope.sections1 = [];
    
	$scope.sections2 = [{'name': 'section1'},{'name': 'section2'},{'name': 'section3'}];
    
	$scope.boards = [ { 'name':'board-1','sections':$scope.sections1},
						{'name':'board-2','sections':$scope.sections2},
						{'name':'board-3','sections':$scope.sections1}];
   
  var i;
  $scope.itemsList = {
    items1: [],
    items2: [],
	items3: [],
	control:[ 
			  {'id':1},
			  {'id':2},
			  {'id':3},
			  {'id':4},
			  
			],
	control_1:[ 
	  {'id':1},
	  
	]
  };
   
  // angular.copy($scope.itemsList2, $scope.itemsList);
    $scope.itemsList2 = angular.copy($scope.itemsList);
  // $scope.$watchCollection('itemsList.control', function(newValue, oldValue) {
		// // if( newValue.length == oldValue.length ){
			// // $scope.copy = newValue;
		// // }
  // });
  
  
  for (i = 0; i <= 10; i += 1) {
    $scope.itemsList.items1.push({'Id': i, 'Label': 'Item ' + i});
  }

  for (i = 0; i <= 2; i += 1) {
    $scope.itemsList.items2.push({'Id': i, 'Label': 'Item 2_' + i});
  }
  for (i = 0; i <= 4; i += 1) {
    $scope.itemsList.items3.push({'Id': i, 'Label': 'control ' + i});
  }
  
 
  $scope.sortableOptions = {
    //containment: '#sortable-container',
    //restrict move across columns. move only within column.
    accept: function (sourceItemHandleScope, destSortableScope) {
		// alert(sourceItemHandleScope.itemScope.sortableScope.$id);
		// alert(destSortableScope.$id);
      //return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
	  //alert(destScope);
	  return true;
    },
	dragStart : function (event) {//Do what you want
		myScroll.refresh();
		myScroll.disable();

	},
	dragEnd : function(event){
		myScroll.enable()
		myScroll.refresh();
	}
  };
  
 $scope.Sort_control = {
    
    accept: function (sourceItemHandleScope, destSortableScope) {
		
	  return true;
    },
	dragStart : function (event) {//Do what you want
		popScroll.refresh();
		popScroll.disable();
		
	},
	dragEnd : function(event){
		popScroll.enable()
		popScroll.refresh();
		
	}
  };
  
  $scope.contol_list = {
    
    accept: function (sourceItemHandleScope, destSortableScope) {
		
	  return true;
    },
	dragStart : function (event) {//Do what you want
		popScroll.refresh();
		popScroll.disable();
		
	},
	dragEnd : function(event){
		popScroll.enable()
		popScroll.refresh();
		
	},itemMoved: function (eventObj) {
		//alert('d');
		
		$scope.itemsList.control = angular.copy($scope.itemsList2.control);
	}
  };
  
  
  /*  Boards 
  ================================================*/
  
    $scope.next_board = function(){
		//myScroll.goToPage(1, 0, 1000);
		myScroll.prev(); 
	}
	$scope.prev_board = function(){
		myScroll.next();
		
	}
	
	 
	
	
	/* COMMON */
	$scope.set_scroll = function(){
		
		if( $scope.boards.length == 1 ){
			$scope.right_angle_status = false;
			
		}else{
			$scope.right_angle_status = true;
		
		}
		
      
	}
	$scope.set_scroll();
    
	$scope.add_board = function (){
		var l = $scope.boards.length + 1;
			$scope.boards[0].sections.push({'name':'Board-'+ l});
		 
	}
	
	
	// scope.$apply(function(){
						
						
					// });
	$scope.selected_sec_id = 0;
    $scope.$watch('selected_sec_id', function(newValue, oldValue) {
		//alert(newValue);
		if(newValue == 0){
			$scope.left_angle_status = false;
		}else if( newValue == $scope.boards.length -1 ){
			$scope.right_angle_status = false;
		}else{
			$scope.left_angle_status = true;
			$scope.right_angle_status = true;
		}
	 });	
	 
	$scope.click_card = function(index){
		// alert(index);
		 setTimeout(function(){ 
			popScroll.refresh();
			popScroll.goToPage(index, 0, 0);
		}, 200);
		
	} 
	 
});
