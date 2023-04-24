<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $send_copy = isset($_POST["send_copy"]) ? true : false;

    $to = "taha.ahmed1786@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: " . $email . "\r\n" . "Reply-To: " . $email . "\r\n" . "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        if ($send_copy) {
            mail($email, $subject, $message, $headers);
        }
        header("Location: success.html"); // Replace 'success.html' with the path to your success page
    } else {
        header("Location: error.html"); // Replace 'error.html' with the path to your error page
    }
}
?>
