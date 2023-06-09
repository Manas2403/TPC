<?php
require "./PHPMailer/src/PHPMailer.php";
require "./PHPMailer/src/SMTP.php";
require "./PHPMailer/src/Exception.php";
use PHPMailer\PHPMailer\PHPMailer;
function sendEmail($from, $name, $message,$company,$mobile,$designation)
{ 
    echo $from;
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "kapoorraghav944@gmail.com";
    $mail->Password = "wjcnhyovssbkiffo";
    $mail->Port = 587;
    $mail->setFrom('kapoorraghav944@gmail.com', 'Placement Cell Website');
    $mail->addAddress("placements@iiita.ac.in");
    $mail->Subject = "New response from $company";
    $mail->isHTML(true);
    $mail->Body = "New message from <a href='mailto:$from'>$company</a> Sent by $name (Designation: $designation, Mobile: $mobile):<br/>
$message
    ";
    if ($mail->send()) {
        echo 'Message has been sent';
        header("Location: email.html");
    } else {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
session_start();
if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['company']) && !empty($_POST['company'])&&isset($_POST['mobile']) && !empty($_POST['mobile'])&&isset($_POST['designation']) && !empty($_POST['designation'])&& isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['message']) && !empty($_POST['message'])){
    $company=$_POST['company'];
    $mobile=$_POST['mobile'];
    $name=$_POST['name'];
    $mail=$_POST['email'];
    $designation=$_POST['designation'];
    $message=$_POST['message'];
    sendEmail($mail,$name,$message,$company,$mobile,$designation);
}
?>