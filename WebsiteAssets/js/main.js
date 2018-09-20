function setFooter() {
	$('.FooterDiv').css('top', window.innerHeight - 10 + 'px');
}
setFooter();
var footerCondition = true;
$('.da-slide-third-div-a').click(function() {
	var pos = $('.FooterDiv').offset();
	setTimeout(function() {
		$('.home-icon').css("display", "none");
	}, 100);
	$('.FooterDiv').css('top', window.innerHeight - $('.FooterDiv').height() + 'px');
	footerCondition = false;
});
$('#Info-Icon').click(function() {
	var pos = $('.FooterDiv').offset();
	if (footerCondition) {
		setTimeout(function() {
			$('.home-icon').css("display", "none");
		}, 100);
		$('.FooterDiv').css('top', window.innerHeight - $('.FooterDiv').height() + 'px');
		footerCondition = false;
	} else {
		setTimeout(function() {
			$('.home-icon').css("display", "block");
		}, 600);
		$('.FooterDiv').css('top', window.innerHeight - 10 + 'px');
		footerCondition = true;
	}
});

function ready() {
	hideMenuOnResize();
	$('.FooterDiv').css('transition', '0s');
	setFooter();
	setTimeout(function() {
		$('.FooterDiv').css('transition', '1s');
	}, 200);
}

window.onresize = function() {
	ready()
};

window.onload = function() {
	ready()
};