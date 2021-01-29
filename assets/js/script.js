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

        // clears history-box so elements will not repeat when another artist is clicked.

        var historyBoxContainerEl = document.querySelector("#history-display-title");
        historyBoxContainerEl.innerHTML = '';

})
};

// function to display artist names

var displayArtistName = function(genre) {
    console.log(genre)
    artistBoxDisplayEl.style.display = "block";

    // add Results title when genre is selected. Title includes h3 header

    var artistTitle = $("<h3>").addClass("artist-display").attr("class", "results-title").text("Results:");
  
    // add artistTitle to #artist-display-title
  $("#artist-display-title").append(artistTitle);

  // variable for genreDataArray

  var genreDataArr = randomArtist(genre.data)

   // displays 5 separate rows
   for (i = 0; i < 5; i++) {
       // creates the rows artist-name-row ID
    var newCard = $("<div>").attr("new-card", "artist-name-row");
    $("#artist-display").append(newCard);
    // display artist name

    // variable for genreData sets i within genreDataArray 
    var genreData = genreDataArr[i]
    var artistName = $("<p>").addClass("artist-name row-style").attr("id", genreData.id).attr("data-name", genreData.name).text(genreData.name)

    // append artistName onto newCard to display on page

    newCard.append(artistName)
}
};

// function to get random artist

var randomArtist = function (arr) {

// variable for newArr (or new array)
var newArr = []

// while loop so artist does not repeat

  while (newArr.length < 5) {
    // whole number rounds down
    var i = Math.floor(Math.random() * arr.length)

    // pushes newArr
    newArr.push(arr[i])

    // Set removes unique values, ... --> allows everything inside to be taken into new array named newArr, [] catches everything inside array
    newArr = [... new Set(newArr)]
  }

  return newArr
}

// click event for artist names

$("#artist-display").click(function(event) {

    // prevent page from refreshing
  
    event.preventDefault();
  
    // targets the id element and converts element into artist

    artist = (event.target.id);
    console.log(artist)

    // targets the data-name element and converts element band

    band = (event.target.getAttribute("data-name"));
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

        var historyDisplayTitleContainerEl = document.querySelector("#history-display-title");
        historyDisplayTitleContainerEl.innerHTML = '';


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

  // add Previous Artist Selected title text historyTitle display box. Title includes h3 header

  var historyTitle = $("<h3>").addClass("display-history-title").attr("class", "history-title").text("Previous Artists Selected:");
  $("#history-display-title").append(historyTitle);

  // gets items from artist-history and parses them into local storage

  var local = JSON.parse(localStorage.getItem("artist-history")) || []

  // add items to new array by pushing this.band

  local.push(this.band)

   // for loop for new local
  //remove duplicates by: Set removes unique values, ... --> allows everything inside to be taken into new array named local, [] catches everything inside array

  var newLocal = [...new Set(local)]

  //save to local storage

  localStorage.setItem("artist-history", JSON.stringify(newLocal))


  // clears out history-display element
  $("#history-display").html("")

  // for loop for newLocal

  for (i = 0; i < newLocal.length; i++) {
    // add band title (from newLocal) when artistName is selected to history display box. Title includes h4 header
    var artistHistoryDisplay = $("<h4>").addClass("name artist-list-item-history").text(newLocal[i]);
  $("#history-display").append(artistHistoryDisplay);
  }

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