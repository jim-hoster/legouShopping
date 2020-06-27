<?php
	// 借款
	include 'conn.php';
	include 'cross.php';
	header('Content-Type: text/html;charset=utf-8'); 

	$userid = $_POST['acc'];	//借款人用户名
	$borrowmoney = $_POST['borrowmoney'];	//借款金额
	$interest = $_POST['interest'];	//借款利息
	$borrowtime = $_POST['borrowtime'];	//借款期限 单位：月
	$repaytype = $_POST['repaytype'];	//还款方式 0：按月分期 1：按月到期
	$minbid = $_POST['minbid'];		//最小投标
	$bouns = $_POST['bouns'];		//投标奖金
	$days = $_POST['days'];			//招标天数（在网站上挂多少天）
	$title = $_POST['title'];		//借款标题
	$info = $_POST['info'];			//借款描述
	
	

	//拼接sql语句
	$sql = "INSERT INTO borrow(userid,borrowmoney,interest,minbid,days,title,info,borrowtime,repaytype,bouns) VALUES('$userid','$borrowmoney','$interest','$minbid','$days','$title','$info','$borrowtime',$repaytype,$bouns)";

	//执行sql语句
	$data = mysqli_query($conn,$sql );
	if($data){
		echo 'ok';
	}else{
		echo 'fail';
	}

?>