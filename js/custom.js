/**************************************
** Bind all events on page ready
**************************************/

var nav_is_expanded = true;

$(document).ready(function() {
	init_scroll();
	// $('.icon-circle').hover();
});

function init_scroll() {
	$(window).scroll(function () {
	    if ($(window).scrollTop() == 0 && !nav_is_expanded)
			expand_navbar();
	    else if (nav_is_expanded)
	    	shrink_navbar();
	});
}
function expand_navbar() {

	$("#navbar").stop().animate({height:90}, 250, function() { $(this).css("overflow", "visible"); });
	
	$("#navbar-brand").stop().animate({marginTop:15}, 250);

	$("#nav-buttons").children("li").animate({marginTop:20}, 250);

	// $("#nav-buttons").children("li").each(function() {
	// 	$(this).children("a").stop().animate({paddingTop:20}, 250);
	// });

	nav_is_expanded = true;

}
function shrink_navbar() {

	$("#navbar").stop().animate({height:50}, 250, function() { $(this).css("overflow", "visible"); });
	
	$("#navbar-brand").stop().animate({marginTop:-5}, 250);

	$("#nav-buttons").children("li").animate({marginTop:-5}, 250);

	// $("#nav-buttons").children("li").each(function() {
	// 	$(this).children("a").stop().animate({paddingTop:0}, 250);
	// });

	nav_is_expanded = false;

}


function init_highlight_icons() {
	$(".higlight-icon-circle").hover(highlight_icon_onmouseenter, hightlight_icon_onmouseexit);
}
function highlight_icon_onmouseenter() {

}
function hightlight_icon_onmouseexit() {

}