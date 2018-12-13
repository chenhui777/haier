<?php
    header("Content-Type:text/html;charset=utf-8");
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）

    $conn = mysql_connect("localhost","root","root");

    if(!mysql_select_db("haier",$conn)){
        die("数据库选择失败".mysql_error());
    }

    $sqlstr = "select * from goodslist order by goodsId";
    $result = mysql_query($sqlstr,$conn);
    if(!$result){
        die("获取数据失败".mysql_error());
    }
    //查询列数
    $query_cols = mysql_num_fields($result);
    //查询行数
    $query_num = mysql_num_rows($result);
	//echo "行数：".$query_num;

    $str="["

    $query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
    while($query_row){
        $str = $str.'{ "goodsUrl":"'.$query_row[0].'", "goodsTitle":"'.$query_row[1].'", "goodsPrice":"'.$query_row[2].'", "goodsDetail":"'.$query_row[3].'", "goodsId":"'.$query_row[4].'"}';
        $query_row = mysql_fetch_array($result);

        if($query_row){
            $str = $str.",";
        }
    }
    $str = $str."]";
    //4关闭数据库
    mysql_close($conn);
	//3、给客户端返回商品的json数组！

    echo $str;
?>