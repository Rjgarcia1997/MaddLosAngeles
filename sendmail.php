<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];

  $to = "robertjgarcia323@gmail.com";
  $subject = "New Registration";
  $body = "Name: $name\nEmail: $email";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Registration successful!";
  } else {
    echo "Failed to send email.";
  }
}
?>