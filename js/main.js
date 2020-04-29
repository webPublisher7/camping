$(function(){
	var wind = $(window);
	if($('nav').length){
		var	menu = $('header nav'),
		menuOffset = menu.offset().top,
		tabAnchor = $('.tab_btn li'),
		tabs = $('.tabs');
		
		wind.scroll(function(){
			if(wind.scrollTop() > menuOffset){
				menu.addClass('sticky');
			}else{
				menu.removeClass('sticky');
			}
		}); //menu 고정
	}
	if($('.guide').length){
		tabAnchor.on('click', function(e){
			e.preventDefault();
			tabAnchor.find('a').removeClass('active');
			$(this).find('a').addClass('active');
			tabs.hide();
			tabs.eq($(this).index()).show();
		}); //tab 소스
		tabAnchor.eq(0).trigger('click');
}		

	if($('.carousel').length){
		$('.carousel').carousel({
		}
		);

		$('.maingallery_prev').click(function(){
		  $(".carousel").carousel('prev');
		});

		$('.maingallery_next').click(function(){
		  $(".carousel").carousel('next');
		});

	}//main gallery slider
	if($('.camping_gallery_view').length){
		$( '.gallery_slider' ).cycle({
			slides:'>li'
		});
	} //gallery footer slider
	
	if($('#accordion').length){
		$(function(){
			$("#accordion").accordion();
		});
	} //faq accordion
	if($('.popup').length){
		$('.popup a').click(function(e){
			e.preventDefault();
			$(this).closest('.popup').hide();
		});
	}
	
	if($('.nanjicamp').length){
		$('.introtext_1').animate({opacity:1, bottom:'10%'},1000);
		wind.scroll(function(){
			if(wind.scrollTop() > $('.nanjicamp').offset().top){
				$('.introtext_2').animate({opacity:1, bottom:'30%'},1000);
			}
		});
	}
	
	if($('.compliance').length){
		var BtnDelay = 200;
		var i = BtnDelay;
		var complianceList = $('.compliance_list1');
		var complianceList2 = $('.compliance_list2');
		complianceList.each(function(){
			$(this).delay(i).animate({
				opacity:1}, 1000);
				i += BtnDelay;
		});
		wind.scroll(function(){
			complianceList2.each(function(){
			$(this).delay(i).animate({
				opacity:1}, 1000);
				i += BtnDelay;
			});	
		});
	}
	if($('.camp-services').length){
		wind.scroll(function(){
			if(wind.scrollTop() > $('.camp-services').offset().top - 300){
				var MainBtnDelay = 250;
				var i = MainBtnDelay;
				var mainBTN = $('.camp_services_wrap>li');
				mainBTN.each(function(){
					$(this).delay(i).animate({
						opacity:1}, 1000);
						i += MainBtnDelay;
				});
			}
		});
	}
});















