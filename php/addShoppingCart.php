<?php
	//添加到购物车
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	$goodsCount = $_REQUEST['goodsCount'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsImg = $_REQUEST['goodsImg'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("haier",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$result1 = mysql_query("select * from shoppingcenter where vipName='".$vipName."' and goodsId='".$goodsId."'",$conn);
	//3.1)先查找该商品是否在购物车中存在
	$sqlstr = "";
	if(mysql_num_rows($result1)>0){
		//如果存在，则使用update语句
		$sqlstr = "update shoppingcenter set goodsCount=goodsCount+".$goodsCount." where vipName='".$vipName."' and goodsId='".$goodsId."' and goodsPrice='".$goodsPrice."' and goodsImg='".$goodsImg."'";
	}else{
		//如果不存在，则使用insert语句	
		$sqlstr = "insert into shoppingcenter values('".$goodsId."','".$vipName."','".$goodsCount."','".$goodsPrice."','".$goodsImg."')";		
	}
	
	$result=mysql_query($sqlstr,$conn);	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	if(!$result){
		die("添加失败".mysql_error());
	}	
	
	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result>0){
		echo 1;	
	}else{
		echo 0;
	}
?>