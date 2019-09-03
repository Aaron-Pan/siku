window.onload=function(){
	
		var a=document.getElementsByTagName("li");
		var b=document.getElementsByClassName("secend-box");
		var s1=document.getElementsByClassName("secend");
		var s2=document.getElementsByClassName("third");
		var s3=document.getElementsByClassName("four");
		var s4=document.getElementsByClassName("five");
		var s5=document.getElementsByClassName("six");
		var s6=document.getElementsByClassName("siven");
		var s7=document.getElementsByClassName("eight");
		var s8=document.getElementsByClassName("nine");
		var s9=document.getElementsByClassName("ten");
a[7].onmouseenter=function(){
	s1[0].style.display="block"
	b[0].style.display="block"
	b[0].style.left="87px"
}
a[7].onmouseleave=function(){
	s1[0].style.display="none"
}
a[8].onmouseenter=function(){
	s2[0].style.display="block"
	b[1].style.left="174px"
	b[1].style.display="block"
}
a[8].onmouseleave=function(){
	b[1].style.display="none"
}
a[9].onmouseenter=function(){
	b[2].style.left="87px"
	s3[0].style.display="block"
	b[2].style.display="block"
}
a[9].onmouseleave=function(){
	b[2].style.display="none"
}
a[10].onmouseenter=function(){
	b[3].style.left="87px"
	b[3].style.display="block"
}
a[10].onmouseleave=function(){
	b[3].style.display="none"
}
a[11].onmouseenter=function(){
	b[4].style.left="87px"
	b[4].style.display="block"
}
a[11].onmouseleave=function(){
	b[4].style.display="none"
}
a[12].onmouseenter=function(){
	b[5].style.left="87px"
	b[5].style.display="block"
}
a[12].onmouseleave=function(){
	b[5].style.display="none"
}
a[13].onmouseenter=function(){
	b[6].style.left="87px"
	b[6].style.display="block"
}
a[13].onmouseleave=function(){
	b[6].style.display="none"
}
a[14].onmouseenter=function(){
	b[7].style.left="87px"
	b[7].style.display="block"
}
a[14].onmouseleave=function(){
	b[7].style.display="none"
}
a[15].onmouseenter=function(){
	b[8].style.left="87px"
	b[8].style.display="block"
}
a[15].onmouseleave=function(){
	b[8].style.display="none"
}
a[16].onmouseenter=function(){
	b[9].style.left="87px"
	b[9].style.display="block"
}
a[16].onmouseleave=function(){
	b[9].style.display="none"
}

	//详情
	var oImgleft=document.querySelectorAll(".small-box");
	var oImgright=document.querySelectorAll(".cen-big-box img");
	var oImgbig=document.querySelectorAll(".cen-box-right img");
	var oLe=document.querySelector(".cen-big-box");
	var oRi=document.querySelector(".cen-box-right");
	var Kuang=document.querySelector(".kuai");
	var oMeng=document.querySelector(".mc");
	console.log(oImgleft);
	for(let i=0; i<oImgleft.length;i++)
	{
		oImgleft[i].onmouseenter=function(){
			for(var j=0;j<oImgleft.length;j++)
			{
				oImgright[j].style.opacity="0";
				oImgbig[j].style.opacity="0";
				oImgleft[j].style.border="1px solid #cccccc";
			}
			this.style.border="1px solid red";
			oImgright[i].style.opacity="1";
			oImgbig[i].style.opacity="1";
		}
	}
	oLe.onmousemove=function(event){
		var evt=event||window.event;
		var x=evt.offsetX;
		var y=evt.offsetY;
		// console.log(x);
		// console.log(y);
		Kuang.style.opacity="0.5";
		var kuangX=x-Kuang.offsetWidth/2;
		var kuangY= y-Kuang.offsetHeight/2;
		
		
		if(kuangX<=0)
		{
			kuangX=0;
		}
		else if(kuangX>=oLe.offsetWidth-Kuang.offsetWidth)
		{
			kuangX=oLe.offsetWidth-Kuang.offsetWidth;
		}
		if(kuangY<=0)
		{
			kuangY=0;
		}
		else if(kuangY>=oLe.offsetHeight-Kuang.offsetHeight)
		{
			kuangY=oLe.offsetHeight-Kuang.offsetHeight;
		}
		Kuang.style.left=kuangX +"px";
		Kuang.style.top= kuangY +"px";
		//移动的比例
		var blx=kuangX / (oLe.offsetWidth-Kuang.offsetWidth);
		var bly=kuangY / (oLe.offsetHeight-Kuang.offsetHeight);
		// console.log(blx,bly);
	//  求大图的实际移动距离
		// console.log(oImg[1].offsetWidth-oRi.offsetWidth)
		for(let k=0; k<oImgleft.length;k++)
	{
		var bigX=-blx*(oImgbig[k].offsetWidth-oRi.offsetWidth);
		var bigY=-bly*(oImgbig[k].offsetHeight-oRi.offsetHeight);
		oImgbig[k].style.top=bigY +"px"
		oImgbig[k].style.left=bigX +"px"
	}
	}
	oLe.onmouseover=function()
	{
		Kuang.style.display="block";
		oRi.style.display="block";
	}
	oLe.onmouseout=function()
	{
		Kuang.style.display="none";
		oRi.style.display="none";
	}
	var oSl=document.querySelector(".sl");
	var oSll=document.querySelector(".sll");
	var oSz=document.querySelector(".sz");
	oSl.onclick=function(){
		
		if(oSz.value==1)
		{
			oSl.style.cursor="not-allowed";
		}
		else
		{
			oSz.value--;
			
		}
		}
	oSll.onclick=function(){
		
			oSl.style.cursor="pointer";
			oSz.value++;
		
		}
	var ofiex=document.querySelector(".fie-box2");
	var ofiex1=document.querySelector(".fie-box3");
	window.onscroll=function(){
	
	var height=document.documentElement.scrollTop+document.body.scrollTop;
//	console.log(height);
	
	if (height>=800) 
	{
		ofiex.style.opacity="1";
		ofiex1.style.opacity="1";
	}
	else
	{
		ofiex.style.opacity="0";
		ofiex1.style.opacity="0";
	}
	ofiex1.onclick=function(){
		var hei=document.documentElement.scrollTop+document.body.scrollTop;
		while(hei>=0){
		
		document.documentElement.scrollTop=hei--;
		document.body.scrollTop=hei--;
		hei--;
		}
	}
	}
	var oInbuy=document.querySelectorAll(".imgbuy");
	var oInimg=document.querySelectorAll(".inimg");
	for(let a=0;a<oInbuy.length;a++)
	{
		oInbuy[a].onmouseenter=function(){
			for(var y=0;y<oInbuy.length;y++)
			{
				oInimg[y].style.width="50px";
				oInimg[y].style.height="50px";
				oInimg[y].style.marginLeft="20px";
				oInimg[y].style.marginTop="17px";
				oInimg[y].style.marginRight="17px";
				oInimg[y].style.boxShadow="0 0 0 0";
			}
			oInimg[a].style.width="83px";
			oInimg[a].style.height="80px";
			oInimg[a].style.marginLeft="1px";
			oInimg[a].style.marginTop="1px";
			oInimg[a].style.marginRight="3px";
			oInimg[a].style.boxShadow="0 0 5px -1px #f6f6f6";
			
		}
	}
	var oTl=document.querySelector(".title-left");
	var oTc=document.querySelector(".title-center");
	var oPo=document.querySelector(".posione");
	var oPt=document.querySelector(".positwo");
	var oImgz=document.querySelector(".imagexq");
	oTl.onclick=function(){
		oPo.style.display="block";
		oPt.style.display="none";
		oImgz.style.height="5936px";
		oTc.style=background="#333333";
		oTl.className="title-left";
		
	}
	oTc.onclick=function(){
		oPt.style.display="block";
		oPo.style.display="none";
		oImgz.style.height="2694px";
		oTc.style.background="#7F69B3";
		oTl.className="active";
	}
}
