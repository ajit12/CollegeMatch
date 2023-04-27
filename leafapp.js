var heatPointVar
var selCollege_lat
var selCollege_long

let data = {};
const url = 'colleges.json';
fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
})


function populateColleges() {
  var colleges = ["UofM", "MSU", "WSU", "OU"]
  var TheCollege = document.getElementById("College");

  for (var i=0; i< colleges.length; i++) {
    var length = TheCollege.options.length;
    TheCollege.add(new Option(colleges[i], i), length);
  }
}


function getDropValues() {
    //window.alert("Hello There")
    //document.write(5 + 6)
    var e = document.getElementById("College");
    var CollegeIndex = e.value;
    //document.write(CollegeIndex)
    //document.write(CollegeIndex);
    
    //document.write("college is selected");
    selCollege_lat = 42.275051;
    selCollege_long = -83.741478;
    heatPointVar = 'heat_points_wsu';

    switch(CollegeIndex) {
        case 0:
            // MSU Data
            selCollege_lat = 42.729721;
            selCollege_long = -84.481491;
            heatPointVar = 'heat_points_msu';
            break;
        case 1:
            // UofM Data
            selCollege_lat = 42.275051;
            selCollege_long = -83.741478;
            heatPointVar = 'heat_points_uofm';
            break;
        case 3:
            // WSU Data
            selCollege_lat = 42.356991;
            selCollege_long = -83.065201;
            heatPointVar = 'heat_points_wsu';
            break;
    }
    return CollegeIndex;
    }

     //<button class="button" id="submit" name="submit">Submit</button> onclick= goToCampus()
function goToCampus() {
  window.alert("Hello There")
  document.write(9 + 6)
  var e = document.getElementById("myCollege");
  var CollegeIndex = e.value;
  document.write(CollegeIndex);
  //GenDataPoints(CollegeIndex)
  }

