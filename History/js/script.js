function loadApp(){$("#canvas").fadeIn(1e3);var a=$(".magazine");if(0==a.width()||0==a.height())return void setTimeout(loadApp,10);a.turn({width:922,height:500,duration:1e3,gradients:!0,autoCenter:!0,elevation:50,pages:10,when:{turning:function(a,b,c){var d=$(this);d.turn("page"),d.turn("pages");Hash.go("page/"+b).update(),disableControls(b)},turned:function(a,b,c){disableControls(b),$(this).turn("center"),$("#slider").slider("value",getViewNumber($(this),b)),1==b&&$(this).turn("peel","br")},missing:function(a,b){for(var c=0;c<b.length;c++)addPage(b[c],$(this))}}}),$(".magazine-viewport").zoom({flipbook:$(".magazine"),max:function(){return largeMagazineWidth()/$(".magazine").width()},when:{swipeLeft:function(){$(this).zoom("flipbook").turn("next")},swipeRight:function(){$(this).zoom("flipbook").turn("previous")},resize:function(a,b,c,d){1==b?loadSmallPage(c,d):loadLargePage(c,d)},zoomIn:function(){$("#slider-bar").hide(),$(".made").hide(),$(".magazine").removeClass("animated").addClass("zoom-in"),$(".zoom-icon").removeClass("zoom-icon-in").addClass("zoom-icon-out"),window.escTip||$.isTouch||(escTip=!0,$("<div />",{class:"exit-message"}).html("<div>Press ESC to exit</div>").appendTo($("body")).delay(2e3).animate({opacity:0},500,function(){$(this).remove()}))},zoomOut:function(){$("#slider-bar").fadeIn(),$(".exit-message").hide(),$(".made").fadeIn(),$(".zoom-icon").removeClass("zoom-icon-out").addClass("zoom-icon-in"),setTimeout(function(){$(".magazine").addClass("animated").removeClass("zoom-in"),resizeViewport()},0)}}}),$(document).keydown(function(a){switch(a.keyCode){case 37:$(".magazine").turn("previous"),a.preventDefault();break;case 39:$(".magazine").turn("next"),a.preventDefault();break;case 27:$(".magazine-viewport").zoom("zoomOut"),a.preventDefault()}}),Hash.on("^page/([0-9]*)$",{yep:function(a,b){var c=b[1];void 0!==c&&$(".magazine").turn("is")&&$(".magazine").turn("page",c)},nop:function(a){$(".magazine").turn("is")&&$(".magazine").turn("page",1)}}),$(window).resize(function(){resizeViewport()}).bind("orientationchange",function(){resizeViewport()}),$.isTouch?$(".magazine").bind("touchstart",regionClick):$(".magazine").click(regionClick),$(".next-button").bind($.mouseEvents.over,function(){$(this).addClass("next-button-hover")}).bind($.mouseEvents.out,function(){$(this).removeClass("next-button-hover")}).bind($.mouseEvents.down,function(){$(this).addClass("next-button-down")}).bind($.mouseEvents.up,function(){$(this).removeClass("next-button-down")}).click(function(){$(".magazine").turn("next")}),$(".previous-button").bind($.mouseEvents.over,function(){$(this).addClass("previous-button-hover")}).bind($.mouseEvents.out,function(){$(this).removeClass("previous-button-hover")}).bind($.mouseEvents.down,function(){$(this).addClass("previous-button-down")}).bind($.mouseEvents.up,function(){$(this).removeClass("previous-button-down")}).click(function(){$(".magazine").turn("previous")}),$("#slider").slider({min:1,max:numberOfViews(a),start:function(a,b){window._thumbPreview?setPreview(b.value):(_thumbPreview=$("<div />",{class:"thumbnail"}).html("<div></div>"),setPreview(b.value),_thumbPreview.appendTo($(b.handle))),moveBar(!1)},slide:function(a,b){setPreview(b.value)},stop:function(){window._thumbPreview&&_thumbPreview.removeClass("show"),$(".magazine").turn("page",Math.max(1,2*$(this).slider("value")-2))}}),resizeViewport(),$(".magazine").addClass("animated")}$(".zoom-icon").bind("mouseover",function(){$(this).hasClass("zoom-icon-in")&&$(this).addClass("zoom-icon-in-hover"),$(this).hasClass("zoom-icon-out")&&$(this).addClass("zoom-icon-out-hover")}).bind("mouseout",function(){$(this).hasClass("zoom-icon-in")&&$(this).removeClass("zoom-icon-in-hover"),$(this).hasClass("zoom-icon-out")&&$(this).removeClass("zoom-icon-out-hover")}).bind("click",function(){$(this).hasClass("zoom-icon-in")?$(".magazine-viewport").zoom("zoomIn"):$(this).hasClass("zoom-icon-out")&&$(".magazine-viewport").zoom("zoomOut")}),$("#canvas").hide(),yepnope({test:Modernizr.csstransforms,yep:["lib/turn.min.js"],nope:["lib/turn.html4.min.js","css/jquery.ui.html4.css"],both:["lib/zoom.min.js","css/jquery.ui.css","js/magazine.js","css/magazine.css"],complete:loadApp});
