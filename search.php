
<?php
// خواندن محتوای فایل JSON
$jsonData = file_get_contents("data.json");

// تبدیل محتوای JSON به آرایه
$data = json_decode($jsonData, true);

// دریافت نام فرد از پارامتر درخواست
$name = $_GET["name"];

// جستجو در آرایه برای پیدا کردن اطلاعات فرد با نام مورد نظر
$foundPerson = null;
foreach ($data["people"] as $person) {
  if ($person["name"] === $name) {
    $foundPerson = $person;
    break;
  }
}

// بررسی یافتن یا عدم یافتن فرد
if ($foundPerson) {
  // تبدیل اطلاعات فرد به JSON و ارسال به عنوان پاسخ
  header("Content-Type: application/json");
  echo json_encode($foundPerson);
} else {
  // ارسال پیام خطا به عنوان پاسخ
  header("HTTP/1.1 404 Not Found");
  echo "Person not found";
}
?>
