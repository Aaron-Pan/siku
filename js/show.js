window.onload=function(){
	//全选部分
var oall=document.querySelectorAll(".all");
//console.log(oall);
var oCheck=document.querySelectorAll(".centercheck");
oall[0].onclick=function(){
	for(let i=0;i<oCheck.length;i++){
	if(this.checked)
	{
		oCheck[i].checked=true;
	}
	else{
		oCheck[i].checked=false;
	}
	}
		var s=0;
		for(let u=0;u<oCheck.length;u++)
{		if(oCheck[u].checked)
		{
			var a=Number(oSz[u].value)*1000 ;
			var c=parseFloat((price[u].innerHTML));
			
			s=s+a*c;
			oPP.innerHTML=s+".00";
		}
		else{
			s=s;
			oPP.innerHTML=s+".00";
		}
		}
}
oall[1].onclick=function(){
	
	for(let i=0;i<oCheck.length;i++){
	if(this.checked)
	{
		oCheck[i].checked=true;
	}
	else{
		oCheck[i].checked=false;
	}
	}
		var s=0;
		for(let u=0;u<oCheck.length;u++)
{		if(oCheck[u].checked)
		{
			var a=Number(oSz[u].value)*1000 ;
			var c=parseFloat((price[u].innerHTML));
			
			s=s+a*c;
			oPP.innerHTML=s+".00";
		}
		else{
			s=s;
			oPP.innerHTML=s+".00";
		}
		}
}


//商品数量部分
var oSl=document.querySelectorAll(".sl");
var oSll=document.querySelectorAll(".sll");
var oSz=document.querySelectorAll(".sz");
var oTip=document.querySelectorAll(".tip");
var oTip1=document.querySelector(".tip1");
var oSure1=document.querySelectorAll(".sure1");
var oSure=document.querySelectorAll(".sure");
var price=document.querySelectorAll(".font11");
var zony=document.querySelectorAll(".fontt");
var oDel=document.querySelectorAll(".left6 p");
console.log(zony)
for(let j=0; j<oSl.length;j++)
{
	oSl[j].onclick=function(){
		
		if(oSz[j].value==1)
		{
			oTip[j].style.display="block";
		}
		else
		{
			oSz[j].value--;
			var a=Number(oSz[j].value) ;
			var c=parseFloat((price[j].innerHTML));
//			console.log(a,c);
			zony[j].innerHTML="￥"+a*c+"000";
		
		}
		
	}
	oSll[j].onclick=function(){
		
		
			oSz[j].value++;
			var a=Number(oSz[j].value) ;
			var c=parseFloat((price[j].innerHTML));
//			console.log(a,c);
			zony[j].innerHTML="￥"+a*c+"000";
		
	}
	
	oSure1[j].onclick=function(){
	var Kuang=oSure1[j].parentNode;
//	console.log(Kuang);
	Kuang.style.display="none";
}
	oSure[j].onclick=function(){
		var Alist=oSure1[j].parentNode.parentNode.parentNode;
//		console.log(Alist);
		Alist.parentNode.removeChild(Alist);
		
	}
	oDel[j].onclick=function(){
		var dels=oDel[j].parentNode.parentNode;
//		console.log(dels);
		dels.parentNode.removeChild(dels);
		
		
	}
	
}
var oPP=document.querySelector(".prices1");
for(let o=0;o<oCheck.length;o++)
{
	oCheck[o].onclick=function(){
		var s=0;
		for(let u=0;u<oCheck.length;u++)
{		if(oCheck[u].checked)
		{
			var a=Number(oSz[u].value)*1000 ;
			var c=parseFloat((price[u].innerHTML));
			
			s=s+a*c;
			oPP.innerHTML=s+".00";
		}
		else{
			s=s;
			oPP.innerHTML=s+".00";
		}
		}
	}
	
}
var oFonts=document.querySelector(".fonts");
var erzi=oFonts.children[0];
console.log(erzi);
oFonts.onmouseenter=function(){
	this.style.color="red";
	erzi.setAttribute("src","../siku/c_061.png");
}
oFonts.onmouseleave=function(){
	this.style.color="#666666";
	erzi.setAttribute("src","../img/sssss_11.png");
}
var oSure2=document.querySelector(".sure2");
var oSure3=document.querySelector(".sure3");
var oShu=document.querySelector(".zhi");
oFonts.onclick=function(){
	oTip1.style.display="block";
	var sum=0;
		for(let b=0;b<oCheck.length;b++)
		{
			if(oCheck[b].checked){
				sum++;
			}
		}
		console.log(sum);
		oShu.innerHTML=sum;
}
oSure3.onclick=function(){
	var Ku=oSure3.parentNode;
//	console.log(Kuang);
	Ku.style.display="none";
}
oSure2.onclick=function(){
	for(let k=0;k<oCheck.length;k++){
	if(oCheck[k].checked)
	{
		var delss=oCheck[k].parentNode.parentNode;
//		console.log(dels);
		delss.parentNode.removeChild(delss);
		
		
	}
	var Ku=oSure3.parentNode;
//	console.log(Kuang);
		Ku.style.display="none";
	}
	
}





}