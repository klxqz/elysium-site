(function($) {
    "use strict";
    $.elysiumSite = {
        options: {},
        init: function(options) {
            this.options = options;

            this.initMain();
            this.initTagCanvas();
            this.initUniform();
            this.initCartScroll();
            this.initUpScroll();
            this.initPluso();
            this.initBxSliders();
        },
        initMain: function() {


        },
        initBxSliders: function() {
            if (this.options.photo_block_slider) {
                $('#photos_block_left .view-thumbs').bxSlider({
                    randomStart: true,
                    mode: 'fade',
                    auto: true,
                    pager: false,
                    controls: false,
                    slideMargin: 30,
                    slideWidth: 300,
                    infiniteLoop: true,
                    moveSlides: 1,
                    nextText: '',
                    prevText: ''
                });
            }
            if (this.options.news_block_slider) {
                $('#news_block_left .posts').bxSlider({
                    mode: 'fade',
                    auto: true,
                    pager: false,
                    controls: false,
                    slideMargin: 30,
                    infiniteLoop: true,
                    moveSlides: 1,
                    nextText: '',
                    prevText: ''
                });
            }
        },
        initCartScroll: function() {
            if (!this.options.cartscroll) {
                return false;
            }
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 305) {
                    if (!$("#header_user").hasClass('empty')) {
                        $("#header_user").addClass("fixed");
                    }
                }
                else if ($(this).scrollTop() < 300) {
                    $("#header_user").removeClass("fixed");
                }
            });
        },
        initUpScroll: function() {
            if (!this.options.upscroll) {
                return false;
            }
            $(window).scroll(function() {
                var back = $("#scrollUp");
                if ($(this).scrollTop() > 100) {
                    back.fadeIn();
                } else {
                    back.fadeOut();
                }
            });
            $('#scrollUp').click(function() {
                $('body,html').animate({scrollTop: 0}, 800);
                return false;
            });
        },
        initUniform: function() {
            try {
                $("input:not([type=submit]),select").uniform();
            } catch (e) {
            }

        },
        initTagCanvas: function() {
            if (!this.options.tagcanvas) {
                return false;
            }
            if ($('#tag-cloud-canvas #canvas').tagcanvas({
                textColour: $('#tag-cloud a').css('color'),
                outlineColour: '#000',
                outlineMethod: "colour",
                outlineThickness: 1,
                reverse: true,
                hideTags: true,
                depth: 0.8,
                maxSpeed: 0.05
            }, 'tag-cloud')) {
                $('#tag-cloud-canvas').show();
            }
        },
        initPluso: function() {

            if (window.pluso)
                if (typeof window.pluso.start == "function")
                    return;
            if (window.ifpluso == undefined) {
                window.ifpluso = 1;
                var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
                s.type = 'text/javascript';
                s.charset = 'UTF-8';
                s.async = true;
                s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
                var h = d[g]('body')[0];
                h.appendChild(s);
            }

        }
    };
})(jQuery);
var responsiveflagMenu = false;

function menuChange(status) {
    if (status == 'enable') {
        $('#menu-wrap').removeClass('desktop').addClass('mobile').find('#menu-trigger').show();
        $(' #menu-custom').removeAttr('style');
        $('#menu-trigger i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
        $('.mobile #menu-trigger').on('click touchstart', function() {
            var catUl = $(this).next('ul#menu-custom');
            var anotherFirst = $('.header-button').find('ul');
            var anotherSecond = $('#header').find('#cart_block');
            if (anotherFirst.is(':visible')) {
                anotherFirst.slideUp(), $('.header-button').find('.icon_wrapp').removeClass('active')
            }
            if (anotherSecond.is(':visible')) {
                anotherSecond.slideUp();
                $('#header_user').removeClass('close-cart')
            }
            if (catUl.is(':hidden')) {
                catUl.slideDown(), $(this).find('i').removeClass('icon-plus-sign-alt').addClass('icon-minus-sign-alt')
            } else {
                catUl.slideUp(), $(this).find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
            }
            return false
        })
        $('#menu-wrap.mobile #menu-custom').on('click touchstart', function(e) {
            e.stopPropagation();
        });
        $('.main-mobile-menu ul ul').addClass('menu-mobile-2');
        $('#menu-custom ul ').addClass('menu-mobile-2');
        $('#menu-custom  li').has('.menu-mobile-2').prepend('<i class="open-mobile-2 icon-plus"></i>');
        $("#menu-custom   .open-mobile-2").on('click touchstart', function() {
            var catSubUl = $(this).next().next('.menu-mobile-2');
            if (catSubUl.is(':hidden')) {
                catSubUl.slideDown(), $(this).removeClass('icon-plus').addClass('icon-minus')
            } else {
                catSubUl.slideUp(), $(this).removeClass('icon-minus').addClass('icon-plus');
            }
            return false
        })
        $(document).on('click  touchstart', function() {
            $('.mobile #menu-trigger').find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt'), $('.mobile #menu-trigger').next('ul#menu-custom').slideUp();
        })
        return false;
    } else {
        $('#menu-wrap').removeClass('mobile').addClass('desktop'), $('#menu-custom  li').has('.menu-mobile-2').children('i').remove(), $('#menu-custom  li .menu-mobile-2, #menu-custom').removeAttr('style');
        $("#menu-custom   .open-mobile-2").off();
        $('#menu-wrap').find('#menu-trigger').off().hide();
    }
}

function menuChangeDo() {
    container_width = $('body').find('.container').width();
    if (container_width <= 970 && responsiveflagMenu == false) {
        menuChange('enable');
        responsiveflagMenu = true;
    } else if (container_width > 970) {
        menuChange('disable');
        responsiveflagMenu = false;
    }
}
$(document).ready(menuChangeDo);
$(window).resize(menuChangeDo);




//   OTHER SCRIPT
/*
 $(document).ready(function() {
 $('#product_comments_block_tab > div').last().addClass('last');
 $('#viewed-products_block_left ul li').last().addClass('last');
 });
 */
//   TOGGLE FOOTER
// footer-icons-define
var footer_icon_plus = 'icon-plus-sign';
var footer_icon_minus = 'icon-minus-sign';
// footer-change-script
var responsiveflagFooter = false;
function accordionFooter(status) {
    if (status == 'enable') {
        $('.modules .block h4').on('click', function() {
            $(this).toggleClass('active').parent().find('.toggle_content').stop().slideToggle('medium', function() {
                if ($(this).prev().hasClass('active')) {
                    $(this).prev().children('i').removeClass(footer_icon_plus).addClass(footer_icon_minus);
                }
                else {
                    $(this).prev().children('i').removeClass(footer_icon_minus).addClass(footer_icon_plus);
                }
            });
        })
        $('.modules').addClass('accordion').find('.toggle_content').slideUp('fast');
    } else {
        $('.modules h4').removeClass('active').off().parent().find('.toggle_content').removeAttr('style').slideDown('fast');
        $('.modules h4 i').removeClass(footer_icon_minus).addClass(footer_icon_plus);
        $('.modules').removeClass('accordion');
    }
}
function toDoFooter() {
    if ($(document).width() <= 767 && responsiveflagFooter == false) {
        accordionFooter('enable');
        responsiveflagFooter = true;
    }
    else if ($(document).width() >= 768) {
        accordionFooter('disable');
        responsiveflagFooter = false;
    }
}
$(document).ready(toDoFooter);
$(window).resize(toDoFooter);

//   TOGGLE PAGE PRODUCT (TAB)
// products-icons-define
var product_icon_plus = 'icon-plus-sign-alt';
var product_icon_minus = 'icon-minus-sign-alt';
var responsiveflagPage = false;
function accordionPage(status) {
    if (status == 'enable') {
        $('.page_product_box h3').on('click', function() {
            $(this).toggleClass('activeTab').parent().find('.toggle_content').stop().slideToggle('medium', function() {
                if ($(this).prev().hasClass('activeTab')) {
                    $(this).prev().children('i').removeClass(product_icon_minus).addClass(product_icon_plus);
                }
                else {
                    $(this).prev().children('i').removeClass(product_icon_plus).addClass(product_icon_minus);
                }
            });
        })
        $('#center_column .page_product_box').addClass('accordion').find('.toggle_content').slideDown('fast');
    } else {
        $('#center_column .page_product_box h3').removeClass('activeTab').off().parent().find('.toggle_content').removeAttr('style').slideDown('fast');
        $('.page_product_box h3 i').removeClass(product_icon_plus).addClass(product_icon_minus);
        $('#center_column .page_product_box').removeClass('accordion');
    }
}
function toDoPage() {
    if ($(document).width() <= 767 && responsiveflagPage == false) {
        accordionPage('enable');
        responsiveflagPage = true;

    }
    else if ($(document).width() >= 768) {
        accordionPage('disable');
        responsiveflagPage = false;
    }
}
$(document).ready(toDoPage);
$(window).resize(toDoPage);

//   TOGGLE COLUMNS
// columns-icons-define
var columns_icon_plus = 'icon-plus-sign';
var columns_icon_minus = 'icon-minus-sign';
// columns-change-script
var responsiveflag = false;
function accordion(status) {
    leftColumnBlocks = $('#left_column');
    if (status == 'enable') {
        $('#left_column').remove();
        $(leftColumnBlocks).insertAfter('#center_column').find('#categories_block_left ul.toggle_content').slideToggle('fast');
        if (typeof (sliderList) != 'undefined') {
            initSliders()
        }
        $('#right_column h4, #left_column h4').on('click', function() {
            $(this).toggleClass('active').parent().find('.toggle_content').stop().slideToggle('medium', function() {
                if ($(this).prev().hasClass('active')) {
                    $(this).prev().children('i').removeClass(columns_icon_plus).addClass(columns_icon_minus);
                }
                else {
                    $(this).prev().children('i').removeClass(columns_icon_minus).addClass(columns_icon_plus);
                }
            });
        })
        $('#right_column, #left_column').addClass('accordion').find('.toggle_content').slideUp('fast');
    } else {
        $('#left_column').remove();
        $(leftColumnBlocks).insertBefore('#center_column');
        if (typeof (sliderList) != 'undefined') {
            initSliders()
        }
        $('#right_column h4, #left_column h4').removeClass('active').off().parent().find('.toggle_content').removeAttr('style').slideDown('fast');
        $('#right_column h4 i, #left_column h4 i').removeClass(columns_icon_minus).addClass(columns_icon_plus);
        $('#left_column, #right_column').removeClass('accordion');
    }
}
function toDo() {
    if ($(document).width() <= 767 && responsiveflag == false) {
        accordion('enable');
        responsiveflag = true;
        if (typeof (categoryReload) != "undefined") {
            categoryReload()
        }
    }
    else if ($(document).width() >= 768) {
        accordion('disable');
        responsiveflag = false;
        if (typeof (categoryReload) != "undefined") {
            categoryReload()
        }
    }
}
$(document).ready(toDo);
$(window).resize(toDo);
/*********************************************************** top menu dropdown **********************************/
$(document).ready(function() {
    $('.header-button').on('click touchstart', function() {

        var subUl = $(this).find('ul');
        var anyAther = $('#header').find('#cart_block');
        var anyAnother1 = $('#menu-wrap.mobile #menu-custom'); // close other menus if opened
        if (anyAther.is(':visible')) {
            anyAther.slideUp(),
                    $('#header_user').removeClass('close-cart')
        }
        if (anyAnother1.is(':visible')) {
            anyAnother1.slideUp(),
                    $('.mobile #menu-trigger').find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
        } // close ather menus if opened
        if (subUl.is(':hidden')) {
            subUl.slideDown(),
                    $(this).find('.icon_wrapp').addClass('active')
        }
        else {
            subUl.slideUp(),
                    $(this).find('.icon_wrapp').removeClass('active')
        }
        $('.header-button').not(this).find('ul').slideUp(),
                $('.header-button').not(this).find('.icon_wrapp').removeClass('active');
        return false
    });
    /*********************************************************** header-cart menu dropdown **********************************/
    if ((typeof ajaxcart_allowed !== "undefined") && ajaxcart_allowed == 1) {
        $('#header_user').on('click touchstart', function() {
            var cartContent = $('#header').find('#cart_block');
            var anyAnother = $('.header-button').find('ul'); // close other menus if opened
            var anyAnother1 = $('#menu-wrap.mobile #menu-custom'); // close other menus if opened
            if (anyAnother.is(':visible')) {
                anyAnother.slideUp();
                $('.header-button').find('.icon_wrapp').removeClass('active')
            }
            if (anyAnother1.is(':visible')) {
                anyAnother1.slideUp(),
                        $('.mobile #menu-trigger').find('i').removeClass('icon-minus-sign-alt').addClass('icon-plus-sign-alt');
            }
            if (cartContent.is(':hidden')) {
                cartContent.slideDown(),
                        $(this).addClass('close-cart')
            }
            else {
                cartContent.slideUp(),
                        $(this).removeClass('close-cart')
            }
            return false
        });
    }
    $('#header #cart_block, .header-button ul, div.alert_cart a').on('click touchstart', function(e) {
        e.stopPropagation();
    });
    $(document).on('click touchstart', function() {
        $('#header').find('#cart_block').slideUp(),
                $('.header-button').find('ul').slideUp(),
                $('#header_user').removeClass('close-cart'),
                $('.header-button').find('.icon_wrapp').removeClass('active')
    });
});
/*
 $(document).ready(function() {
 $('#order .addresses .address,#order-opc .addresses .address').removeAttr('style'),
 $('#categories_block_left ul li a').prepend('<i class="icon-caret-right"></i>');
 })
 */



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








});


/****************************************************************/




;
