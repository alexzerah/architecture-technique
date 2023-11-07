console.log(1);

const musicDiv = document.getElementById('music');
const showDiv = document.getElementById('show');
const moviecDiv = document.getElementById('movie');

musicTitle = musicDiv.querySelector(".title");
console.log(musicTitle);
musicAuthor = musicDiv.querySelector(".author");

// showTitle = showDiv.querySelector(".title");
// showAuthor = showDiv.querySelector(".author");

// movieTitle = movieDiv.querySelector(".title");
// movieAuthor = movieDiv.querySelector(".author");

fetch("http://localhost:3000/music")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(musicDiv);
    musicTitle.innerHTML = data.data.title;
    musicAuthor.innerHTML = data.data.author;
});
