var genre = document.getElementById(" select-genre")
console.log(genre.value);


// click event for genre drop down options

var getArtistName = function(artistName) {


    // format the Open Weather api url
    var apiUrl = "https://api.deezer.com/genre/" + genre.value + "/artists";
    console.log(genre.value);
    console.log(apiUrl);

    // make a request to the url
    
    fetch(apiUrl)
    .then(function(response) {
    // request was successful
    if (response.ok) {
        response.json().then(function(data) {
        displayArtistName(data, artistName);
        displaySongName (artistName);
        }
        )}
    })
};

// function to display artist names

// click event for artist names

// function to display song names