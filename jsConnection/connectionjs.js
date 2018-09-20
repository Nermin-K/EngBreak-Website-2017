$(function(){
	$(".home").on("click",function(){
		localStorage.setItem('home', 'clicked');
		window.location.href = "../WEBSITE/index.html";
	});
});
