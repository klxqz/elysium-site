/*
 * jQuery UI Multilevel Accordion v.1
 * Copyright (c) 2011 Pieter Pareit
 * http://www.scriptbreaker.com
 *
 */

//plugin definition
(function($) {
    $.fn.extend({
        //pass the options variable to the function
        accordion: function(options) {

            var defaults = {
                accordion: 'false',
                speed: 500,
                closedSign: 'icon-plus-sign',
                openedSign: 'icon-minus-sign'
            };

            // Extend our default options with those provided.
            var opts = $.extend(defaults, options);
            //Assign current element to variable, in this case is UL element
            var $this = $(this);

            //add a mark [+] to a multilevel menu
            $this.find("li").each(function() {
                if ($(this).find("ul").size() != 0) {
                    //add the multilevel sign next to the link
                    $(this).find("a:first").after('<i class="' + opts.closedSign + '"></i>');
                }
            });

            //open active level
            $this.find("li.selected").each(function() {
                $(this).parents("ul").slideDown(opts.speed);
                $(this).parents("ul").parent("li").find("i:first").addClass(opts.openedSign);
            });

            $this.find("li i").live('click',function() {
                if ($(this).parent().find("ul").size() != 0) {
                    if (opts.accordion) {
                        //Do nothing when the list is open
                        if (!$(this).parent().find("ul").is(':visible')) {
                            parents = $(this).parent().parents("ul");
                            visible = $this.find("ul:visible");
                            visible.each(function(visibleIndex) {
                                var close = true;
                                parents.each(function(parentIndex) {
                                    if (parents[parentIndex] == visible[visibleIndex]) {
                                        close = false;
                                        return false;
                                    }
                                });
                                if (close) {
                                    if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                        $(visible[visibleIndex]).slideUp(opts.speed, function() {
                                            $(this).parent("li").find("i:first").addClass(opts.closedSign);
                                        });
                                    }
                                }
                            });
                        }
                    }
                    if ($(this).parent().find("ul:first").is(":visible")) {
                        $(this).parent().find("ul:first").slideUp(opts.speed, function() {
                            $(this).parent("li").find("i:first").delay(opts.speed).removeClass(opts.openedSign).addClass(opts.closedSign);
                        });
                    } else {
                        $(this).parent().find("ul:first").slideDown(opts.speed, function() {
                            $(this).parent("li").find("i:first").delay(opts.speed).removeClass(opts.closedSign).addClass(opts.openedSign);
                        });
                    }
                }
            });
        }
    });
})(jQuery);