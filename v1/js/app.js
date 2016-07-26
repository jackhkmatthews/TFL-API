var timesToStation =[];
var nextArrival;
var nextTubeHTML;
var numberOfRequests = 0;
var numberOfRequestsHTML;


$("document").ready(function() {
  
  $("#button").click( function(event) {
    event.preventDefault();

    var TflAPI = "https://api.tfl.gov.uk/StopPoint/940GZZLUAGL/Arrivals?app_id=835d0307&app_key=42620817a4da70de276d15fc45a73e1a"

    function printToPage (data) {
      arrivals = data; 
      console.log(arrivals)

      timesToStation = [];
      $.each(arrivals, function (i, arrival) {
        timesToStation.push(arrival.timeToStation);
      }); //end each

      console.log(timesToStation);    

      var LowestTime = 10000;
      for (i = 0; i<timesToStation.length; i++){
        if (timesToStation[i] < LowestTime && timesToStation[i] > 0) {
          LowestTime = timesToStation[i];
        } // end of if
      }; //end of for loop
      console.log(LowestTime);

      $.each(arrivals, function (i, arrival) {
        if (arrival.timeToStation === LowestTime) {
          nextArrival = arrival
        };
      }); //end each

      console.log(nextArrival.towards);

      nextTubeHTML = "";
      nextTubeHTML += "<p>";
      nextTubeHTML += "Is heading towards " + nextArrival.towards + " ";
      nextTubeHTML += "and will be departing in " + LowestTime + " seconds.";
      nextTubeHTML += "</p>";

      console.log(nextTubeHTML);

      $("#next_tube").html(nextTubeHTML);

      numberOfRequests += 1;
      numberOfRequestsHTML = "";
      numberOfRequestsHTML += "<li>Number of requests: " + numberOfRequests + "</li>"

      $("#number_of_requests").html(numberOfRequestsHTML);

   }; // end printToPage

   $.getJSON(TflAPI, printToPage);

 }); //end click
  
  
}); //end ready


