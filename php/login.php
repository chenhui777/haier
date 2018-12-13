
<?php
  header("Content:text/html; charset=utf-8");
		$username = $_GET['username'];
		// $phone = $_GET['phone'];
		// $password = $_POST
		
		$con = mysql_connect("localhost","root","root");
		if(!$con){
			echo "连接数据库失败";
			mysql_close($con);
		}else{
			mysql_select_db("haier",$con);
			$sqlstr = "select * from login where username='$username'";
			$result = mysql_query($sqlstr,$con);
			$rows = mysql_num_rows($result);
			mysql_close($con);
			if($rows == 0){
				//说明数据库里没有
				echo "0";
			}else{
				echo "1";
			}
		}
?>
