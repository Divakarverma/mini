<?php
// Database configuration
$server = "localhost"; // Default XAMPP server
$username = "root";    // Default MySQL user
$password = "";        // No password by default
$database = "institute_registration";

// Connect to MySQL
$conn = new mysqli($server, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];
    $email = $_POST['email'];

    // SQL query to insert data into the table
    $sql = "INSERT INTO registrations (name, mobile, address, email) 
            VALUES ('$name', '$mobile', '$address', '$email')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
