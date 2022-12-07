$(function(){
	$('body').on('scroll touchmove mousewheel', e => {
    $('body').scrollTop(0);
});

	$("body").click(function(){
		$(".letter_image:nth-child(1)").animate({left:"800px", top:"40"}, 300)
		$(".letter_image:nth-child(2)").animate({left:"100px", top:"30"}, 300)
		$(".letter_image:nth-child(3)").animate({left:"700px", top:"320"}, 300)
		$(".letter_image:nth-child(4)").animate({left:"450", top:"100"}, 300)
		$(".letter_image:nth-child(5)").animate({left:"100px", top:"180"}, 300)
		$(".letter_image:nth-child(6)").animate({left:"140px", top:"300"}, 300)
	})
})