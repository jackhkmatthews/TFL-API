




// $("document").ready(function() {
  
//   var searchTerm = '';
  
//   $("form").submit( function(evt) {
//     evt.preventDefault();
    
    
//     var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


   
//     searchTerm = $("#search").val();
    
//     var flickrOptions = {
//       tags: searchTerm,
//       format: "json"
//     };
    
//     function displayPhotosFunction (data) {
//       var photosHTML = '<ul>';
//       $.each(data.items , function (i, photo) {
//         photosHTML += '<li class = "grid-25 tablet-grid-50">';
//         photosHTML += '<a href="' + photo.link + '" class="image">';
//         photosHTML += '<img src="' + photo.media.m +  '"></a></li>';
//       });  // end each
      
//       photosHTML += '</ul>'
//       $("#photos").html(photosHTML);
      
//     }; // end displayPhotosFunction
    
//     $.getJSON(flickrAPI, flickrOptions, displayPhotosFunction);
    
//     console.log(searchTerm);
    
//     }); // end submit
  
// }); //end ready

var searchTerm = '';
var stations

$("document").ready(function() {
  
  
  
  $("form").submit( function(evt) {
    evt.preventDefault();
   
    searchTerm = $("#search").val();

    var TflAPI = "https://api.tfl.gov.uk/StopPoint/Search/" + searchTerm + "?app_id=835d0307&app_key=42620817a4da70de276d15fc45a73e1a"
    
    var TflOptions = {
      faresOnly: "False",
    };
    
    function printToList (data) {
     stations = data; 
     console.log(stations)

    var stationNamesHTML = '<ul>';
      $.each(data.matches, function (i, station) {
        stationNamesHTML += '<li class = "grid-25 tablet-grid-50">';
        stationNamesHTML += station.name
        stationNamesHTML += '</li>'
      })//end each 
    stationNamesHTML += '</ul>'
    $("#stationNames").html(stationNamesHTML);

     }; // end printToList
    
    $.getJSON(TflAPI, TflOptions, printToList);
    
    console.log(searchTerm);
    
    }); // end submit
  
}); //end 


