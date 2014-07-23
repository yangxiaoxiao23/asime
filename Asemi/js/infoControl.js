// JavaScript Document
// JavaScript Document

define(function(require, exports, module){
	// 团队展示图片切换
	$(function(){
		var oProPic = $('#Js-pro-pic');
		var oUl = oProPic.find('.rolling-items');
		var oLi = oUl.find('.rolling-item');
		var prevBtn = oProPic.find('.back');
		var nextBtn = oProPic.find('.forward');
		var oChangePic = $('#Js-bigPic');
		require('./module/picswitch2.js').picSwitch(oUl, oLi, 4, prevBtn, nextBtn, oChangePic);	
	});

    //导航折叠
    $(function(){
        var oUl = $('#J_Wrap .pro-ul');
        var oLi = oUl.find('li.pro-li');
        require('./module/menuFold.js').menuFold(oUl, oLi, {
            showbackposition: '160px 14px',
            hidebackposition: '160px -20px',
            expandindexs: [0]
        });
    });
});