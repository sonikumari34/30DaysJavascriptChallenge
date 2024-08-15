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
        postTitle.className ='post-name';

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
    const postElement = button.closest('.post'); 
    const likeCountSpan = button.querySelector('.like-count');
   
    let likeCount = parseInt(likeCountSpan.textContent);
    likeCount += 1;
    likeCountSpan.textContent = likeCount;
    localStorage.setItem('likecount',likeCount);

    const postName = postElement.querySelector('.post-name')?.textContent || 'Unknown Post';
    //const postName = postElement.querySelector('.post-name').textContent;
  


    addNotification(`Your post "${postName}" received a new like!`);
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
    const postName = postElement.querySelector('.post-name').textContent;
  

    if (commentInput.value.trim() !== '') {
        const comment = document.createElement('div');
        comment.textContent = commentInput.value;
        commentsList.appendChild(comment);
        localStorage.setItem('comment',comment);
        commentInput.value = ''; // Clear the input field
        addNotification(`New comment on "${postName}": "${comment.textContent}"`);
    }
}

//const sidebar =  document.getElementById('sidebar-container');

// Function to load the sidebar content from 'userinfo.html'
function loadSidebar() {
    fetch('userinfo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            updateuserInfo();

           // simulateNewNotifications();
            
            // Check if profilePicInput exists before attaching the event listener
            const profilePicInput = document.getElementById('profilePicInput');
            if (profilePicInput) {
                profilePicInput.addEventListener('change', handleProfilePicChange);
            } else {
                console.warn('Profile picture input element not found.');
            }
        })
        .catch(error => console.log('Error loading the sidebar:', error));
}


function updateuserInfo(){
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const userNameElement = document.querySelector('.user-name');
    const userEmailElement = document.querySelector('.user-email');
    const userAvatar = document.getElementById('userAvatar');
    if (userNameElement) {
        userNameElement.textContent = username || 'User Name'; 
    }
    if (userEmailElement) {
        userEmailElement.textContent = email || 'user@example.com'; 
    }
    if (userAvatar) {
        const avatarSrc = sessionStorage.getItem('avatarSrc');
        if (avatarSrc) {
            userAvatar.src = avatarSrc;
        }else{
            console.warn('Avatar source not found in session storage.');
        }
    }
    else {
        console.warn('User avatar element not found.');
    }
}
   


// profile pic are added 

function handleProfilePicChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const avatarSrc = e.target.result;
            sessionStorage.setItem('avatarSrc', avatarSrc);
            document.getElementById('userAvatar').src = avatarSrc;
        };
        reader.readAsDataURL(file);
    }
}
 
 function toggleSidebar() {
    const sidebar = document.getElementById('userSidebar');
    if (sidebar) { 
        sidebar.classList.toggle('sidebar-open');
    } else {
        console.log('Sidebar not loaded yet.');
    }  
}



function addNotification(message) {
    const notificationList = document.getElementById('notificationList');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    notificationList.appendChild(listItem);
}

// Example function to simulate receiving notifications
 /*function simulateNewNotifications() {
    addNotification('You received a new like on your post!');
    addNotification('Someone commented on your post!');
} */



function logout() {
        sessionStorage.clear();
         localStorage.clear(); 
        alert('Logged out successfully!');
        window.location.href = 'index.html';
}

// Load the sidebar content when the page is fully loaded  
window.onload = function() {
    loadSidebar();
};



