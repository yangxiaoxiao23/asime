// JavaScript Document
define(function(require, exports, module){
	
	function picSlide(oUl, oLi, oBtnWrap){
		
		initBtn(oLi, oBtnWrap);
		
		var disLeft = Math.ceil(($('.slide-bd').width() - 1600) / 2);
        oUl.css({left: disLeft});

        oBtnWrap.css({left: (1000 + Math.ceil(($('.slide-bd').width() - 1000) / 2) - oBtnWrap.outerWidth())});
		
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