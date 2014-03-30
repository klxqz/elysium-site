$(document).ready(function () {

    // scroll-dependent animations
    $(window).scroll(function() {    
      	if ( $(this).scrollTop()>=35 ) {
            if (!$("#cart").hasClass('empty')) {
              	$("#cart").addClass( "fixed" );
            }
    	}
    	else if ( $(this).scrollTop()<30 ) {
    		$("#cart").removeClass( "fixed" );
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