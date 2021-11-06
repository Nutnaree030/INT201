<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Contest Result</title>
		<style>
			body {
				background-color: coral;
			}
			h1 {
				color: green ;
			}
			h2 {
				color: purple ;
			}
		</style>
	</head>
	<body>
		<h1>THANK YOU</h1>
		<hr>
		<p>Thank you for entering the Forcefield Sneaker "Pimp My Shoe" contest. We have received the following information with your entry:</p>
		<h2>About you:</h2>
		<p>
			<b>Name:</b><?php echo $_POST["name"] ; ?><br>
			<b>Email Address:</b><?php echo $_POST["email"] ; ?><br>
			<b>Telephone Number:</b><?php echo $_POST["phone"] ; ?><br>
			<b>Sad shoe story:</b><?php echo $_POST["story"] ; ?>
		</p>
		
		<h2>Your shoe design (if you win)</h2>
		<p>Sorry, we did not receive your information.</p>
			
	</body>
</html>