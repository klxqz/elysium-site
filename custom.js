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
});