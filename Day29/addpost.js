document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];
    const username = sessionStorage.getItem('username') || 'Anonymous'; 
    let imageUrl = '';
    const timestamp = new Date().toLocaleString(); // Get current timestamp

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imageUrl = event.target.result;
            savePost(title, content, imageUrl, username, timestamp);
        };
        reader.onerror = function () {
            console.error('Error reading the image file');
            alert('Failed to read the image file. Please try again.');
        };
        reader.readAsDataURL(imageFile);
    } else {
        savePost(title, content, '', username, timestamp);
    }
});

function savePost(title, content, imageUrl, username, timestamp) {
    try {
        // Retrieve existing posts from localStorage
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        
        // Create new post object
        const newPost = {
            title: title,
            content: content,
            image: imageUrl,
            username: username,
            timestamp: timestamp
        };

        // Add new post to posts array
        posts.push(newPost);

        // Save updated posts array to localStorage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Clear form fields
        document.getElementById('post-form').reset();

        // Redirect to the posts page or another page
        window.location.href = 'posts.html'; // Redirect after saving the post
    } catch (error) {
        console.error('Error saving the post:', error);
        alert('Failed to save the post. Please try again.');
    }
}
