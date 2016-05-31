$(function(){
	/*slider START*/
	listcount=$(".historySlider .sliderNav li").length;
	countslide=clickDouble=0;
	$(".historySlider .sliderimgBlock").css({"width":listcount*576+"px"});
	sliderInterval="";
	function slideInterval(nslide){
		sliderInterval=setInterval(function(){
			nslide++;
			$(".sliderNav li").removeClass("activeNav");
			(nslide==listcount)?rslide=nslide=0:rslide="-=576";
			$(".sliderimgBlock").animate({left: rslide+"px"},"slow")
			.next(".sliderNav").children("li:nth-child("+(nslide+1)+")").addClass("activeNav");
		},3000);
	}slideInterval(countslide);
	$(".sliderNav li").click(function(){
		if(!clickDouble){
			clickDouble=1;
			$(".sliderNav li").removeClass("activeNav");
			dataNumber=$(this).addClass("activeNav").attr("data-number");
			$(".sliderimgBlock").animate({left: -dataNumber*576+"px"},"slow");
			clearInterval(sliderInterval);slideInterval(dataNumber);
			setTimeout(function(){clickDouble=0},3000);
		}
	});
	/*slider END*/
	$(window).scroll(function(){
		scrollTop=$(window).scrollTop()+64;
		if(scrollTop>=1110 && scrollTop<2260)scrEff("Nav80s");
		else if(scrollTop>=2260 && scrollTop<3270)scrEff("navs81");
		else if(scrollTop>=3270 && scrollTop<4070)scrEff("NavGeoLab");
		else if(scrollTop>=4070 && scrollTop<5070)scrEff("NavSocial");
		else scrEff("NavHome");
	});
	/*popUps START*/
	$(".siteInfo,.closesvg").click(function(){
		$(".infoBlock").fadeToggle("slow");
		$("body").toggleClass("hide");
	});
	$(".sharebutton,.closeShare").click(function(){
		$(".shareBlock").fadeToggle("slow");
		$("body").toggleClass("hide");
	});	
	/*popups END*/
});
/*scrollbar start*/
var topContent,the80s,scrClick=1;
function countsize(){
	 the80s=$(".topContent").outerHeight(true)-64;
	 the81s=$(".the80s").outerHeight(true)+the80s;
	 geolab=$(".the81s").outerHeight(true)+the81s;
	 contactUs=$(".geolab").outerHeight(true)+geolab;
	 sitebottom=$("body").outerHeight(true);
	 mas=new Array(0,the80s,the81s,geolab,contactUs,sitebottom);//scrollbar sizes			
}	
function scrollbar(thiss,number){
	countsize();
	$("html,body").animate({scrollTop:mas[number]},1000);
	$(".NavRightSlider > li span").removeClass("navActive");
	if(thiss=="scrollDown"){
		$(".Nav80s > span").addClass("navActive");
		$(".Nav80s .navChildren").slideDown("slow");
	}
	else if(thiss=="slidearrow"){
		$(".Nav80s .navChildren").slideDown("slow").find(".navs81 span").addClass("navActive");
	}
	else if(thiss=="sitebottom"){
		$(".NavSocial span").addClass("navActive");
	}
	else{
		$(thiss).addClass("navActive");	
		if($(thiss).hasClass("haschildren") || $(thiss).parents("ul").attr("class")=="navChildren")
			$(thiss).next(".navChildren").slideDown("slow");
		else $(".navChildren").slideUp("slow");
	}
	scrClick=0;setTimeout(function(){scrClick=1},2000);
}
function scrEff(addclass){
	if(scrClick){
		$(".NavRightSlider li span").removeClass("navActive");
		$(".NavRightSlider ."+addclass+" > span").addClass("navActive");
		if($("."+addclass+" span").hasClass("haschildren"))$("."+addclass+" .navChildren").slideDown("slow");
		else if($("."+addclass).parents('.navChildren').length)$("."+addclass).parents('.navChildren').slideDown("slow");
		else $(".navChildren").slideUp("slow");
		scrClick=1;
	}
}
/*scrollbar end*/
