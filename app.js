var TwitterPackage = require('twitter');

//Gonna have to change this one's to Ed's account
var secret = {
	consumer_key: 'zbYVEAAIB6Ns8bI6keKoYRHxr',
	consumer_secret: 'yl3kwsGkSX3Pu4DfnUYpq7bT9kuowDJauKQLoVxEZN25LtqCFw',
	access_token_key: '35993442-UBBFacONkTPmYBdVq074I4ox8XgMTz6ixvmyjmfur',
	access_token_secret: '7pkOmgbEQ78fzxLGdhVRznZrzUuRXizl1306v23hUiEf0'
}

var Twitter = new TwitterPackage(secret);

//Function to get a 20 roll
Twitter.stream('statuses/filter', {track: '@edannunziata #D20'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,20),in_reply_to_status_id:tweet.id_str}
	Twitter.post('statuses/update',answer,function(error,tweetReply,response)
	{
		if(error)
		{
			console.log(error);
		}
		console.log(tweetReply.text);
	});
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
//Function to get a 6 roll
Twitter.stream('statuses/filter', {track: '@edannunziata #D6'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,6),in_reply_to_status_id:tweet.id_str}
	Twitter.post('statuses/update',answer,function(error,tweetReply,response)
	{
		if(error)
		{
			console.log(error);
		}
		console.log(tweetReply.text);
	});
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
//Rolling for a D10
Twitter.stream('statuses/filter', {track: '@edannunziata #D10'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,10),in_reply_to_status_id:tweet.id_str}
	Twitter.post('statuses/update',answer,function(error,tweetReply,response)
	{
		if(error)
		{
			console.log(error);
		}
		console.log(tweetReply.text);
	});
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
//Rolling for a D100
Twitter.stream('statuses/filter', {track: '@edannunziata #D100'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,100),in_reply_to_status_id:tweet.id_str}
	Twitter.post('statuses/update',answer,function(error,tweetReply,response)
	{
		if(error)
		{
			console.log(error);
		}
		console.log(tweetReply.text);
	});
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
function getRandomIntInclusive(min,max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min+1))+min;
}