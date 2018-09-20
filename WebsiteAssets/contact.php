<?php
$con = mysqli_connect("localhost", "engbrcdg_hanan", "u5E10@kW_*ns", "engbrcdg_WEBSITE");

//connect to the database

if(!$con){
	die("Connection failed: " . mysqli_connect_error());
}
else{

if(isset($_POST['submit'])){
	$name = mysqli_escape_string($con, $_POST['name']);
	$email = mysqli_escape_string($con, $_POST['email']);
	$message =mysqli_escape_string($con,$_POST['message']);
	///////////
	$name = preg_replace("#[^0-9a-z]#i", "", $name);
	$email = mysqli_real_escape_string($con, $email);
	$message = preg_replace("#[^0-9a-z]#i", "", $message);

	//insert into database

	if($_POST['name'] && $_POST['email'] && $_POST['message']){
		$sql = "INSERT INTO contactus
					(  name , email ,  message )
				VALUES
					('$name','$email','$message')";

		if (mysqli_multi_query($con, $sql)) {
			header('Location:../index.html');
			echo "<script> alert('Success registration'); </script>";
		} else {
			header('Location:../index.html');
			echo "<script> alert('Some thing went wrong <br> Please try again'); </script>";
		}
	}
}
}
?>