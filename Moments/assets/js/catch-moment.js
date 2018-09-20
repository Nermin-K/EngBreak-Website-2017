window.onload = function(){
	hideMenuOnResize();
}
window.onresize = function(){
	hideMenuOnResize();
}

/***** Flipping *****/

$('.fit > img ').click(function(){
	flipBack();
	if( $(this).is(":first-child") ){
		$(this).css({'transform': 'rotateY(180deg)',  'z-index': '-1'});
		$(this).next().css({'transform': 'rotateY(0deg)',  'z-index': '1'});
	}
	else{
		$(this).css({'transform': 'rotateY(180deg)',  'z-index': '-1'});
		$(this).prev().css({'transform': 'rotateY(0deg)',  'z-index': '1'});
	}
})

function flipBack(){
	var all = $('.fit > img').toArray();
	for(var i=0; i<all.length; i += 2){
		$(all[i]).css({'transform': 'rotateY(0deg)',  'z-index': '1'});
		$(all[i+1]).css({'transform': 'rotateY(180deg)',  'z-index': '-1'});
	}
}

$('body').click(function(e){
	if(!$(e.target).is('.fit img')){
		flipBack();
	}
});

/***** Scroll *****/

$('.bgimg h4').click(function(){
	$('html, body').animate({
		scrollTop: $('#main').offset().top
	}, 500);
})
var imgColors
$('.fit > img ').mouseover(function(e){
	clearInterval(imgColors);
	mainColors();
	color = 50;
	imgColors = setInterval(function(){
		if(color == 0){
			clearInterval(imgColors);
		}
		$(e.target).css({
			'filter': 'grayscale(' + color + '%)',
			'-webkit-filter': 'grayscale(' + color + '%)'
		});
		color -= 1;
	},10)
})

$('.fit > img ').mouseout(function(e){
	color = 0;
	clearInterval(imgColors);
	imgColors = setInterval(function(){
		if(color == 50){
			clearInterval(imgColors);
		}
		$(e.target).css({
			'filter': 'grayscale(' + color + '%)',
			'-webkit-filter': 'grayscale(' + color + '%)'
		});
		color +=1;
	},10)
})

function mainColors(){
	$('.fit > img').css({
		'filter': 'grayscale(50%)',
		'-webkit-filter': 'grayscale(50%)'
	});
}
/*************************************/

$('.bgimg h4').mouseover(function(){
	$(this).children('img').attr('src', 'assets/images/ICON2.png');
})
$('.bgimg h4').mouseout(function(){
	$(this).children('img').attr('src', 'assets/images/ICON.png');
})