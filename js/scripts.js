//business logic
function Run(date, location, miles, time, weight) {
  this.date = date;
  this.location = location;
  this.miles = miles;
  this.time = time;
  this.weight = weight;
}

Run.prototype.metricData = function () {
  return this.miles * 1.60934;
}

Run.prototype.milesPace = function () {
  return this.time / (this.miles);
}

Run.prototype.kilometersPace = function () {
  return this.time / (this.miles * 1.60934);
}

Run.prototype.caloriesBurned = function () {
  return this.miles * this.weight * 0.63;
}

//user interface logic
$(document).ready(function() {
  $("form#new-run").submit(function(event) {
    event.preventDefault();
    var inputtedDate = $("input#date").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDistance = $("input#miles").val();
    var inputtedTime = $("input#time").val();
    var inputtedWeight = $("input#weight").val();
    var newRun = new Run(inputtedDate, inputtedLocation, inputtedDistance, inputtedTime, inputtedWeight);

    $(".date").text(inputtedDate);
    $(".location").text(inputtedLocation);
    $(".miles").text(inputtedDistance);
    $(".ppm").text(newRun.milesPace());
    $(".km").text(newRun.metricData());
    $(".ppkm").text(newRun.kilometersPace());
    $(".calories").text(newRun.caloriesBurned());

    $("#show-log").show();
  });
});
