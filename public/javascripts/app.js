console.log('Window has loaded')

// $('button').on('click', function(){
// 	console.log('button is working')
// 	var movie = $('input').val()

// 		$.ajax({
// 		url: 'http://www.omdbapi.com/?t='+movie+'&y=&plot=short&r=json', // url you're making a request to
// 		type: 'get', // the type of request you're making (get, post)
// 		dataType: 'json',
// 		success: function(data){
// 			var message = "The movie " + data.Title + " came out in " + data.Year + " and had the actors " + data.Actors;
// 			console.log(message)
// 			console.log(data)
// 			$('#message-container').append(message)
// 		},
// 		error: function(err){
// 			console.log(err)
// 		}
// 	})
// });



// https://data.michigan.gov/resource/aiht-57sm.json


// $.ajax({
//     url: "https://data.michigan.gov/resource/nq2m-znh7.json",
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "YOURAPPTOKENHERE"
//     }
// }.done(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });

https://data.michigan.gov/resource/nq2m-znh7.json?name=Baraga State Park

$('button').on('click', function(){
	console.log('button is working')
	$('#message-container').html("")
	var county = $('input').val()
		$.ajax({
		url: "https://data.michigan.gov/resource/nq2m-znh7.json?county="+county+"",
		type: 'get', // the type of request you're making (get, post)
		dataType: 'json',
		data:
			{
			"$limit" : 5000,
			"$$app_token" : "9xFC6D7ryH5W5VwRAs3vXj3C9"
		},
		success: function(data){
			// var message = data.name;
			for (var i = 0; i < data.length; i++) {
			console.log(data[i].name)
			$('#message-container').append(data[i].name + "<br>" + data[i].phone + "<br><br>")

			}
		},
		error: function(err){
			console.log(err)
		}
	})
});

// $('button').on('click', function(){
// 	console.log('button is working')
// 	$('#message-container').html("")
// 	var county = $('input').val()
// 		$.ajax({
// 		url: "http://api.indeed.com/ads/apigetjobs?publisher=8796205133625117&jobkeys=5e50b56a7e69073c&v=2",
// 		type: 'get', // the type of request you're making (get, post)
// 		dataType: 'json',
// 		data:
// 			{
// 			"$limit" : 5000,
// 		},
// 		success: function(data){
// 			// var message = data.name;
// 			for (var i = 0; i < data.length; i++) {
// 			console.log(data[i].name)
// 			$('#message-container').append(data[i].name + "<br>")

// 			}
// 		},
// 		error: function(err){
// 			console.log(err)
// 		}
// 	})
// });



