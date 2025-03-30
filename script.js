function addBook() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const year = document.getElementById('year').value;
    const pages = document.getElementById('pages').value;

    // Send the data to add_book.php via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_book.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Debugging the request
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Response from PHP: " + xhr.responseText); // Check PHP response
                alert("Book added successfully!");
                document.getElementById("addBookForm").reset();
            } else {
                console.error("Request failed with status: " + xhr.status);
                alert("Failed to add the book.");
            }
        }
    };

    // Debugging the data being sent
    const data = `username=${username}&title=${title}&author=${author}&publisher=${publisher}&year=${year}&pages=${pages}`;
    console.log("Sending data: " + data); // Log data being sent
    xhr.send(data);
}
