$(document).ready(function() { 
  $(".Month").change(function() {
    if ($(".Month:checked").length == $(".Month").length) {
      $("#map").replaceWith("<iframe id='map' src='https://www.geosheets.com/map/s:KJV92kAM/cleanups/embed' class='map'></iframe>")
    }
    else if ($(".Month:checked").length === 0) {
      $("#map").replaceWith("<div id='map' class='map'><p>Please select at least one option</p></div>")
    }
    else {
      var baseLink = "https://www.geosheets.com/map/s:KJV92kAM/cleanups?filters=%7B%22Month%22%3A%5B"
      var first = true;
      if ($("#Jan").is(":checked")) {
        baseLink += "%22January%22"
        first = false;
      }
      if ($("#Feb").is(":checked")) {
        if (first == true) {
          baseLink += "%22February%22"
          first = false;
        }
        else {
          baseLink += "%2C%22February%22"
        }
      }
      if ($("#Mar").is(":checked")) {
        if (first == true) {
          baseLink += "%22March%22"
          first = false;
        }
        else {
          baseLink += "%2C%22March%22"
        }
      }
      if ($("#Apr").is(":checked")) {
        if (first == true) {
          baseLink += "%22April%22"
          first = false;
        }
        else {
          baseLink += "%2C%22April%22"
        }
      }
      if ($("#May").is(":checked")) {
        if (first == true) {
          baseLink += "%22May%22"
          first = false;
        }
        else {
          baseLink += "%2C%22May%22"
        }
      }
      if ($("#Jun").is(":checked")) {
        if (first == true) {
          baseLink += "%22June%22"
          first = false;
        }
        else {
          baseLink += "%2C%22June%22"
        }
      }
      if ($("#Jul").is(":checked")) {
        if (first == true) {
          baseLink += "%22July%22"
          first = false;
        }
        else {
          baseLink += "%2C%22July%22"
        }
      }
      if ($("#Sep").is(":checked")) {
        if (first == true) {
          baseLink += "%22August%22"
          first = false;
        }
        else {
          baseLink += "%2C%22August%22"
        }
      }
      if ($("#Oct").is(":checked")) {
        if (first == true) {
          baseLink += "%22September%22"
          first = false;
        }
        else {
          baseLink += "%2C%22September%22"
        }
      }
      if ($("#Nov").is(":checked")) {
        if (first == true) {
          baseLink += "%22October%22"
          first = false;
        }
        else {
          baseLink += "%2C%22October%22"
        }
      }
      if ($("#Dec").is(":checked")) {
        if (first == true) {
          baseLink += "%22November%22"
          first = false;
        }
        else {
          baseLink += "%2C%22November%22"
        }
      }
      if ($("#Feb").is(":checked")) {
        if (first == true) {
          baseLink += "%22December%22"
          first = false;
        }
        else {
          baseLink += "%2C%22December%22"
        }
      }
      baseLink += "%5D%2C%22a.%20Name%22%3A%22_all_%22%2C%22b.%20People%22%3A%22_all_%22%2C%22c.%20Date%22%3A%22_all_%22%2C%22d.%20Place(s)%22%3A%22_all_%22%2C%22e.%20Weight%20(lbs)%22%3A%22_all_%22%2C%22f.%20Bag(s)%22%3A%22_all_%22%2C%22g.%20Time%20(hrs)%22%3A%22_all_%22%7D"
      $("#map").replaceWith("<iframe id='map' src='" + baseLink + "' class='map'></iframe>")
    }
  });
});
