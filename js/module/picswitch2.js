// JavaScript Document
define(function(require, exports, module){
	
	function picSwitch(oUl, oLi, number, prevBtn, nextBtn, oChangePic){
		initUlWidth(oUl, oLi);
		
		oLi.eq(number - 1).nextAll().hide();
		prevBtn.removeClass('active');
		if(oLi.length > number){
			nextBtn.addClass('active');
		}
		
		prevBtn.click(function(){
			if($(this).hasClass('active')){
				var oVisibleLi = oUl.find('li:visible');
				if(!oVisibleLi.first().prev().fadeIn(300).length){
					prevBtn.removeClass('active');
					return ;
				}
				if(oVisibleLi.last().fadeOut(300).has('active')){
					oLi.removeClass('active');
					var activeLi = oVisibleLi.eq(oVisibleLi.length - 1).addClass('active');
					oChangePic.attr('src', activeLi.find('img').attr('src'));
				}
				nextBtn.addClass('active');
			}			
		});
		
		nextBtn.click(function(){
			if($(this).hasClass('active')){
				var oVisibleLi = oUl.find('li:visible');
				if(!oVisibleLi.last().next().fadeIn(300).length){
					nextBtn.removeClass('active');
					return ;
				}
				if(oVisibleLi.eq(0).fadeOut(300).has('active')){
					oLi.removeClass('active');
					var activeLi = oVisibleLi.eq(1).addClass('active');
					oChangePic.attr('src', activeLi.find('img').attr('src'));
				}
				prevBtn.addClass('active');
			}
		});
		
		oLi.hover(function(){
			oLi.removeClass('active');
			$(this).addClass('active');
			oChangePic.attr('src', $(this).find('img').attr('src'));
		});
	}
	
	//初始化Ul的宽度
	function initUlWidth(oUl, oLi){
		oUl.width(oLi.width() * oLi.length);
	}
	
	exports.picSwitch = picSwitch;
});