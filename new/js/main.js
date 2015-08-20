
document.addEventListener('DOMContentLoaded', loaded, false);

var myScroll;
var popScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', {
		scrollX: true,
		scrollY: true,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		// keyBindings: true,
		click: true,
		eventPassthrough: true
		/*scrollbars: true,
		// mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		onBeforeScrollStart : function(e) { 
			e.stopPropagation();
        }*/
		
	});
	myScroll.on('scrollEnd', function () {
		//addActiveClass();
		
		var currentSection = myScroll.currentPage.pageX;
		//alert(currentSection);
		var scope = angular.element(document.body).scope();
		
		scope.$apply(function(){
			scope.selected_sec_id =  currentSection;
		});
	
	});
	
	popScroll = new IScroll('#pop-up-slider', {
		scrollX: true,
		scrollY: true,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		// keyBindings: true,
		click: true,
		eventPassthrough: true
	});
	popScroll.on('scrollEnd', function () {
		//addActiveClass();
		
		var currentSection = popScroll.currentPage.pageX;
	
		/*var scope = angular.element(document.body).scope();
		
		scope.$apply(function(){
			scope.selected_sec_id =  currentSection;
		});*/
	
	});
	
	
	
}



$('document').ready(function(){
	
	// $('.icon-arrow').click(function(){
		// // $(this).find().parent('.box').css({'display':'none'})
		
		// // $(this ).closest( ".box" ).toggleClass( "open" );
		
		// var status = $(this ).closest( ".box" ).hasClass( "close1" );
		// $('.box').addClass('close1');
		
		// if(status){
			// $(this ).closest( ".box" ).removeClass( "close1" );
		// }else{
			// $(this ).closest( ".box" ).addClass( "close1" );
		// }
	// })
	
	
	setTimeout(function(){ 
		//myScroll.refresh();
			
	}, 1000);
	
	
	
});