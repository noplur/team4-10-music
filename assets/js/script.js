var genre = document.getElementById("select-genre")

console.log(genre.value);


// click event for genre drop down options

// searched cities buttons event listener for drop-down menu

$("#select-genre").change(function(event) {

    // prevent page from refreshing
  
    event.preventDefault();
  
    // targets the genreName text element

    var genreName = (event.target.textContent);
    
    // restarts function to get function to get current weather and 5-day forecast
      getArtistName(genreName);
    
  });

  // function fest artist names based on genre
var getArtistName = function(genreName) {


    // format the Open Weather api url
    var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + genre.value + "/artists";

    // make a request to the url
    
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
    if (response.ok) {
        response.json().then(function(genre) {
        displayArtistName(genre);
        
        }
        )}
    })
    .then(function(response) {

        // clears current-weather div class so elements will not repeat when another city name is enterred.
  
        var artistDisplayContainerEl = document.querySelector("#artist-display");
        artistDisplayContainerEl.innerHTML = '';

        var artistDisplayTitleContainerEl = document.querySelector("#artist-display-title");
        artistDisplayTitleContainerEl.innerHTML = '';
})
};

// function to display artist names

var displayArtistName = function(genre) {
    console.log(genre)
    
    // add 5-Day Forecast title when city name is entered. Title includes h3 header and takes up entire row within card

    var artistTitle = $("<h3>").addClass("artist-display").attr("class", "col-12 col-md-12 mb-3").text("Results:");
  $("#artist-display-title").append(artistTitle);
  
   // displays 5 separate columns
   for (i = 0; i < 5; i++) {
       // creates the columns with royal blue background
    var newCard = $("<div>").attr("new-card", "col-12 col-md-2 five-day bg-primary text-white rounded-lg p-2");
    $("#artist-display").append(newCard);

    // display artist name

    var artistName = $("<p>").addClass("artist-name").attr("id", genre.data[0 + i].id).text(genre.data[0 + i].name)

    // var newIDCard = $("<div>").attr("new-id-card", "col-12 col-md-2 five-day bg-primary text-white rounded-lg p-2");
    // $("#artist-display").append(newIDCard);

    // var artistIdentity = $("<p>").addClass("artist-id").text(genre.data[0 + i].id)

    newCard.append(artistName)
    // newIDCard.append(artistIdentity)
}
};

var artist
// click event for artist names

$("#artist-display").click(function(event) {

    // prevent page from refreshing
  
    event.preventDefault();
  
    // targets the cityname text element
    artist = (event.target.id);
    console.log(artist)
    
    // restarts function to get function to get current weather and 5-day forecast
    getSongName(artist);
    
  });
 

// function to fetch song names based on artist

var getSongName = function(artist) {
  console.log(artist)
    // format the Open Weather api url
    var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + artist + "/top/";

    // make a request to the url
    
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
    if (response.ok) {
        response.json().then(function(artist) {
        displaySongName(artist);
        }
        )}
    })
    .then(function(response) {

        // clears current-weather div class so elements will not repeat when another city name is enterred.
  
        var songDisplayContainerEl = document.querySelector("#song-display");
        songDisplayContainerEl.innerHTML = '';
})
};

// function to display song names

var displaySongName = function (artist) {
    console.log(artist)

    var songTitle = $("<h3>").addClass("display-song-title").attr("class", "col-12 col-md-12 mb-3").text("You Picked:");
  $("#song-display-title").append(songTitle);

  // displays 5 separate columns
  for (i = 0; i < 5; i++) {
    // creates the columns with royal blue background
 var newSongCard = $("<div>").attr("new-card", "col-12 col-md-2 five-day bg-primary text-white rounded-lg p-2");
 $("#song-display").append(newSongCard);

 // display artist name

 var songName = $("<p>").addClass("song-name").text(artist.data[0 + i].title)

 newSongCard.append(songName)
}
}