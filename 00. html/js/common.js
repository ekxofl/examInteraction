// var menuOver=null;
// var menuOverTime=1000;
$(function(){
	$('header nav .icon').bind("click", function(){
		if($("header").hasClass("is-mobile-menu")){
			if($('header').hasClass("active")){
				mobileMenu(0);
			}else{
				mobileMenu(1);
			}
		}
	});

	$("header .gnb > li > a").bind("click", function(e){
		
		var $this = $(this), $child = $this.siblings("ul.gnb_depth2");
		if($("header").hasClass("is-mobile-menu")){
			e.preventDefault();
			$("header .gnb > li").removeClass("m_click")
			if($child.length > 0 && !$child.is(":visible")){
				$child.slideDown(300);
				$this.parent().addClass("m_click")
				$("header .gnb_depth2").not($child).slideUp(300);
			} else {
				$child.slideUp(300);
				
			}
		}
	});

	$(window).resize(function(){
		if($(window).width() <= 1024 || $(window).height() <= 640){
			$("header").addClass("is-mobile-menu");
		} else {
			$("header").removeClass("is-mobile-menu");
			$("header .gnb_depth2").removeAttr("style");
		}
	});

	if($(window).width() <= 1024 || $(window).height() <= 640){
		$("header").addClass("is-mobile-menu");
	}
});

function mobileMenu(p){
	if($("header").hasClass("is-mobile-menu")){
		if(p === 1){
			$('header').addClass("active");
			$('header nav > ul').addClass("active");
				$("header .gnb > li").each(function(i){
					if($(this).hasClass("active")){
						$(this).addClass("m_click");
						$("ul.gnb_depth2", this).slideDown(0);
					}
				});
		} else {
			$('header').removeClass("active");
			$("header .gnb > li > ul.gnb_depth2").slideUp(0);
			$("header .gnb > li").removeClass("m_click")
			$('header nav > ul').removeClass("active");
		}
	}
}
