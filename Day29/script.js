document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location.href = 'homepage.html';
    } else {
        document.getElementById('username-display').innerText = `Welcome, ${username}`;
        displayPosts(username); // Pass username to displayPosts
    }
});

function displayPosts(loggedInUsername) {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';

    // Retrieve posts from localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log('Posts retrieved:', posts);

    posts.forEach(post => {
        const postElement = document.createElement('div');

        if (post.username === loggedInUsername) {
            postElement.className = 'post user-post'; // Style for the logged-in user's posts
        } else {
            postElement.className = 'post other-post'; // Style for other users' posts
        }

        postElement.innerHTML = `
        <div class="post-actions">
            <button class="like-button" onclick="handleLike(this)">❤️ Like (<span class="like-count">0</span>)</button>
            <button class="comment-toggle" onclick="toggleCommentSection(this)">💬 Comment</button>
        </div>

        <div class="comment-section" style="display: none;">
            <div class="comments-list">
                <!-- Comments will be dynamically inserted here -->
            </div>
            <input type="text" placeholder="Write a comment..." class="comment-input" />
            <button class="comment-submit" onclick="addComment(this)">Post Comment</button>
        </div>
        `;

        postElement.className = 'post default-layout'; // Set default layout

        postElement.addEventListener('click', function () {
            togglePostLayout(postElement);
        });

        const postDetails = document.createElement('div');
        postDetails.className = 'post-details';

        const postTitle = document.createElement('h3');
        postTitle.innerText = post.title;

        const postContent = document.createElement('p');
        postContent.innerText = post.content;

        const postUsername = document.createElement('p');
        postUsername.className = 'post-username';
        postUsername.innerText = `Posted by: ${post.username || 'Anonymous'}`;

        const postTimestamp = document.createElement('p');
        postTimestamp.className = 'post-timestamp';
        postTimestamp.innerText = `Posted on: ${post.timestamp || 'N/A'}`;

        if (post.image) {
            const postImgContainer = document.createElement('div');
            postImgContainer.className = 'post-img-container';
            const postImage = document.createElement('img');
            postImage.src = post.image;
            postImage.alt = post.title;
            postImage.style.maxWidth = '100%'; 
            postImgContainer.appendChild(postImage);
            postElement.appendChild(postImgContainer);
        }

        postDetails.appendChild(postTitle);
        postDetails.appendChild(postContent);
        postDetails.appendChild(postUsername);
        postDetails.appendChild(postTimestamp);
        postElement.appendChild(postDetails);
        postFeed.appendChild(postElement);
    });
}

function togglePostLayout(postElement) {
    // Toggle between default and clicked layout
    if (postElement.classList.contains('clicked-layout')) {
        postElement.classList.remove('clicked-layout');
        postElement.classList.add('default-layout');
    } else {
        postElement.classList.remove('default-layout');
        postElement.classList.add('clicked-layout');
    }
}

function logout() {
    sessionStorage.clear();
     localStorage.clear(); 
    alert('Logged out successfully!');
    window.location.href = 'homepage.html';
}

function handleLike(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let likeCount = parseInt(likeCountSpan.textContent);
    likeCount += 1;
    likeCountSpan.textContent = likeCount;
}

function toggleCommentSection(button) {
    const postElement = button.closest('.post');
    const commentSection = postElement.querySelector('.comment-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(button) {
    const postElement = button.closest('.post');
    const commentInput = postElement.querySelector('.comment-input');
    const commentsList = postElement.querySelector('.comments-list');

    if (commentInput.value.trim() !== '') {
        const comment = document.createElement('div');
        comment.textContent = commentInput.value;
        commentsList.appendChild(comment);
        commentInput.value = ''; // Clear the input field
    }
}
