$(document).ready(function() {
    $(".think").each(function () {
        $(this).css({
            left: Math.random() * ($("body").width() - $(this).width()),
            top: Math.random() * ($("body").height()) - $(this).height()
        });
    });

    $(".letter_back").hide();

    $(".letter_wrap").click(function(){
    	$(".letter_front").hide();
    	$(".letter_back").show();
    	$(".letter_wrap").css("z-index", "3");
	    	// $(".letter_wrap").click(function(){
	    	// 	$(".letter_wrap").css("z-index", "0");
		    // 	$(".letter_front").show();
		    // 	$(".letter_back").hide();
		    // });
    });

    $(".think").click(function(){
    	$(this).css("color", "black")
    })

}); 
