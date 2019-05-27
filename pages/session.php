<?php
session_start();

$id = ($_POST['idutente']);
$nome=($_POST['nome']);
$cognome=($_POST['cognome']);
$email=($_POST['email']);

$_SESSION['utente']['matr']= $id;
$_SESSION['utente']['nome']=$nome;
$_SESSION['utente']['cognome']=$cognome;
$_SESSION['utente']['email']=$email;
return  $response = $id;
?>