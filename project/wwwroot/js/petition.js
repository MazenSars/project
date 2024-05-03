const form = document.getElementById('petition-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    let post = {
        "title": document.getElementById("title").value,
        "description": document.getElementById("description").value,
    }
    let jsondata = JSON.stringify(post, null, 2); // Stringify with indentation for readability

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../saveposts.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Data saved successfully!");
            } else {
                console.error("Error saving data:", xhr.statusText);
            }
        }
    };

    xhr.send(jsondata);

    // Simulate a success message
    message.textContent = `Thank you for submitting your petition: "${post.title}"`;
    message.style.color = 'green';

    // Clear the form after successful submission (optional)
    form.reset();
});