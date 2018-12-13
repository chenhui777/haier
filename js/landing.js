
$(function(){
	$("#username").blur(
		function(){
			let pattern1 = /[a-z]{3,6}[\w]{2,6}/i;//正则 用户名

			let username = $("#username").val();
			if(username == ""){
				$(".p7").html("用户名不能为空");
				console.log(username);
			}else{
				if(pattern1.test(username)){
					$.ajax({
						type:"post",
						url:"../php/login1.php",
						async:true,
						data:{username:username},
						success:function(data){
							console.log(data.length);
							console.log(data);
						if(data == 0){
							$(".p7").html("该用户名不存在，请重新输入或注册")
						}else{
							$(".p7").html("用户名输入正确");
						}
					}
				})
			}
		}
	})
	$("#btn").click(
		function(){
			let username = $("#username").val();
			let password = $("#password").val();

			$.ajax({
				type:"post",
				url:("../php/loginCheck.php"),
				async:true,
				data:{username:username,password:password},
				success:function(data){
					console.log(data.length);
					console.log(data);
					if(data == 1){
						//设置cookie
						setCookie("kk",username,3);
						setCookie("jj",password,3);

						location.href="index.html";
					}else{
						$(".p9").html("用户名密码不正确，请重新输入");
					}
				}
			})
		}
	)
	
})

window.onload= function(){
	let kl=getCookie("kk");
	// let kq=getCookie("jj");
	$(".yong").html("欢迎亲爱的"+kl+"用户   ");
}
