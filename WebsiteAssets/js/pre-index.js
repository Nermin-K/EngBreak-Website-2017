$(function(){
	var width=$('.homepicture').width();
	var  s=0;
	var  h=0;
	var  z=0;
	if(localStorage.getItem('clicked') === 'finished'){
		 z=1;
	}
	
	$('#homeGo').click(function(){
		if (width==1134) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'-490px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'40px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		if (width==1059) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'-510px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'595px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==958) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==894) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==734) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
			else if (width==702) {
					  if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',top:'570px'},"slow");
			$('.onThe-image').animate({fontSize: '3em'}, "slow");
			$('.onThe-image').hide();
			$('.homepicture').animate({height: 'toggle'},"slow");
			$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
			$('.home-icon').show();
			$('.home-icon').parent().css('position', 'absolute');
			$('.home-icon').parent().css('z-index', 99999);
			$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
				'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
				'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'50px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:50, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==534) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==348) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
		else if (width==254) {
			if (s==0) {
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',top:'570px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
				s++; 
			}
			else{
				$('.homepicture').animate({height: '38px',width: '38px',left:'10px',bottom:'20px'},"slow");
				$('.onThe-image').animate({fontSize: '3em'}, "slow");
				$('.onThe-image').hide();
				$('.homepicture').animate({height: 'toggle'},"slow");
				$('.home-icon').css({bottom:95 , left:10, position:'absolute'});
				$('.home-icon').show();
				$('.home-icon').parent().css('position', 'absolute');
				$('.home-icon').parent().css('z-index', 99999);
				$('.container').css({'filter': 'blur(0px)','-webkit-filter': 'blur(0px)',
					'-moz-filter': 'blur(0px)','-o-filter': 'blur(0px)',
					'-ms-filter': 'blur(0px)'});
			}
		}
	});
		$('.home-icon').click(function(){
			if (width==1134) {
				if (z==1) {
					$('.homepicture').animate({height: '571px',width: '1134px',left:'110px',top:'50px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '571px',width: '1134px',left:'110px',top:'-457px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});

				}
							}
			else if (width==1059) {
				if (z==1) {
						$('.homepicture').animate({height: '533px',width: '1059px',left:'35px',bottom:'40px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					if (h==0) {
					$('.homepicture').animate({height: '533px',width: '1059px',left:'35px',bottom:'40px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
						h++;
					}
					else{
					$('.homepicture').animate({height: '533px',width: '1059px',left:'35px',top:'50px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					}			

				}
				
			}
			else if (width==958) {
				if (z==1) {
					$('.homepicture').animate({height: '482px',width: '958px',left:'35px',top:'80px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '482px',width: '958px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}
			else if (width==894) {
				if (z==1) {
					$('.homepicture').animate({height: '450px',width: '894px',left:'35px',top:'90px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '450px',width: '894px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}
			else if (width==734) {
				if (z==1) {
					('.homepicture').animate({height: '369px',width: '734px',left:'35px',bottom:'0px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '369px',width: '734px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}
			else if (width==702) {
				if (z==1) {
					$('.homepicture').animate({height: '353px',width: '702px',left:'35px',top:'150px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;	
				}
				else{
					$('.homepicture').animate({height: '353px',width: '702px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}	
			}
			else if (width==534) {
				if (z==1) {
					$('.homepicture').animate({height: '268px',width: '534px',left:'35px',top:'150px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '268px',width: '534px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}
			else if (width==348) {
				if (z==1) {
					$('.homepicture').animate({height: '475px',width: '348px',left:'35px',top:'80px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '475px',width: '348px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}
			else if (width==254) {
				if (z==1) {
					$('.homepicture').animate({height: '347px',width: '254px',left:'35px',bottom:'70px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
					window.localStorage.removeItem('clicked');
					z=0;
				}
				else{
					$('.homepicture').animate({height: '347px',width: '254px',left:'35px',bottom:'550px'},"slow");
					$('.onThe-image').animate({fontSize: '11pt'}, "slow");
					$('.homepicture').show();
					$('.onThe-image').show();
					$('.home-icon').animate({height: 'toggle'},"slow");
					$('.container').css({'filter': 'blur(5px)','-webkit-filter': 'blur(5px)',
						'-moz-filter': 'blur(5px)','-o-filter': 'blur(5px)',
						'-ms-filter': 'blur(5px)'});
				}
			}	
		});
});