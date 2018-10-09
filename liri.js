require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

function main (command, searchTerm) {
    // Make it so liri.js can take in one of the following commands:
    switch (command) {
        case 'concert-this': 
            showConcert(searchTerm);
            break;
        case 'spotify-this-song':
            showSong(searchTerm);
            break;
        case 'movie-this':
            showMovie(searchTerm);
            break;    
        default:
            showRandom();
            break;
    }
}

// concert-this
function showConcert (band) {
    // node liri.js concert-this <artist/band name here>
    // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")
}

// spotify-this-song
function showSong (songTitle) {
    // node liri.js spotify-this-song '<song name here>'
    // This will show the following information about the song in your terminal/bash window
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
    // If no song is provided then your program will default to "The Sign" by Ace of Base.
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      var songData = data.tracks.items[0]; 
        console.log(songData);
      });
}

// movie-this
function showMovie (movieName) {
    // node liri.js movie-this '<movie name here>'
    // This will output the following information to your terminal/bash window:
    //   * Title of the movie.
    //   * Year the movie came out.
    //   * IMDB Rating of the movie.
    //   * Rotten Tomatoes Rating of the movie.
    //   * Country where the movie was produced.
    //   * Language of the movie.
    //   * Plot of the movie.
    //   * Actors in the movie.
    // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    // You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
}

// do-what-it-says
function showRandom () {
    // node liri.js do-what-it-says
    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    // Edit the text in random.txt to test out the feature for movie-this and my-tweets
}

main(process.argv[2], process.argv[3]);