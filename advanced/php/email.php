<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "Message from your portfolio";
$body = "From $name, \n\n$email, \n\n$message";

$to = "vankarwai@gmail.com";

mail($to, $subject, $body);
?>