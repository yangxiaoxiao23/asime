function returnTop(oReturnTop, positionWidth){
    if($.browser.msie && $.browser.version == 6.0){
        oReturnTop.css({
            position: 'absolute',
            left: positionWidth,
            top: $(window).scrollTop() + $(window).height() - 180
        });
    } else {
        oReturnTop.css('left', positionWidth);
    }
}

$(function(){
    var oReferenceEl = $('.search-wrap-bd'); //参考的El
    var oReturnTop = $('.returnTop');
    
    var getPosWidth = function(){
        if($(window).width() < 1060){
            var positionWidth = positionWidth = $(window).width() - 60;
        } else {
            var positionWidth = oReferenceEl.offset().left + oReferenceEl.outerWidth() + 60;
        }
        return positionWidth;
    }
    
    oReturnTop.click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
    
    
    
    oReturnTop.hide();
    //当滚动条的位置处于距顶部400像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        if ($(window).scrollTop() > 400){
            oReturnTop.fadeIn(1500);
        } else {
            oReturnTop.fadeOut(1500);
        }
        if($.browser.msie && $.browser.version == 6.0){
            returnTop(oReturnTop, getPosWidth());
        }
    });
    
    
    returnTop(oReturnTop, getPosWidth());
    
    
    $(window).resize(function(){
        returnTop(oReturnTop, getPosWidth());
    });
});