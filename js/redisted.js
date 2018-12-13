$(function(){
    let pattern1 = /[a-z]{3,6}[\w]{2,6}/i;//正则 用户名
//用户名
        $("#username").blur(
            function(){
				let username = $("#username").val();
				console.log(1)
				console.log(username)
                if(pattern1.test(username)){
					

					$.ajax({
						type:"post",
						url:"../php/login1.php",
						async:true,
						data:{username:username},
						success:function(data){
							console.log(data.length);
							console.log(data);
						if (data = "0"){
							$(".usernameB").html("该用户名可以使用");
						}else{
							$(".usernameB").html("该用户名已存在，请换一个输入");
						} 
						}
					})
                }else{
                    $(".usernameB").html("请输入5-12位的字符");
                }
            }
        )
//密码    
        $("#password").blur(
            function(){
				let pattern3 = /[a-z]{3,8}[\d]{3,8}/ig;//正则判断密码
				let pattern4 = /[\d]{3,8}[a-z]{3,8}/ig;
				let password = $("#password").val();
				console.log(password)
				let str = pattern3.test(password) || pattern4.test(password);
				console.log(str);
                if(str){
					console.log(1)
					$(".passwordB").html("√");
				
                }else{
                    $(".passwordB").html("请输入6-16位密码")
                }
            }
			
        )
    //再次输入密码
    $("#repassword").blur(
        function(){
            if($("#password").val() == $("#repassword").val()){
                $(".repasswordB").html("√");
            }else{
                $(".repasswordB").html("两次输入的密码不一致");
            }
        }
    )
})


// 点即注册之后
$("#btn").click(
	function(){
		let usernameV = $("#username").val();
		let passwordV = $("#password").val();
		let repasswordV = $("#repassword").val();
		if(usernameV == "" || passwordV == ""){
			$(".btnB").html("用户名 密码不能为空")
		}else if(passwordV !== repasswordV){
			$(".btnB").html("两次密码输入不一致")
		}else{
			// alert("success");
			
			$.ajax({
				type:"post",
				url:"../php/insertusername.php",
				async:true,
				data:{username:usernameV,password:passwordV},
				success:function(data){
					console.log(data.length);
					console.log(data);
					if (data = "1"){
						$(".btnB").html("注册成功");
						location.href = "landing.html";
					}else{
						$(".btnB").html("注册失败");
					}
				}
			})
		}
    })