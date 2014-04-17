$(document).ready(function () {

    // scroll-dependent animations
    $(window).scroll(function() {    
      	if ( $(this).scrollTop()>=305 ) {
            if (!$("#header_user").hasClass('empty')) {
              	$("#header_user").addClass( "fixed" );
            }
    	}
    	else if ( $(this).scrollTop()<300 ) {
    		$("#header_user").removeClass( "fixed" );
    	}    
    });
  
});


jQuery(document).ready(function() {
    $(".currencies_ul a").click(function() {
        var url = location.href;
        if (url.indexOf('?') == -1) {
            url += '?';
        } else {
            url += '&';
        }
        location.href = url + 'currency=' + $(this).data('value');
        return false;
    });
    
    /************bx-slider***************/
    $('.bxslider').bxSlider({
        pager: false,
        controls: true,
        slideMargin: 30,
        minSlides: 1,
        maxSlides: 6,
        slideWidth: 130,
        infiniteLoop: false,
        moveSlides: 1,
        nextText: '',
        prevText: ''
    });
    
     $('#product-gallery').bxSlider({
        pager: false,
        controls: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 80,
        infiniteLoop: false,
        moveSlides: 1,
        nextText: '',
        prevText: ''
    });
    
    
    
    
});