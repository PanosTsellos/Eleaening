<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

// connect to the database
$db = new PDO('sqlite:GreekLearner/api/db/learn.db');
// retrieve the form data
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$name=$_POST['name'];
$status=$_POST['status'];
$user_type=$_POST['user_type'];

//hash password
$encryptedPassword = password_hash($password, PASSWORD_DEFAULT);
// insert the new user into the database
//These are the default values of the user who is registering and the details he inserted.
$approved = "approved";
$user = "user";

$stmt = $db->prepare('INSERT INTO account (username, password, email,name,status,user_type) 
VALUES (:username, :password, :email, :name, :status, :user_type)');
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $encryptedPassword);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':status', $approved);
$stmt->bindParam(':user_type', $user);
$stmt->execute();
?>
