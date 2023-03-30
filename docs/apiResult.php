<?php
error_reporting(0);

$version = "1.1";
$versionIntro = "百利甜了咩"; //支持html代码
$versionUrl = "";
$versionCode = 11;

//公告，支持html代码

$announcement = "test";


if(isset($_GET['update'])){
	$result=array(
    'version'=>$version,
    'versionIntro'=>$versionIntro,
    'versionUrl'=>$versionUrl,
	'versionCode'=>$versionCode,
	'announcement'=>$announcement
   );
   //输出json
   echo json_encode($result);
}
?>