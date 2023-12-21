<?php
$thankYou = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "hamadibrahim1117@gmail.com";

    // Set email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        $thankYou = true;
    }
}
header('Location:thank.html')

?>

