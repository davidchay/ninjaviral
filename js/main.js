$(function(){
	/*efectos menu movil*/
	$('#menu-movil').on("click",function(event){
		$('.menu').removeClass('fadeOutLeft');
		$('#menu-list').css('display','inline');
		$('.menu').addClass('animated fadeInLeft');
    });
    $('#hidden-menu-movil').on("click",function(event){
    	//$('html,body').animate({scrollTop: $("#inicio").offset().top},'slow');
		$('.menu').removeClass('fadeInLeft');
		$('.menu').addClass('animated fadeOutLeft');
	});
});