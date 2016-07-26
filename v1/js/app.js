var timesToStation =[];
var nextArrival;
var nextTubeHTML;
var numberOfRequests = 0;
var numberOfRequestsHTML;


$("document").ready(function() {

  $(".button").click( function(event) {
    event.preventDefault();

    function animateButton () {
      $( ".button" ).animate({
        width: "680px",
        left: "10px",
        borderRadius: "10px"
        //top: "56px"
      }, 500 );
      $( ".button" ).animate({
        width: "680px",
        left: "10px",
        //top: "56px"
      }, 6000 );
      $( ".button" ).animate({
        width: "250px",
        left: "225px",
        borderRadius: "0px"
        //top: "56px"
      }, 500 );
    }

    function animateContainer () {
      $( ".container" ).animate({
        padding: "21px",
      }, 500 );
      $( ".container" ).animate({
        width:  "526px",
        height: "174px",
        left: "36px",
      }, 500 );
      $( ".container" ).animate({
        width:  "526px",
        height: "174px",
        left: "36px",
      }, 6000 );
      $( ".container" ).animate({
        width:  "526px",
        height: "174px",
        left: "36px",
      }, 250 );
      $( ".container" ).animate({
        width:  "100px",
        height: "100px",
        left: "249px",
      }, 300 );
    }


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
      nextTubeHTML += "The next tube from Angel is heading towards " + nextArrival.towards + " ";
      nextTubeHTML += "and will be departing in " + LowestTime + " second(s).";
      nextTubeHTML += "</p>";

      console.log(nextTubeHTML);

      $("#next_tube").html(nextTubeHTML);

      numberOfRequests += 1;
      numberOfRequestsHTML = "";
      numberOfRequestsHTML += "<li>Number of requests: " + numberOfRequests + "</li>"

      $("#number_of_requests").html(numberOfRequestsHTML);

   }; // end printToPage

   function delayedGetAndHideJSON () {
     window.setTimeout(function(){$.getJSON(TflAPI, printToPage);}, 1000)
     window.setTimeout(function(){$("#next_tube").html("")}, 6500)
     window.setTimeout(function(){$("#number_of_requests").html("")}, 6500)
   }

   animateButton();

   animateContainer();

   delayedGetAndHideJSON();



 }); //end click


}); //end ready
