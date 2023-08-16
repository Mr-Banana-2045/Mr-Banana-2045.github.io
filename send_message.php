
<?php
    if (isset($_POST["message"])) {
        $message = $_POST["message"];
        $username = "User"; // نام کاربر را می‌توانید با استفاده از متغیرهای دیگر تعیین کنید
        $data = file_get_contents("messages.json");
        $messages = json_decode($data, true);
        $newMessage = array("username" => $username, "message" => $message);
        $messages[] = $newMessage;
        file_put_contents("messages.json", json_encode($messages));
        echo "Message sent successfully!";
    }
?>
