//for player
$(document).ready(function() {
    var SearchString = window.location.search.substring(1);
    $.ajax({
        url: "http://localhost:8000/player/"
    }).then(function(data) {
        console.log(SearchString);
    });
    $.ajax({
        type: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        url: "http://localhost:8000/player/" + SearchString + "/",
        //data    : JSON.stringify(post_data),
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            alert("success! Delete");
            window.location.assign("player.html")
        }
    });
});