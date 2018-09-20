window.onload = function() {
	getReady();
};
window.onresize = function() {
	getReady();
};

function getReady() {
	setTimeout(function() {
		header();
	}, 10);
	TeamIsReady();
	hideMenuOnResize();
}

function header() {
	setHeight();
	var video = document.getElementById('video');
	var circle = document.getElementById('circle');
	putBackground(video, circle);
	putVedio(video);
}

function putBackground(video, circle) {
	var size = video.offsetWidth;
	var laptop = video.children[0];
	var center = laptop.offsetLeft + 39 + laptop.offsetWidth / 2; //Left & right
	var middle = laptop.offsetTop + laptop.offsetHeight / 2 - 89; // Top & bottom
	size = size * 1.4; // Size of the Circle
	circle.style.width = circle.style.height = size + 'px';
	circle.style.left = video.offsetLeft + center - size / 2 + 'px';
	circle.style.top = video.offsetTop + middle - size / 2 + 'px';
}

function putVedio(video) {
	var laptop = video.children[0];
	var frame = video.children[1];
	var set = frame.style;
	set.left = laptop.offsetLeft + laptop.offsetWidth * 20.6 / 100 + 'px';;
	set.top = laptop.offsetTop + laptop.offsetHeight * 4.7 / 100 + 'px';;
	set.width = laptop.offsetWidth * 72.2 / 100 + 'px';
	set.height = laptop.offsetHeight * 52.1 / 100 + 'px';
	frame.style.display = "block";
}

function setHeight() {
	var parent = document.getElementsByClassName('v_m')[0];
	var lastElement = parent.lastElementChild;
	if (window.innerHeight < lastElement.offsetTop + lastElement.offsetHeight || window.innerHeight > lastElement.offsetTop + lastElement.offsetHeight + 200) {
		parent.style.height = lastElement.offsetTop + lastElement.offsetHeight + 20 + 'px';
	} else {
		parent.style.height = '100vh';
	}
}