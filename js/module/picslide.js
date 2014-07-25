// JavaScript Document
define(function(require, exports, module){
	
	function picSlide(oUl, oLi, oBtnWrap){
		initBtn(oLi, oBtnWrap);
		
		var originLiWidth = oLi.width(); //Li原始的宽度
		var pageMinWidth = $('body').css('min-width') || 1002; //页面的最小宽度
		pageMinWidth = parseInt(pageMinWidth);
		var DISRIGHTWIDTH = 50; //切换小图标距离页面主体的右边距
		var oBtnWrapWidth = oBtnWrap.children().eq(0).outerWidth(true) * oBtnWrap.children().length;
		
		
		updatePosition(oUl, oLi, oBtnWrap, pageMinWidth, originLiWidth, oBtnWrapWidth, DISRIGHTWIDTH);
		
		$(window).resize(function(){
			updatePosition(oUl, oLi, oBtnWrap, pageMinWidth, originLiWidth, oBtnWrapWidth, DISRIGHTWIDTH);
		});
		
		var fun = function(){
			var oVisiLi = oUl.find('li:visible');//显示的Li
			if(oVisiLi.index() == (oLi.length - 1)){ //到最后一个
				oVisiLi.fadeOut(1000);
				oLi.eq(0).fadeIn(1000);
				var oDds = oBtnWrap.find('dd').removeClass('active');
				oBtnWrap.find('dd:eq(0)').addClass('active');
			} else {
				oVisiLi.fadeOut(1000).next().fadeIn(1000);
				var oDds = oBtnWrap.find('dd').removeClass('active');
				oDds.eq(oVisiLi.index() + 1).addClass('active');
			}
		}
		
		var timer = setInterval(fun, 2000);
		
		
		oBtnWrap.delegate('dd', 'mouseover', function(ev){
			clearInterval(timer);
			var oDds = oBtnWrap.find('dd').removeClass('active');
			$(this).addClass('active');
			oLi.fadeOut(1000);
			oLi.eq($(this).index()).fadeIn(1000);
		});
		
		oBtnWrap.delegate('dd', 'mouseout', function(index, obj){
			timer = setInterval(fun, 2000);
		});
	}
	
	/*更新页面的图标位置*/
	function updatePosition(oUl, oLi, oBtnWrap, pageMinWidth, originLiWidth, oBtnWrapWidth, DISRIGHTWIDTH){
		var winWidth = $(window).width();
		if(winWidth > pageMinWidth){
			if(winWidth < originLiWidth){
				oUl.width(winWidth);
				oLi.width(winWidth);
			} else {
				oUl.width(originLiWidth);
				oLi.width(originLiWidth);
			}
			oBtnWrap.css('left', winWidth - Math.ceil((winWidth - pageMinWidth)/2) - oBtnWrapWidth- DISRIGHTWIDTH);
		} else {
			oUl.width(pageMinWidth);
			oLi.width(pageMinWidth);
			oBtnWrap.css('left', pageMinWidth - oBtnWrapWidth - DISRIGHTWIDTH);
		}
	}
	
	//初始化按钮区域
	function initBtn(oLi, oBtnWrap){
		var html = '';
		oLi.each(function(index){
			html += '<dd>' + (index + 1) + '</dd>'
		});
		oBtnWrap.append(html);
		oBtnWrap.find('dd:eq(0)').addClass('active');
		oLi.eq(0).show().nextAll().hide();
	}
	
	exports.picSlide = picSlide;
});