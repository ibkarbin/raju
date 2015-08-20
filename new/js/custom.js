$(document).ready(function(){
	
 $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	 $(".test").click(function(event) {
        event.preventDefault();
        $('.test').removeClass("A-active-tab");
        $(this).addClass("A-active-tab");
        var tab = $(this).attr("href");
        $('.tabz').removeClass('tab-active');
		$(".tabz").addClass('tab-hide');
		$(tab).removeClass('tab-hide').addClass('tab-active');
    });
	
});