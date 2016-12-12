var input = "";

$(document).ready(function() {
  $(".collapsible").collapsible();

  $("#search").click(function() {
    if ($("#search").hasClass("clear")) {
      clearData();
      input = "";
      data = [];
    } else {
    input = $("#input").val();
    queryWiki();
  }
  });
});

var data = [];

function queryWiki() {
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + input + "&callback=?", function(info) {
    data.push(info);
  });

  setTimeout(function() {
    displayWiki();
  }, 1000);
}

function displayWiki() {
  for(var i = 0; i < data[0][1].length; i++) {
    var qInfo = $("<li></li>");
    var name = $("<div class='collapsible-header'></div>").text(data[0][1][i]);
    var desc = $("<div class='collapsible-body'></div>");
    var paragraph = $("<p></p>").text(data[0][2][i]);
    var links = String(data[0][3][i]);
    var linkTo = $("<a href=# target='_blank'><p>Click to go to Wikipedia page.</p></a>").attr("href", links);
    var textLink = paragraph.append(linkTo);
    var description = desc.append(paragraph);

    qInfo.append(name, description);
    $("ul").append(qInfo);
    $("#search").addClass("clear").text("CLEAR");
  }
}

function clearData() {
  $("li").remove();
  $("#search").removeClass("clear").text("SEARCH");
}
