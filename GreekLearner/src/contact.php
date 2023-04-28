<?php
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server

    // extract the data from $_POST
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

    if($name && $message && $email){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'panagiotistsellos2002@gmail.com';           // SMTP username
            $mail->Password   = 'bdrfrdkrtkmylgon';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('panagiotistsellos2002@gmail.com', 'React Contact form');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('panagiotistsellos2002@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'React Contact form';
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;

            
            if($mail->send())
            
            try {
                // Open a connection to the SQLite database
                $db = new PDO('sqlite:GreekLearner/api/db/learn.db');

                // Prepare the INSERT statement
                $stmt = $db->prepare('INSERT INTO contactus (name, email, message) VALUES (:name, :email, :message)');

                if ($stmt !== false) {
                    // Bind the email data to the parameters in the INSERT statement
                    $stmt->bindParam(':name', $name);
                    $stmt->bindParam(':email', $email);
                    $stmt->bindParam(':message', $message);

                    // Execute the INSERT statement
                    if ($stmt->execute()) {

                        echo "Email data inserted successfully";
                    } else {
                        echo "Error inserting email data: " . $stmt->errorInfo()[2];
                    }
                } else {
                    echo "Error preparing SQL statement: " . $db->errorInfo()[2];
                }

                // Close the database connection
                $db = null;
            } catch (PDOException $e) {
                echo "Error connecting to database: " . $e->getMessage();
            }

            echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }

