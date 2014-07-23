// JavaScript Document

define(function(require, exports, module){
	// 团队展示图片切换
	$(function(){
		var oWalkAsemi = $('.walk-asemi');
		var oUl = oWalkAsemi.find('.pic ul');
		var oLi = oUl.find('li');
		var prevBtn = oWalkAsemi.find('.title .left');
		var nextBtn = oWalkAsemi.find('.title .right');
		require('./module/picswitch.js').picSwitch(oUl, oLi, prevBtn, nextBtn);	
	});
	
	
	//首页轮播图
	$(function(){
		var oSlideWrap = $('#j_main_slider');
		var oUl = oSlideWrap.find('.slide-ul');
		var oLi = oUl.find('li');
		var oBtnWrap = oSlideWrap.find('.slide-flag');
		require('./module/picslide.js').picSlide(oUl, oLi, oBtnWrap);
	});

	
	//导航折叠
	$(function(){
		var oUl = $('#J_Wrap .pro-ul');
		var oLi = oUl.find('li.pro-li');
		require('./module/menuFold.js').menuFold(oUl, oLi, {
			showbackposition: '160px 14px',
			hidebackposition: '160px -20px',
			expandindexs: [0, 1]
		});
	});
});