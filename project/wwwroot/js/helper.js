//get petition information from server
$(document).ready(function () {
    // Assuming there's an array of posts in the backend (replace with your data fetching logic)
    const posts = [
        { title: "Post 1 Title", description: "Post 1 Description", image: "image1.jpg" },
        // Add more post objects here
    ];

    // Function to create a post card element
    function createPostCard(post) {
        const card = $('<div>').addClass('card mb-3');

        const cardImage = $('<img>').addClass('card-img-top').attr('src', post.image).attr('alt', 'Post Image');
        card.append(cardImage);

        const cardBody = $('<div>').addClass('card-body');

        const cardTitle = $('<h5>').addClass('card-title').text(post.title);
        const cardText = $('<p>').addClass('card-text').text(post.description);
        const readMoreButton = $('<a>').addClass('btn btn-primary').text('Read More').attr('href', '#'); // Change to appropriate link

        cardBody.append(cardTitle, cardText, readMoreButton);
        card.append(cardBody);

        return card;
    }
    // Loop through posts and append card elements
    $.each(posts, function (index, post) {
        const postCard = createPostCard(post);
        $('#posts-container').append(postCard);
    });
});

//validate login informations
function validateEmailAndPassword() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    //regex for email and password
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])\.{8,}$/;
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    let isValid = true;
    // Email validation
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
        alert('Please enter a valid email address.');
    }
    // Password validation
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('error');
        isValid = false;
        alert('Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    return isValid;
}