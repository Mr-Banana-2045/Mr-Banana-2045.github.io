
<?php
    if (isset($_POST["message"])) {
        $message = $_POST["message"];
        $username = "User"; // نام کاربر را می‌توانید با استفاده از متغیرهای دیگر تعیین کنید
        $file = fopen("messages.txt", "a");
        fwrite($file, $username . ": " . $message . "\n");
        fclose($file);
        echo "Message sent successfully!";
    }
?>
