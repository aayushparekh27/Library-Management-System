<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and validate input
$username = mysqli_real_escape_string($conn, $_POST['username']);
$title = mysqli_real_escape_string($conn, $_POST['title']);
$author = mysqli_real_escape_string($conn, $_POST['author']);
$publisher = mysqli_real_escape_string($conn, $_POST['publisher']);
$year = (int) $_POST['year'];
$pages = (int) $_POST['pages'];

// SQL query to insert data into Books table
$sql = "INSERT INTO Books (Title, Author, Publisher, PublicationYear, Pages, Status, UserName) 
        VALUES ('$title', '$author', '$publisher', '$year', '$pages', 'Available', '$username')";

// Execute query and check for errors
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
