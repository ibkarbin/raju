/* App.directive('fullHeight', function() {

    return function (scope, element, attrs) {
        restrict: 'A',
		$timeout(function(){
			element.height($(window).height());
		});  
	}

});*/ 

/*App.directive('fullHeight', function ($window) {

    return {
        restrict: 'AEC',

        link: function (scope, elem, attrs) {

            var winHeight = $window.innerHeight;

           

            elem.css('height', winHeight + 'px');
        }
    };
});*/

App.directive('fullHeight', function() {
	
	function link(scope, element, attrs) {
		
		
	   var argHeight =  attrs.fullHeight ? attrs.fullHeight : 0;
		scope.$watch(function(){ 
			
			element.height( $(window).height() + parseInt(argHeight) );
			 
		});
		
		
	}
    return {
      link: link
    };
});

App.directive('master',function () { 
    function link( scope, element, attrs ) { 
     
	 scope.$watch(function(){ 
        scope.slide_style = { 
            width:element[0].offsetWidth+'px' //same with width
          };
		 
		 scope.scroller_style = {
			 width: (element[0].offsetWidth * scope.boards.length )+'px'
		 } 
	    
		/* if (typeof myScroll !== 'undefined') {
		   setTimeout(function(){ 
				myScroll.refresh();
					
			}, 1000);
		 }
		 */
		 
      
	  });
	   
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 

App.directive('popup',function () { 
    function link( scope, element, attrs ) { 
     
	 scope.$watch(function(){ 
        scope.pop_slide_style = { 
            width:element[0].offsetWidth+'px' //same with width
          };
		 
		 scope.pop_scroller_style = {
			 width: (element[0].offsetWidth * scope.itemsList.items1.length )+'px'
		 } 
	    
		/* if (typeof myScroll !== 'undefined') {
		   setTimeout(function(){ 
				myScroll.refresh();
					
			}, 1000);
		 }
		 */
		 
      
	  });
	   
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 

App.directive('secheight',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      scope.$watch(function(){ //watch any changes to our element
        
		container_el = element.closest( ".section-container" );
		container_width = container_el.height();

		close_count = container_el.children('.close_sec').length;
		open_count  = container_el.children('.open_sec').length
		
		sec_total = close_count + open_count;
		container_width = container_width - ((sec_total * 30) + 5 - 15 );
		
		//open_H = ( container_width - ( close_count * 3 )) / open_count ; 
		open_H = ( container_width - ( close_count * 1 )) / open_count ; 
		
		if (element.hasClass("close_sec")) {
           element.outerHeight('1px');
        } else {
           element.outerHeight(open_H + 'px');
        }
      
	  });
	   
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 

App.directive('secbutton',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      var flag = false;
	  
	 element.bind('click touchstart ', function(event) {
		 
		 if (!flag) {
			flag = true;
			setTimeout(function(){ flag = false; }, 500);
			// do something
			var section_el = element.closest( ".section" );
			section_el.toggleClass("open_sec");
			section_el.toggleClass("close_sec");
		 }

  
		 
		 
	    	scope.$apply();
	 });
	  
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 
App.directive('openpop',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      
	 element.bind('click', function() {
		
		 var pop_el = angular.element( "#pop-up" );
		 pop_el.slideDown("fast");
		
		
	     scope.$apply();
	 });
	  
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 
App.directive('popclose',function () { //declaration; identifier master
    function link(scope, element, attrs) { //scope we are in, element we are bound to, attrs of that element
      
	 element.bind('click', function() {
		
		 var pop_el = angular.element( "#pop-up" );
		 pop_el.slideUp("fast");
		 popScroll.refresh();
	     scope.$apply();
	 });
	  
		 
    }
      return {
        restrict: 'AE', //describes how we can assign an element to our directive in this case like <div master></div
        link: link // the function to link to our element
      };
}); 

App.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        // scope.getWindowDimensions = function () {
            // return {
                // 'h': w.height(),
                // 'w': w.width()
            // };
        // };
        // scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
           

        // }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})

/*
.directive('eleHoverAction', function() {
return {
    link: function (scope, elem, attrs) {
        var imgObj = elem.find('img');
        var upImg = attrs.eleUpImgSrc;
        var overImg = attrs.eleOverImgSrc;

        elem.bind('mouseover', function () {
            imgObj.attr("src", overImg);
            scope.$apply();
        });
        elem.bind('mouseout', function() {
            if (!elem.hasClass("active")) {
                imgObj.attr("src", upImg);
            }
            scope.$apply();
        });

        if (elem.hasClass("active")) {
            imgObj.attr("src", overImg);
        } else {
            imgObj.attr("src", upImg);
        }
    }
  };                
});*/
