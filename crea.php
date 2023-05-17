<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){

    $text = $_POST['text_to_save'];

    $file = fopen('moz.txt', 'w');

    fwrite($file, $text);

    fclose($file);

    echo "متن با موفقیت ذخیره شد.";

}

?>
