function TeamIsReady() {
	if ($(window).innerWidth() <= 1199) {
		$(".team").css("display", "none");
		$(".members").css("display", "none");
		$(".R").css("display", "block");
	} else {
		$(".team").css("display", "block");
		$(".members").css("display", "block");
		$(".R").css("display", "none");
	}
}
//$(document).ready(function() {
	TeamIsReady();
	var handler_IR = -1;
	var handler_PM = -1;
	var handler_MM = -1;
	var handler_ER = -1;
	var handler_QMC = -1;
	var handler_HB = -1;
	var handler_AC = -1;
	var handler_B = -1;
	var handler_OD = -1;
	$("#IR").click(function() {
		moveBack();
		removeText();
		handler_IR++;
		if (handler_IR % 2 == 0) {
			$(".members >img:not(.IR)").animate({
				opacity: '0.1'
			}, 700);
			$(".IR").css("opacity", "1");
		} else if (handler_IR % 2 != 0 && $(".IR").css('opacity') == '1') {
			$(".members >img:not(.IR)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_IR % 2 != 0 && $(".IR").css('opacity') != '1') {
			$(".members >img:not(.IR)").animate({
				opacity: '0.1'
			}, 700);
			$(".IR").css("opacity", "1");
		}
	});
	$("#PM").click(function() {
		moveBack();
		removeText();
		handler_PM++;
		if (handler_PM % 2 == 0) {
			$(".members >img:not(.PM)").animate({
				opacity: '0.1'
			}, 700);
			$(".PM").css("opacity", "1");
		} else if (handler_PM % 2 != 0 && $(".PM").css('opacity') == '1') {
			$(".members >img:not(.PM)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_PM % 2 != 0 && $(".PM").css('opacity') != '1') {
			$(".members >img:not(.PM)").animate({
				opacity: '0.1'
			}, 700);
			$(".PM").css("opacity", "1");
		}
	});
	$("#MM").click(function() {
		moveBack();
		removeText();
		handler_MM++;
		if (handler_MM % 2 == 0) {
			$(".members >img:not(.MM)").animate({
				opacity: '0.1'
			}, 700);
			$(".MM").css("opacity", "1");
		} else if (handler_MM % 2 != 0 && $(".MM").css('opacity') == '1') {
			$(".members >img:not(.MM)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_MM % 2 != 0 && $(".MM").css('opacity') != '1') {
			$(".members >img:not(.MM)").animate({
				opacity: '0.1'
			}, 700);
			$(".MM").css("opacity", "1");
		}
	});
	$("#ER").click(function() {
		moveBack();
		removeText();
		handler_ER++;
		if (handler_ER % 2 == 0) {
			$(".members >img:not(.ER)").animate({
				opacity: '0.1'
			}, 700);
			$(".ER").css("opacity", "1");
		} else if (handler_ER % 2 != 0 && $(".ER").css('opacity') == '1') {
			$(".members >img:not(.ER)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_ER % 2 != 0 && $(".ER").css('opacity') != '1') {
			$(".members >img:not(.ER)").animate({
				opacity: '0.1'
			}, 700);
			$(".ER").css("opacity", "1");
		}
	});
	$("#QMC").click(function() {
		moveBack();
		removeText();
		handler_QMC++;
		if (handler_QMC % 2 == 0) {
			$(".members >img:not(.QMC)").animate({
				opacity: '0.1'
			}, 700);
			$(".QMC").css("opacity", "1");
		} else if (handler_QMC % 2 != 0 && $(".QMC").css('opacity') == '1') {
			$(".members >img:not(.QMC)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_QMC % 2 != 0 && $(".QMC").css('opacity') != '1') {
			$(".members >img:not(.QMC)").animate({
				opacity: '0.1'
			}, 700);
			$(".QMC").css("opacity", "1");
		}
	});
	$("#HB").click(function() {
		moveBack();
		removeText();
		handler_HB++;
		if (handler_HB % 2 == 0) {
			$(".members >img:not(.HB)").animate({
				opacity: '0.1'
			}, 700);
			$(".HB").css("opacity", "1");
		} else if (handler_HB % 2 != 0 && $(".HB").css('opacity') == '1') {
			$(".members >img:not(.HB)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_HB % 2 != 0 && $(".HB").css('opacity') != '1') {
			$(".members >img:not(.HB)").animate({
				opacity: '0.1'
			}, 700);
			$(".HB").css("opacity", "1");
		}
	});
	$("#Board").click(function() {
		moveBack();
		removeText();
		handler_B++;
		if (handler_B % 2 == 0) {
			$(".members >img:not(.B)").animate({
				opacity: '0.1'
			}, 700);
			$(".B").css("opacity", "1");
		} else if (handler_B % 2 != 0 && $(".B").css('opacity') == '1') {
			$(".members >img:not(.B)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_B % 2 != 0 && $(".B").css('opacity') != '1') {
			$(".members >img:not(.B)").animate({
				opacity: '0.1'
			}, 700);
			$(".B").css("opacity", "1");
		}
	});
	$("#AC").click(function() {
		moveBack();
		removeText();
		handler_AC++;
		if (handler_AC % 2 == 0) {
			$(".members >img:not(.AC)").animate({
				opacity: '0.1'
			}, 700);
			$(".AC").css("opacity", "1");
		} else if (handler_AC % 2 != 0 && $(".AC").css('opacity') == '1') {
			$(".members >img:not(.AC)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_AC % 2 != 0 && $(".AC").css('opacity') != '1') {
			$(".members >img:not(.AC)").animate({
				opacity: '0.1'
			}, 700);
			$(".AC").css("opacity", "1");
		}
	});
	$("#OD").click(function() {
		moveBack();
		removeText();
		handler_OD++;
		if (handler_OD % 2 == 0) {
			$(".members >img:not(.OD)").animate({
				opacity: '0.1'
			}, 700);
			$(".OD").css("opacity", "1");
		} else if (handler_OD % 2 != 0 && $(".OD").css('opacity') == '1') {
			$(".members >img:not(.OD)").animate({
				opacity: '1'
			}, 700);
		} else if (handler_OD % 2 != 0 && $(".OD").css('opacity') != '1') {
			$(".members >img:not(.OD)").animate({
				opacity: '0.1'
			}, 700);
			$(".OD").css("opacity", "1");
		}
	});
	/*****************************************************************************/
	var members = jQuery(".members > img");
	var images = jQuery(".members > img:not(.text)");
	var information = jQuery(".info");
	var rest = $(".HB2 > img:not(#P2)");

	function move(member) {
		for (var i = 0; i < members.length; i++) {
			if (members[i].offsetLeft > member.offsetLeft) {
				members[i].style.transform = "translateX(40px)";
			} else if (members[i].offsetLeft < member.offsetLeft) {
				members[i].style.transform = "translateX(-40px)";
			}
			if (members[i].offsetTop > member.offsetTop) {
				members[i].style.transform += "translateY(40px)";
			} else if (members[i].offsetTop < member.offsetTop) {
				members[i].style.transform += "translateY(-40px)";
			}
		}
	}

	function moveBack() {
		for (var i = 0; i < members.length; i++) {
			members[i].style.transform = "translate(0px,0px)";
		}
		for (var i = 0; i < rest.length; i++) {
			rest[i].style.transform = "translate(0px,0px)";
		}
	}

	function removeText() {
		$(".members > .info").css("display", "none");
		$(".HB2 > .info").css("display", "none");
	}

	function back() {
		$(".members > img").css("opacity", "1");
		$(".HB2 > img").css("opacity", "1");
	}
	$(".members > img:not(.text)").click(function() {
		back();
		moveBack();
		if ($(this).next().css("display") == "none") {
			removeText();
			$(".members > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(this).next().css("display", "block");
			move(this);
		} else {
			$(this).next().css("display", "none");
		}
	});
	/*************************RESPONSIVE**************************/
	$("#P2").click(function() {
		$(".heads").css("display", "none");
		moveBack();
		if ($(".info-r-c").css("display") == "block") {
			back();
			moveBack();
			removeText();
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r-c").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c1").click(function() {
		$(".heads").css("display", "none");
		moveBack();
		if ($(".info-r1").css("display") == "block") {
			back();
			moveBack();
			removeText();
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r1").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c2").click(function() {
		$(".heads").css("display", "none");
		moveBack();
		if ($(".info-r2").css("display") == "block") {
			back();
			moveBack();
			removeText();
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r2").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c3").click(function() {
		$(".heads").css("display", "none");
		moveBack();
		if ($(".info-r3").css("display") == "block") {
			back();
			moveBack();
			removeText();
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r3").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c4").click(function() {
		moveBack();
		if ($(".info-r4").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r4").css("display", "block");
			$(".heads:not(.ACH)").css("display", "none");
			$(".ACH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c5").click(function() {
		moveBack();
		if ($(".info-r5").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r5").css("display", "block");
			$(".heads:not(.ERH)").css("display", "none");
			$(".ERH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c7").click(function() {
		moveBack();
		if ($(".info-r7").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r7").css("display", "block");
			$(".heads:not(.MMH)").css("display", "none");
			$(".MMH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c6").click(function() {
		moveBack();
		if ($(".info-r6").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".info-r6").css("display", "block");
			$(".heads:not(.QMCH)").css("display", "none");
			$(".QMCH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c8").click(function() {
		moveBack();
		if ($(".IRH").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".heads:not(.IRH)").css("display", "none");
			$(".IRH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$(".c9").click(function() {
		moveBack();
		if ($(".ODH").css("display") == "block") {
			back();
			moveBack();
			removeText();
			$(".heads").css("display", "none");
		} else {
			removeText();
			$(".HB2 > img").css("opacity", "0.1");
			$(this).css("opacity", "1");
			$(".heads:not(.ODH)").css("display", "none");
			$(".ODH").css("display", "block");
			for (var i = 0; i < rest.length; i++) {
				if (rest[i].offsetTop < this.offsetTop) {
					rest[i].style.transform = "translateY(-20px)";
				} else if (rest[i].offsetTop > this.offsetTop) {
					rest[i].style.transform = "translateY(30px)";
				}
				if (rest[i].offsetLeft > this.offsetLeft) {
					rest[i].style.transform += "translateX(20px)";
				} else if (rest[i].offsetLeft < this.offsetLeft) {
					rest[i].style.transform += "translateX(-20px)";
				}
			}
		}
	});
	$('body').click(function(e) {
		if (!$(e.target).is('img')) {
			removeText();
			moveBack();
			back();
			$(".heads").css("display", "none");
		}
	})
//});