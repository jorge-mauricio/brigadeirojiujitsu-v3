<?php
//DB System.
//**************************************************************************************
$dbSystemHost = "dbmysqlw16cont01.sistemadinamico.com.br";
$dbSystemDataBase = "rel_db_bjj";
$dbSystemUser = "brigadeiro";
$dbSystemPassword = "bRigad#0310";


//PDO - Connection for various types of data bases.
//PHP 7.1 - tested.
try
{
    $dbSystemConPDO = new PDO("mysql:host=" . $dbSystemHost . ";dbname=" . $dbSystemDataBase . "", $dbSystemUser, $dbSystemPassword);
    $dbSystemConPDO->exec("set names utf8");
    $dbSystemConPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Show errors.
}catch(PDOException $DBSystemErrorPDO) {
    //print "Error!: " . $erroDBPDO->getMessage() . "<br/>";
    die("DB Error: " . $DBSystemErrorPDO->getMessage() . "<br />");
}
//**************************************************************************************
?>