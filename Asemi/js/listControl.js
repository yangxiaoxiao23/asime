// JavaScript Document

define(function(require, exports, module){
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