//===================================== variable set to import necessary  node modules  =====================================
var fs = require('fs');
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');

//===================================== variables to hold CL inputs, command will perform program functions userInput will take user input  =====================================
var command = process.argv[2];
var userInput = process.argv[3];
var nodeArgs = process.argv;







// switch-case statement to select proper command/function.
// The switch-case will direct which function gets run.
switch(command){
    case 'my-tweets':
        tweets();
    break;

    case 'spotify-this-song':
        songs();
    break;

    case 'movie-this':
        movies();
    break;

    case 'do-what-it-says':
        random();
    break;
}

//===================================== BEGIN"my-tweets" command logic  =====================================

function tweets() {
	var Twitter = require('twitter');
 
	var client = new Twitter({
  consumer_key: keys.TwitterKeys.consumer_key,
  consumer_secret: keys.TwitterKeys.consumer_secret,
  access_token_key: keys.TwitterKeys.access_token_key,
  access_token_secret: keys.TwitterKeys.access_token_secret
	});
 
	var params = 'wyz1JP';
  var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  
  client.get(url, params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        
        if (tweets[i] != undefined) {
         
          console.log(tweets[i].text);
        }
      }
  	} else {
      console.log(error);
    	}
	});
 
}
//===================================== END "my-tweets" command logic  =====================================
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//===================================== BEGIN "spotify-this-song" command logic  =====================================

function songs() {
	console.log('G"-N-"R');
}
//=====================================  END  "spotify-this-song" command logic  =====================================
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//======================================== BEGIN "movie-this" command logic  ========================================

function movies() {
//console.log('The Toy');
	
	
	for (var i = 3; i < nodeArgs.length; i++) {
		
		if (i > 3 && i < nodeArgs.length) {
			movieTitle = movieTitle + "+" + nodeArgs[i];
		}

		else {
			movieTitle = movieTitle + nodeArgs[i];
		}
	}
	var queryURL = 'http://www.omdbapi.com/?t=' + movieTitle +'&tomatoes=true&y=&plot=short&r=json';
	
	//these are so we can visualize our URL & user Input for debugging
	console.log(queryURL);
	console.log(movieTitle);

	request(queryURL, function(error, response, body) {

		if (!error && response.statusCode == 200) {
			console.log("Title: " + JSON.parse(body)["Title"]);	// Movie title
			console.log("Released: " + JSON.parse(body)["Year"]);	// Movie Release Year
			console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);	// IMDB rating
			console.log("Country of Production: " + JSON.parse(body)["Country"]); //Production Country
			console.log("Movie Language: " + JSON.parse(body)["Language"]);	//Movie Language
			console.log("Plot: " + JSON.parse(body)["Plot"]); //Movie Plot
			console.log("Cast: " + JSON.parse(body)["Actors"]);	//Movie Cast
			console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]); //Rotten Tomatoes Rating
			console.log("Rotten tomatoes URL: " + JSON.parse(body)["tomatoURL"]); //Rotten tomatoes URL
		}
		else {

		}
	});
}
//===================================== END "movie-this" command logic  =====================================
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/=\|/
//===================================== BEGIN "do-what-it-says" command logic  =====================================
function random() {
	fs.readFile(random.txt, "utf8", function(err, data){

	});
}
//===================================== END "do-what-it-says" command logic  =====================================