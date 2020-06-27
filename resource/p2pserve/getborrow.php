<?php
	//获取借款列表
	include 'conn.php';
	include 'cross.php';
	header('Content-Type: text/html;charset=utf-8'); 

	$page = $_GET['page'];	//第几页
	$line = $_GET['row'];	//显示的行数

	$start = ( $page - 1 ) * $line;

	//拼接sql语句
	$sql = "SELECT * FROM borrow LIMIT $start, $line";
	//执行sql语句
	$data = mysqli_query($conn,$sql);
	
	$sqlALL = "SELECT * FROM borrow";
	$data2 = mysqli_query($conn,$sqlALL);
	$total = mysqli_num_rows($data2);
	
	

	//不要使用mysqli_fetch_all因为格式不对！！需要手动循环获取数据
	$arr = [];
	while($row=mysqli_fetch_assoc($data)){
		array_push($arr, $row);
	}
	
	$rst = new stdClass();
	$rst->total = $total;
	$rst->list = $arr;
	
	echo json_encode($rst);

?>

