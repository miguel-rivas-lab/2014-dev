<?php

	date_default_timezone_set('America/Santo_Domingo');
	$con = date('H');

	switch($con)
	{
		case (($con>=0) && ($con<=5)):
		?> <link rel="stylesheet" href="css/skinDragon.css"> <?php
		break;

		case (($con>=6) && ($con<=16)):
			?> <link rel="stylesheet" href="css/skinUnderwater.css"> <?php
		break;

		case (($con>=17) && ($con<=21)):
			?> <link rel="stylesheet" href="css/skinDragonNight.css"> <?php
		break;

		default:
			?> <link rel="stylesheet" href="css/skinDragonNight.css"> <?php
	}

?>