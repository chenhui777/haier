
// toutou
$(function(){
	$("#remove").click(
	function(){
		$(".TT").css({
			"display":"none"
		})
	}
		
	)
})



//顶顶
$(function(){
	$(".head-b ul li a").hover(
		function(){
			$(this).css({
				"color":"#2979ff"
			})
			$(".deng").css({
				"color":"white"
			})
		},
		function(){
			$(this).css({
				"color":"#999"
			})
			$(".deng").css({
				"color":"white"
			})
		}
	)
})

$(function(){
	$(".pigs").hover(
		function(){
			$(".pigss").css({
				"display":"block"
			})
		},
		function(){
			$(".pigss").css({
				"display":"none"
			})
		}
		
	)
	
})


//input的框框
$("#redian").focus(function(){
	$(this).val("")
	$(".uls").css({
		"display":"block"
	})
})
$("#redian").blur(function(){
	$(this).val("【今日值得买】")
	$(".uls").css({
		"display":"none"
	})
})


//input框框下的a标签
$(function(){
	$(".h1-c .form-b a").hover(
		function(){
			$(this).css({
				"color":"#2979ff"
			})
			
		},
		function(){
			$(this).css({
				"color":"#999"
			}),
			$(".h1-c .form-b .xsms").css({
				"color":"#2979ff"
			})
			
		}
	)
})


//购物车框框
$(function(){
	$(".h1-r").hover(
		function(){
			$(".shop").css({
				"border-bottom":"transparent"
			})
			$(".car").css({
				"background-position":"-99px -231px"
			})
			$(".shop a").css({
				"color":"#2979ff"
			})
			$(".shopping").css({
				"display":"block",
				"border-top":"transparent"
			})
			},
		function(){
			$(".shop").css({
				"border-bottom":"1px solid #eaeaea"
			})
			$(".car").css({
				"background-position":"-75px -232px"
			})
			$(".shop a").css({
				"color":"black"
			})
			$(".shopping").css({
				"display":"none",
				"border-top":"transparent"
			})
		}
		)
})



//下拉列表
$(function(){
	$(".nav-main ul .hav").hover(
		function(){
			$(this).css({
				"background":"rgba(225, 225, 225)"
			})
			$(this).find("a").css({
				"color":"#000"
			})
			$(this).find(".nono").css({
				"display":"block"
			})
		},
		function(){
			$(this).css({
				"background":"rgba(0, 0, 0, 0)"
			})
			$(this).find("a").css({
				"color":"white"
			})
			$(this).find(".nono").css({
				"display":"none"
			})
		}
	)
})

//nono-l

$(function(){
	$(".nono-l ul li a").hover(
		function(){
			$(this).find("span").css({
				"color":"#2979ff"
			})
		},
		function(){
			$(this).find("span").css({
				"color":"black"
			})
		}
	)
})

$(function(){
	$(".nono-r ul li a").hover(
		function(){
			$(this).find(".name,.price").css({
				"color":"#2979ff"
			})
		},
		function(){
			$(this).find(".name,.price").css({
				"color":"black"
			})
		}
	)
})

// 轮播图右侧

$(function(){
	$(".ff-p1 a").hover(
		function(){
			$(this).find(".vip2").css({
				"background-position":"-36px -73px"
			})
			$(this).find(".vip1").css({
				"background-position":"-36px -40px"
			})
			$(this).find("span").css({
				"color":"#2979ff"
			})
		},
		function(){
			$(this).find(".vip2").css({
				"background-position":"0px -73px"
			})
			$(this).find(".vip1").css({
				"background-position":"0px -40px"
			})
			$(this).find("span").css({
				"color":"#666"
			})
		}
	
	)
	
})
//精品推荐 
 
 $(function(){
	$(".produ .pro").hover(
		function(){
			$(this).css({
				"background-position":"right top"
			})
		},
		function(){
			$(this).css({
				"background-position":"left top"
			})
	}	
	
	)
		
})

//精品推荐 .wor-b-r

$(function(){
	$(".wor-b .wor-b-r").hover(
		function(){
			$(this).css({
				"background-position":"right top"
			})
		},
		function(){
			$(this).css({
				"background-position":"left top"
			})
		}
	)
})


$(function(){
	$(".wor-b ul li .images1").hover(
		function(){
			$(this).css({
				"background-position":"left top"
			})
		},
		function(){
			$(this).css({
				"background-position":"right top"
			})
		}
	)
})

$(function(){
	$(".new ul li a").hover(
		function(){
			$(this).find("i .imge3").animate({
				right:"3px"
			},300)
			$(this).find("i .imge4").animate({
				right:"3px"
			},300)
			$(this).find("p span").css({
				"color":"#2979ff"
			})
// 			$(this).find(".imge1").animate({
// 				right:"213px"
// 			},300)
// 			$(this).find(".imge2").animate({
// 				right:"3px"
// 			},300)
		},
		function(){
			$(this).find("i .imge3").animate({
				right:"-3px"
			},300)
			$(this).find("i .imge4").animate({
				right:"-3px"
			},300)
			$(this).find("p .sp1").css({
				"color":"#666"
			})
			$(this).find("p .sp2").css({
				"color":"#999"
			})
// 			
		}
	)
	
})
//
$(function(){
	$(".new-b .nn-l").hover(
	function(){
		$(this).find(".imge1").animate({
			left:"-3px"
		},300)
// 		$(this).find(".imge2").animate({
// 			right:"3px"
// 		},300)
	},
	function(){
		$(this).find(".imge1").animate({
				left:"0px"
			},300)
// 			$(this).find(".imge2").animate({
// 				right:"0px"
// 			},300)
	}
		
	)
})

//
$(function(){
	$(".new-b .nn-r").hover(
	function(){
		$(this).find(".imge2").animate({
			right:"-187px"
		},300)
// 		$(this).find(".imge2").animate({
// 			right:"3px"
// 		},300)
	},
	function(){
		$(this).find(".imge2").animate({
				right:"-190px"
			},300)
// 			$(this).find(".imge2").animate({
// 				right:"0px"
// 			},300)
	}
		
	)
})

$(function(){
	$(".custom .lis1 a").hover(
		function(){
			$(this).find(".imge6").animate({
				right:"3px"
			})
			$(this).find(".like").css({
				"color":"#2979ff",
				"border-color":"#2979ff"
			})
		},
		function(){
			$(this).find(".imge6").animate({
				right:"0px"
			})
			$(this).find(".like").css({
				"color":"#9aa76f",
				"border-color":"#9aa76f"
			})
		}
	)
	
})


// 帮您选
$(function(){
	$(".choose ul li a").hover(
	function(){
		$(this).find("span").css({
			"color":"#2979ff"
		})
		$(this).find("p").css({
			"color":"#2979ff"
		})
	},
	function(){
		$(this).find("span").css({
			"color":"#666"
		})
		$(this).find("p").css({
			"color":"#999"
		})
		}
	)	
})

$(function(){
	$(".product ul li").hover(
		function(){
			// s$(".product").find("a").css({"color":"#666"});
			$(this).find("a").css({"color":"#2979ff"})
			$(this).css({"border-bottom-color":"#2979ff"})
			let index = $(this).index();
			if(index == 0){
				$(this).find("i").css({"background-position":"-26px -410px"})

			}else if(index == 1){
				$(this).find("i").css({"background-position":"0px -410px"})

			}else if(index == 2){
				$(this).find("i").css({"background-position":"-74px -410px"})
			}else if(index == 3){
				$(this).find("i").css({"background-position":"-48px -410px"})

			}else if(index == 4){
				$(this).find("i").css({"background-position":"-100px -410px"})

			}else if(index == 5){
				$(this).find("i").css({"background-position":"-124px -410px"})

			}else if(index == 6){
				$(this).find("i").css({"background-position":"-172px -410px"})

			}else if(index == 7){
				$(this).find("i").css({"background-position":"-48px -410px"})

			}
			
		},
		function(){
			$(".product").find("li").css({"border-bottom-color":"#eaeaea"});
			$(this).find("a").css({
				"color":"#666"
			})
			
			
			let index = $(this).index();
			if(index == 0){
				$(this).find("i").css({"background-position":"-26px -364px"})
				
			}else if(index == 1){
				$(this).find("i").css({"background-position":"0px -364px"})
			}
			else if(index == 2){
				$(this).find("i").css({"background-position":"-74px -364px"})
			}
			else if(index == 3){
				$(this).find("i").css({"background-position":"-48px -364px"})
			}
			else if(index == 4){
				$(this).find("i").css({"background-position":"-100px -364px"})
			}
			else if(index == 5){
				$(this).find("i").css({"background-position":"-124px -364px"})
			}
			else if(index == 6){
				$(this).find("i").css({"background-position":"-172px -364px"})
			}
			else if(index == 7){
				$(this).find("i").css({"background-position":"-48px -364px"})
			}
		}
	)
})


$(function(){
	$(".none-l-b ul li").hover(
		function(){
			$(this).find("img").animate({
				right:"3px"
			},300)
			$(this).find("a").css({
				"color":"#2979ff"
			})
		},
		function(){
			$(this).find("img").animate({
				right:"0px"
			},300)
			$(this).find("a").css({
				"color":"#666"
			})
		}
	)
})

$(function(){
	$(".none-1 .none-1-l").hover(
		function(){
			$(this).find("img").animate({
				right:"3px"
			},300)
		},
		function(){
			$(this).find("img").animate({
				right:"0px"
			},300)
		}
	)
})


$(function(){
	$(".album .product ul li").mouseenter(
		function(){
			if($(this).index() == 0){
				
				$(this).css({"border-bottom-color":"#2979ff"})
				$(".none-1").css({"z-index":1})
				$(".none11").css({"z-index":3})
			}
			else if($(this).index() == 1){
				$(".none-1").css({"z-index":1})
				$(".none12").css({"z-index":3})
			}
			else if($(this).index() == 2){
				$(".none-1").css({"z-index":1})
				$(".none13").css({"z-index":3})
			}
			else if($(this).index() == 3){
				$(".none-1").css({"z-index":1})
				$(".none14").css({"z-index":3})
			}
			else if($(this).index() == 4){
				$(".none-1").css({"z-index":1})
				$(".none15").css({"z-index":3})
			}
			else if($(this).index() == 5){
				$(".none-1").css({"z-index":1})
				$(".none16").css({"z-index":3})
			}
			else if($(this).index() == 6){
				$(".none-1").css({"z-index":1})
				$(".none17").css({"z-index":3})
			}
// 			else if($(this).index() == 7){
// 				$(".none-1").css({"z-index":1})
// 				$(".none18").css({"z-index":3})
// 			}
		},
	)
})

// 为你推荐

$(function(){
	$(".recom-b ul li").hover(
		function(){
			$(this).find(".re-a1 img").animate({top:"-4px"})
		},
		function(){
			$(this).find(".re-a1 img").animate({top:"0px"})
		}
	)
})


$(function(){
	$(".back-top a").hover(
		function(){
			$(this).find(".a1").css({"background-position":" -150px -287px"})
			$(this).find(".a2").css({"background-position":" -150px -148px"})

		},
		function(){
			$(this).find(".a1").css({"background-position":" -150px -236px"})
			$(this).find(".a2").css({"background-position":" -150px -190px"})
		}
	)
})




$(".back-top a .a2").click(
	function(){
		$("html,body").animate({"scrollTop":"0"},600)
	}
)
	
	

