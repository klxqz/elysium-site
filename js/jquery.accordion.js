(function(e){e.fn.extend({accordion:function(t){var n={accordion:"false",speed:500,closedSign:"icon-plus-sign",openedSign:"icon-minus-sign"};var r=e.extend(n,t);var i=e(this);i.find("li").each(function(){if(e(this).find("ul").size()!=0){e(this).find("a:first").after('<i class="'+r.closedSign+'"></i>')}});i.find("li.selected").each(function(){e(this).parents("ul").slideDown(r.speed);e(this).parents("ul").parent("li").find("i:first").addClass(r.openedSign)});i.find("li i").live("click",function(){if(e(this).parent().find("ul").size()!=0){if(r.accordion){if(!e(this).parent().find("ul").is(":visible")){parents=e(this).parent().parents("ul");visible=i.find("ul:visible");visible.each(function(t){var n=true;parents.each(function(e){if(parents[e]==visible[t]){n=false;return false}});if(n){if(e(this).parent().find("ul")!=visible[t]){e(visible[t]).slideUp(r.speed,function(){e(this).parent("li").find("i:first").addClass(r.closedSign)})}}})}}if(e(this).parent().find("ul:first").is(":visible")){e(this).parent().find("ul:first").slideUp(r.speed,function(){e(this).parent("li").find("i:first").delay(r.speed).removeClass(r.openedSign).addClass(r.closedSign)})}else{e(this).parent().find("ul:first").slideDown(r.speed,function(){e(this).parent("li").find("i:first").delay(r.speed).removeClass(r.closedSign).addClass(r.openedSign)})}}})}})})(jQuery)