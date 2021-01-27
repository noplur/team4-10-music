// global variables

var genre = document.getElementById("select-genre")
var artistBoxDisplayEl = document.getElementById("artist-box");
var songBoxDisplayEl = document.getElementById("song-box");
var historyBoxDisplayEl = document.getElementById("history-box");
var artist
console.log(genre.value);


// change event for genre drop down options

$("#select-genre").change(function(event) {

    // prevent page from refreshing
  
    event.preventDefault();
  
    // targets the genreName text element

    var genreName = (event.target.textContent);
    
    // restarts function to get function to get artist names based on genre


      getArtistName(genreName);
    
  });

  // function to get artist names based on genre

var getArtistName = function(genreName) {

    // format the Deezer api url

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

        // clears artist-box so elements will not repeat when another genre is selected.
  
        var artistDisplayContainerEl = document.querySelector("#artist-display");
        artistDisplayContainerEl.innerHTML = '';

        var artistDisplayTitleContainerEl = document.querySelector("#artist-display-title");
        artistDisplayTitleContainerEl.innerHTML = '';

        // clears song-box so elements will not repeat when another artist is clicked.
  
        var songDisplayContainerEl = document.querySelector("#song-display");
        songDisplayContainerEl.innerHTML = '';

        var songDisplayTitleContainerEl = document.querySelector("#song-display-title");
        songDisplayTitleContainerEl.innerHTML = '';
})
};

// function to display artist names

var displayArtistName = function(genre) {
    console.log(genre)
    artistBoxDisplayEl.style.display = "block";

    // add Results title when genre is selected. Title includes h3 header

    var artistTitle = $("<h3>").addClass("artist-display").attr("class", "results-title").text("Results:");
  $("#artist-display-title").append(artistTitle);
  
   // displays 5 separate rows
   for (i = 0; i < 5; i++) {
       // creates the rows artist-name-row ID
    var newCard = $("<div>").attr("new-card", "artist-name-row");
    $("#artist-display").append(newCard);

    // display artist name

    var artistName = $("<p>").addClass("artist-name row-style").attr("id", genre.data[0 + i].id).attr("name", genre.data[0 + i].name).text(genre.data[0 + i].name)

    // append artistName onto newCard to display on page

    newCard.append(artistName)
}
};
// click event for artist names

$("#artist-display").click(function(event) {

    // prevent page from refreshing
  
    event.preventDefault();
  
    // targets the id element and converts element into artist

    artist = (event.target.id);
    console.log(artist)

    // targets the text content and converts text content into band

    band = (event.target.textContent);
    console.log(band)
  
    // starts function to fetch song names based on artist
    getSongName(artist);
    
  });

// function to fetch song names based on artist

var getSongName = function(artist) {
  console.log(artist)
    // format the Deezer api url

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

        // clears song-box so elements will not repeat when another artist is clicked.
  
        var songDisplayContainerEl = document.querySelector("#song-display");
        songDisplayContainerEl.innerHTML = '';

        var songDisplayTitleContainerEl = document.querySelector("#song-display-title");
        songDisplayTitleContainerEl.innerHTML = '';
})
}; 

// function to display song names
// var artistText = document.getElementById("#artist-name-row")

var displaySongName = function (artist) {
    console.log(artist)
    songBoxDisplayEl.style.display = "block";
    historyBoxDisplayEl.style.display = "block";

  // add You Picked title when artistName is selected. Title includes h3 header

  var songTitle = $("<h3>").addClass("display-song-title").attr("class", "you-picked").text("You Picked:");
  $("#song-display-title").append(songTitle);

  // add band title when artistName is selected. Title includes h4 header

  var artistTitleDisplay = $("<h4>").addClass("artist-name-display").text(this.band);
  $("#song-display-title").append(artistTitleDisplay);

  // displays 5 separate rows
  for (i = 0; i < 5; i++) {

  // creates the rows with song-display-row ID

  var newSongCard = $("<div>").attr("new-card", "song-display-row");
  $("#song-display").append(newSongCard);

  // display track name

  var songName = $("<p>").addClass("song-name row-style").text(artist.data[0 + i].title)

  // append songName onto newSongCard to display track onto page

  newSongCard.append(songName)
}
}