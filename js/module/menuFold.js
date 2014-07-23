// JavaScript Document

//菜单折叠
define(function(require, exports, module){
	
	/*
	 * 
	 */
	function menuFold(oUl, oLi, ops) {
		
		var showBackPosition = ops['showbackposition'],
			hideBackPosition = ops['hidebackposition'],
			expandIndexs = ops['expandindexs'];
		
		var menuNodes = oLi.find('h3');
		
		oLi.find('ul').hide();
		menuNodes.find('a').css('backgroundPosition', hideBackPosition);
		
		for(var i=0,size=expandIndexs.length;i<size;i++){
			oLi.eq(expandIndexs[i]).find('ul').slideDown(300);
			oLi.eq(expandIndexs[i]).find('h3 a').css('backgroundPosition', showBackPosition);
		}
		
		menuNodes.click(function(){
			var subMenu = $(this).next('ul');
			if(subMenu.is(':hidden')){


                if(/msie 6/.test(navigator.userAgent.toLocaleLowerCase())){
                    oLi.find('ul').hide();
                    menuNodes.find('a').css('backgroundPosition', hideBackPosition);

                    subMenu.show();
                    $(this).find('a').css('backgroundPosition', showBackPosition);
                } else {
                    oLi.find('ul').slideUp(300);

                    menuNodes.find('a').css('backgroundPosition', hideBackPosition);
                    subMenu.slideDown(300);
                    $(this).find('a').css('backgroundPosition', showBackPosition);
                }


			} else {

                if(/msie 6/.test(navigator.userAgent.toLocaleLowerCase())){
                    oLi.find('ul').hide();
                    menuNodes.find('a').css('backgroundPosition', hideBackPosition);

                    subMenu.hide();

                } else {

                    oLi.find('ul').slideUp(300);

                    menuNodes.find('a').css('backgroundPosition', hideBackPosition);
                    subMenu.slideUp(300);
                }

			}
		});
	}
	
	exports.menuFold = menuFold;
});