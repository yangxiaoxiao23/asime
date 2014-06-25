var g_bMoveLeft=true;
var g_oTimer=null;
var g_oTimerOut=null;

var g_iSpeed=2;

window.onload=function ()
{
	var oDiv= $('.honour .sec-bd');
	var oUl= oDiv.find('ul.honour-ul');
	var aLi= oUl.find('li.honour-li');
	var aA= oDiv.find('a');
	
	var i=0;
	
	oUl.append(oUl.children().clone());
	
	oUl.css('width', aLi[0].offsetWidth*oUl.children().length);
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function ()
		{
			stopMove();
		};
		
		aLi[i].onmouseout=function ()
		{
			startMove(g_bMoveLeft);
		};
	}
	
	aA[0].onmouseover=function ()
	{
		startMove(true);
	};
	
	aA[1].onmouseover=function ()
	{
		startMove(false);
	};
	
	startMove(true);
};

function startMove(bLeft)
{
	g_bMoveLeft=bLeft;
	
	if(g_oTimer)
	{
		clearInterval(g_oTimer);
	}
	g_oTimer=setInterval(doMove, 30);
}

function stopMove()
{
	clearInterval(g_oTimer);
	g_oTimer=null;
}

function doMove()
{
	var oDiv= $('.honour .sec-bd');
	var oUl= oDiv.find('ul.honour-ul');
	var aLi= oUl.find('li.honour-li');
	
	var l= oUl.position().left;
	
	if(g_bMoveLeft)
	{
		l-=g_iSpeed;
		if(l<=-oUl.width()/2)
		{
			l+=oUl.width()/2;
		}
	}
	else
	{
		l+=g_iSpeed;
		if(l>=0)
		{
			l-=oUl.width()/2;
		}
	}
	
	oUl.css('left', l+'px');
}