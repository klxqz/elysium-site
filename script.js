$(document).ready(function () {
     //refreshProductImages();
    $('.product_quantity_up').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('rel');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        /*if (quantityAvailable > 0) {
            quantityAvailableT = quantityAvailable;
        } else {
            quantityAvailableT = 100000000;
        }*/
        quantityAvailableT = 100000000;
        if (!isNaN(currentVal) && currentVal < quantityAvailableT) {
            $('input[name=' + fieldName + ']').val(currentVal + 1).trigger('keyup');
        } else {
            $('input[name=' + fieldName + ']').val(quantityAvailableT);
        }
        return false;
    });
    $(".product_quantity_down").click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('rel');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name=' + fieldName + ']').val(currentVal - 1).trigger('keyup');
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
        return false;
    });
});;
