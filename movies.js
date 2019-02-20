
// Declare matrix with movies (the same declared statically in HTML) to use on Liked section
var staticMovies = [
  ["The Godfather", "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", false],
  ["Aliens", "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg", false],
  ["Terminator 2", "https://images-na.ssl-images-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg", false],
  ["Pulp Fiction", "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg", false],
  ["Matrix", "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg", false],
  ["Inception", "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", false]
];


// Declare matrix with fan favorites movies - ideally this would come from REST API endpoint
var moviesFanFavoritesArr = [
  ["Vice", "https://m.media-amazon.com/images/M/MV5BMTY1NjM0MzgxMV5BMl5BanBnXkFtZTgwNDc4NTY0NjM@._V1_SY1000_CR0,0,640,1000_AL_.jpg"],
  ["Bohemian Rhapsody", "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_SY1000_CR0,0,629,1000_AL_.jpg"],
  ["Black Panther", "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"],
  ["A Star Is Born", "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg"]
];

// Toggles visibility in elem children hence toggling from liked - unliked
function toggleLike(elem, idxMovie) {

  // TODO: IMPLEMENT STATUS TOGGLE OF LIKE ICON

  // TODO: IMPLEMENT UPDATE TO IN-MEMORY ARRAY staticMovies WITH LIKE STATUS

  // Updates UI
  refreshLikedMovies();
}


// Toggles visibility of starts accordingly to rating
// Uses HTML DOM tree to navigate between elements
function rateStars(elem, rating) {
  // mark stars below clicked
  for (i = rating, starElem = elem; i > 0 && starElem != null;) {
    // Ensure sibling if the 'star-rating' span
    if (starElem.classList != null && starElem.classList.contains("star-rating")) {
      // Show full star
      starElem.children[0].classList.remove("hidden");
      // Hide empty star
      starElem.children[1].classList.add("hidden");
      // Decrement index only if elem was a star-rating
      i--;
    }
    // Move to previous
    starElem = starElem.previousSibling;
  }

  // clear stars above clicked
  for (i = rating, starElem = elem; i < 5;) {
    // Skip current and move next
    starElem = starElem.nextSibling;
    // Ensure sibling if the 'star-rating' span
    if (starElem != null && starElem.classList != null && starElem.classList.contains("star-rating")) {
      // Hide full star
      starElem.children[0].classList.add("hidden");
      // Show empty star
      starElem.children[1].classList.remove("hidden");
      // Increment index only if elem was a star-rating
      i++;
    }
  }
}



// Create HTML Elements and Nodes by manipulate DOM tree in memory
// https://www.w3schools.com/jsref/dom_obj_all.asp
function addMovieToContainer(containerElem, movieTitleVal, movieImgVal) {
  var divMovie = document.createElement("div");
  divMovie.classList.add("movie");
  // Movie Img Elem
  var imgMovie = document.createElement("img");
  imgMovie.setAttribute("src", movieImgVal);
  divMovie.appendChild(imgMovie);
  // Movie P Elem
  var pTitle = document.createElement("p");
  pTitle.classList.add("movie-title");
  var pTitleText = document.createTextNode(movieTitleVal);
  pTitle.appendChild(pTitleText);
  divMovie.appendChild(pTitle);
  // Add HTML Node to Container
  containerElem.append(divMovie);
}


function addFanMovies() {
  // Get reference to HTML Element with container
  var elemFanMoviesContainer = document.getElementById("movies-fans-container");

  // Add Movies to Container
  for (i = 0; i < moviesFanFavoritesArr.length; i++) {
    // Get values from array
    var movieTitleVal = moviesFanFavoritesArr[i][0];
    var movieImgVal = moviesFanFavoritesArr[i][1];
    // Create HTML node
    addMovieToContainer(elemFanMoviesContainer, movieTitleVal, movieImgVal);
  }
}



function refreshLikedMovies() {
  
    // TODO: IMPLEMENT REFRESH OF movies-liked-container CONTAINER
}
