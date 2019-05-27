<?php
session_start();

if (empty($_SESSION['utente']))
    header("location: ./index.php");

?>