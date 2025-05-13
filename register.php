<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані з форми
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Створюємо рядок з даними
    $data = "Name: " . $name . "\n";
    $data .= "Email: " . $email . "\n";
    $data .= "Password: " . $password . "\n";
    $data .= "Registration Date: " . date('Y-m-d H:i:s') . "\n";
    $data .= "----------------------------------------\n";
    
    // Шлях до файлу
    $file = 'registrations.txt';
    
    // Зберігаємо дані у файл
    file_put_contents($file, $data, FILE_APPEND);
    
    // Перенаправляємо на сторінку успішної реєстрації
    header("Location: registration_success.html");
    exit();
}
?>
