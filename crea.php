<?php
$file = fopen("moz.txt", "w");
$msg = $_POST['msg'];
fwrite($file, "' . $msg . '");
fclose($file);
?>