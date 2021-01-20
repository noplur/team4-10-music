//This is the Genre selector at the very beginning, will need to go to the artistBoxEl and display the appropriate artists based on genre selection
var selectGenreEl = document.getElementById('select-genre-style-box');

//Results Card for Artist
var artistBoxEl = document.getElementById('artist-box');

//Where artists will be displayed, and buttons will need to be created to go to the songBoxEl with the appropraite artist
var artistRow1El = document.getElementById('artist-1-row');
var artistRow2El = document.getElementById('artist-2-row');
var artistRow3El = document.getElementById('artist-3-row');
var artistRow4El = document.getElementById('artist-4-row');
var artistRow5El = document.getElementById('artist-5-row');
var artistCount = 0;

//Results Card for Songs
var songBoxEl = document.getElementById('song-box');

//Where songs sit after selecting artist, and buttons will need to be created to go to the songBoxEl with the appropraite artist
var songRow1El = document.getElementById('song-1-row');
var songRow2El = document.getElementById('song-2-row');
var songRow3El = document.getElementById('song-3-row');
var songRow4El = document.getElementById('song-4-row');
var songRow5El = document.getElementById('song-5-row');
var songCount = 0;

//History Card
var historyBoxEl = document.getElementById('history-box');

//Genre Selector
// var genreOptions = selectGenreEl.querySelectorAll("option");
// genreOptions.addEventListener("changed...", function(){

// })

//Will need to make aritstBoxEl, songBoxEl, and historyBoxEl appear and disappear after certain functions
//similar to this


artistRow1El.addEventListener("click", function() {
    songBoxEl.style.display: "block";

});

artistRow2El.addEventListener("click", function() {
    songBoxEl.style.display: "block";
});

artistRow3El.addEventListener("click", function() {
    songBoxEl.style.display: "block";
});

artistRow4El.addEventListener("click", function() {
    songBoxEl.style.display: "block";
});

artistRow5El.addEventListener("click", function() {
    songBoxEl.style.display: "block";
});

songRow1El.addEventListener("click", function() {

});

songRow2El.addEventListener("click", function() {

});

songRow3El.addEventListener("click", function() {

});

songRow4El.addEventListener("click", function() {

});

songRow5El.addEventListener("click", function() {

});


