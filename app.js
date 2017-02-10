var TwitterPackage = require('twitter');

//Gonna have to change this one's to Ed's account
var secret = {
	consumer_key: 'DkUV2LDdEQvhxFDNn2wLhLRXT',
	consumer_secret: 'gRLVXoRGcb0yyUtatR2yVxptPy7SML3eDOYh9tBRn2YkdLvOD1',
	access_token_key: '35993442-X2jQw06rpToE3I0nAzFYcX1zLoef7VIXzxc37WAGe',
	access_token_secret: 'ooXMRLp7aALLJXMU0seWEQ4zTclEhXtIzIsGTunIZGGc1'
}

var Twitter = new TwitterPackage(secret);

//Function to get a 20 roll
Twitter.stream('statuses/filter', {track: '@edannunziata #D20'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,20)}
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
Twitter.stream('statuses/filter', {track: '@edannunziata #D20'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
	var answer = {status: "@"+tweet.user.screen_name+" you rolled a "+ getRandomIntInclusive(1,6)}
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