


window.onscroll = function(){ 
	var t = document.documentElement.scrollTop || document.body.scrollTop; 
	if( t <= 615 ) { 
	$(".ce").css("display","none")
	}else { 
		$(".ce").css("display","block") 
		} 
	} 
//侧边栏
$(function(){
	$(".ce ul li").click(
		function(){
			var tt = $(this).index();
			if(tt == 0){
				$("html").scrollTop(670); 
			}else if(tt == 1){
				$("html").scrollTop(1265); 

			}else if(tt == 2){
				$("html").scrollTop(1856); 

			}else if(tt == 3){
				$("html").scrollTop(2450); 

			}else if(tt == 4){
				$("html").scrollTop(3040); 

			}
		}
	)
	
})
// 居家生活
$(function(){
    $(".ulss .liss").click(
        function(){
            $(".liss").css({
                "background-color":"#4439c5",
                "color":"white"
            });
            $(this).css({
                "background-color":"white",
                "color":"#4439c5"
            })
        }
    )
})



$(function(){
	$(".ulss .liss").click(
		function(){
			let index = $(this).index();
			if(index == 0){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl").css({"z-index":"3"})
			}else if(index == 1){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-2").css({"z-index":"3"})
			}else if(index == 2){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-3").css({"z-index":"3"})
			}else if(index == 3){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-4").css({"z-index":"3"})
			}else if(index == 4){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-5").css({"z-index":"3"})
			}else if(index == 5){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-6").css({"z-index":"3"})
			}else if(index == 6){
				$(".create-qq").css({"z-index":"1"})
				$(".createUl-7").css({"z-index":"3"})
			}
		}
	)
})


// 食品生鲜
$(function(){
    $(".ulssa .lissa").click(
        function(){
            $(".lissa").css({
                "background-color":"#4439c5",
                "color":"white"
            });
            $(this).css({
                "background-color":"white",
                "color":"#4439c5"
            })
        }
    )
})


$(function(){
	$(".ulssa .lissa").click(
		function(){
			let index = $(this).index();
			if(index == 0){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa1").css({"z-index":"5"})
			}else if(index == 1){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa2").css({"z-index":"6"})
			}else if(index == 2){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa3").css({"z-index":"3"})
			}else if(index == 3){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa4").css({"z-index":"3"})
			}else if(index == 4){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa5").css({"z-index":"3"})
			}else if(index == 5){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa6").css({"z-index":"3"})
			}else if(index == 6){
				$(".create-aa").css({"z-index":"1"})
				$(".create-aa7").css({"z-index":"3"})
			}
		}
	)
})


// 母婴个护
$(function(){
    $(".ulssb .lissb").click(
        function(){
            $(".lissb").css({
                "background-color":"#4439c5",
                "color":"white"
            });
            $(this).css({
                "background-color":"white",
                "color":"#4439c5"
            })
        }
    )
})


$(function(){
	$(".ulssb .lissb").click(
		function(){
			let index = $(this).index();
			if(index == 0){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb1").css({"z-index":"5"})
			}else if(index == 1){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb2").css({"z-index":"6"})
			}else if(index == 2){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb3").css({"z-index":"3"})
			}else if(index == 3){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb4").css({"z-index":"3"})
			}else if(index == 4){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb5").css({"z-index":"3"})
			}else if(index == 5){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb6").css({"z-index":"3"})
			}else if(index == 6){
				$(".create-bb").css({"z-index":"1"})
				$(".create-bb7").css({"z-index":"3"})
			}
		}
	)
})

// 生活小电
$(function(){
    $(".ulssc .lissc").click(
        function(){
            $(".lissc").css({
                "background-color":"#4439c5",
                "color":"white"
            });
            $(this).css({
                "background-color":"white",
                "color":"#4439c5"
            })
        }
    )
})


$(function(){
	$(".ulssc .lissc").click(
		function(){
			let index = $(this).index();
			if(index == 0){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc1").css({"z-index":"5"})
			}else if(index == 1){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc2").css({"z-index":"6"})
			}else if(index == 2){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc3").css({"z-index":"3"})
			}else if(index == 3){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc4").css({"z-index":"3"})
			}else if(index == 4){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc5").css({"z-index":"3"})
			}else if(index == 5){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc6").css({"z-index":"3"})
			}else if(index == 6){
				$(".create-cc").css({"z-index":"1"})
				$(".create-cc7").css({"z-index":"3"})
			}
		}
	)
})

// 数码3C
$(function(){
    $(".ulssd .lissd").click(
        function(){
            $(".lissd").css({
                "background-color":"#4439c5",
                "color":"white"
            });
            $(this).css({
                "background-color":"white",
                "color":"#4439c5"
            })
        }
    )
})


$(function(){
	$(".ulssd .lissd").click(
		function(){
			let index = $(this).index();
			if(index == 0){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd1").css({"z-index":"5"})
			}else if(index == 1){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd2").css({"z-index":"6"})
			}else if(index == 2){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd3").css({"z-index":"3"})
			}else if(index == 3){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd4").css({"z-index":"3"})
			}else if(index == 4){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd5").css({"z-index":"3"})
			}else if(index == 5){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd6").css({"z-index":"3"})
			}else if(index == 6){
				$(".create-dd").css({"z-index":"1"})
				$(".create-dd7").css({"z-index":"3"})
			}
		}
	)
})