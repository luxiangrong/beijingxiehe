"use strict";;
(function($) {
    $(document).ready(function() {

    	//首页banner
        $('#banner-slick').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            fade: true,
            // autoplay: true
        });

        //首页新闻切换
        var newsHandler;
        var buildNewsSlider = function(){
        	var newsItemHeight = $(".news").find(".slide li").height();
	        var newsItemCount = $(".news").find(".slide li").length;
	        $(".news").find(".slide").height(newsItemHeight);
	        newsHandler = window.setInterval(function() {
	            var $newsElement = $('.news');
	            var current = $newsElement.data('current') || 0;
	            current++;
	            current = current % newsItemCount;
	            $newsElement.find(".slide li").css("top", -newsItemHeight * current + "px");
	            $newsElement.data('current', current);
	        }, 3000);
        }
        buildNewsSlider();

        $('.col-side').height(Math.max($('.col-side').height(), $('.col-main').height()));
        $('.col-main').height(Math.max($('.col-side').height(), $('.col-main').height()));

    });
})(jQuery);
