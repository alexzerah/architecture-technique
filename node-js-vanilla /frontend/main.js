const musicDiv = document.getElementById('music');
const animeDiv = document.getElementById('anime');
const movieDiv = document.getElementById('movie');

const musicTitle = musicDiv.querySelector(".title");
const musicAuthor = musicDiv.querySelector(".author");

const animeTitle = animeDiv.querySelector(".title");
const animeAuthor = animeDiv.querySelector(".author");

const movieTitle = movieDiv.querySelector(".title");
const movieAuthor = movieDiv.querySelector(".author");

const btnMovie = movieDiv.querySelector('button');
const btnMusic = musicDiv.querySelector('button');
const btnAnime = animeDiv.querySelector('button');

btnMovie.addEventListener('click', () => {
    fetch("http://localhost:3000/movie")
    .then(response => response.json())
    .then(data => {
        movieTitle.innerHTML = data.data.title;
        movieAuthor.innerHTML = data.data.author;
    });
});

btnMusic.addEventListener('click', () => {
    fetch("http://localhost:3000/music")
    .then(response => response.json())
    .then(data => {
        musicTitle.innerHTML = data.data.title;
        musicAuthor.innerHTML = data.data.author;
    });
});

btnAnime.addEventListener('click', () => {
    fetch("http://localhost:3000/anime")
    .then(response => response.json())
    .then(data => {
        animeTitle.innerHTML = data.data.title;
        animeAuthor.innerHTML = data.data.author;
    });
});
