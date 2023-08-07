<?php
$message = $_POST['id'];
$data = array(
'id' => $message
);
$json_data = json_encode($data);
file_put_contents('testing.json', $json_data);
?>
