import {apiKey} from "./modules/config.js";
document.addEventListener('DOMContentLoaded', () => {
   // const apiKey = 'acd42ea8';

    const searchBtn = document.querySelector('.searchbtn');
    const input = document.querySelector('.input');

    if (searchBtn && input) {
        searchBtn.addEventListener('click', () => {
            const query = input.value.trim();

            const url = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log('Response data:', data);
                    if (data.Response === "True") {
                        displayMovie(data);
                    } else {
                        console.error("Error:", data.Error);
                        showError(data.Error);
                    }
                })
                .catch(error => console.error('Fetch Error:', error));
        });
    } else {
        console.error('Search button or input field not found');
    }

    function displayMovie(movie) {
        const resultContainer = document.getElementById('container');
        resultContainer.innerHTML = ''; 

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p>Release Year: ${movie.Year}</p>
                <button class="more-info-button" data-id="${movie.imdbID}">More Info</button>
            </div>
        `;
        resultContainer.appendChild(movieElement);

        
        document.querySelectorAll('.more-info-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.getAttribute('data-id');
                fetchMovieDetails(movieId);
            });
        });
    }

    function showError(message) {
        const resultContainer = document.getElementById('container');
        let errorContainer = document.getElementById('error-message');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'error-message';
            errorContainer.style.color = 'red';
            errorContainer.style.fontSize = '1.2em';
            errorContainer.style.margin = '20px';
            resultContainer.parentNode.insertBefore(errorContainer, resultContainer);
        }
        errorContainer.innerHTML = message;
    }

    function fetchMovieDetails(movieId) {
        const url = `https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Details response data:', data);
                if (data.Response === "True") {
                    displayMovieDetails(data);
                } else {
                    console.error("Error:", data.Error);
                    showError(data.Error);
                }
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }

    function displayMovieDetails(movie) {
        const detailsContainer = document.getElementById('movie-details');
        if (!detailsContainer) {
            console.error('Details container not found');
            return;
        }
        detailsContainer.innerHTML = `
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title}" />
            <p><strong>Release Date:</strong> ${movie.Released}</p>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
        `;
        detailsContainer.style.display = 'block';
    }
});
