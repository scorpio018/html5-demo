$(function() {
    $("img.lazy").lazyload({
    	threshold : 200,
    	event : "scroll"
    });
    
    $(window).bind("load", function() {
        var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 5000);
    });
});