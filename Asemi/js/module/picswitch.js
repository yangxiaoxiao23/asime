// JavaScript Document
define(function(require, exports, module){
	
	function picSwitch(oUl, oLi, prevBtn, nextBtn){
		initUlWidth(oUl, oLi);
		
		oLi.eq(0).nextAll().hide();
		prevBtn.removeClass('active');
		if(oLi.length > 1){
			nextBtn.addClass('active');
		}
		
		prevBtn.click(function(){
			if($(this).hasClass('active')){
				var oActiveLi = oUl.find('li:visible');
				if(oActiveLi.index() == 1){
					prevBtn.removeClass('active');
				}
				oActiveLi.fadeOut(300).prev().fadeIn(300);
				nextBtn.addClass('active');
			}			
		});
		
		nextBtn.click(function(){
			if($(this).hasClass('active')){
				var oActiveLi = oUl.find('li:visible');
				if(oActiveLi.index() == (oLi.length - 2)){
					nextBtn.removeClass('active');
				}
				oActiveLi.fadeOut(300).next().fadeIn(300);
				prevBtn.addClass('active');
			}			
		});
	}
	
	//初始化Ul的宽度
	function initUlWidth(oUl, oLi){
		oUl.width(oLi.width() * oLi.length);
	}
	
	exports.picSwitch = picSwitch;
});