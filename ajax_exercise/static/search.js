
$(function () {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    $("#result-list").empty();
    var gotData = function(resultsArray) {
      resultsArray.forEach(function(result) {
        var html = "<li><a href ='" + result.url + "'>" + result.title + "</a></li>";
        $("#result-list").append(html);
      });
    };
    var queryData = $("#search-form").serialize();
    $.get("/search", queryData, gotData);
  });

});
