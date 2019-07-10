$(document).ready(function() {

    get();
})

function addplayer() {
    var Name = document.getElementById("r_name").value;
    var Age = document.getElementById("r_age").value;
    var Position = document.getElementById("r_position").value;
    var Club = document.getElementById("r_club").value;

    var Apperance = document.getElementById("r_apperances").value;
    var Goals = document.getElementById("register_goals").value;
    var Assists = document.getElementById("r_assists").value;
    var InfoId = $("#teamname option:selected").val();
//    alert(InfoId);
   var post_data = {
        //"id": 3,
        "name": Name,
        "age": Age,
        "position": Position,
        "club":Club,
        "apprances":Apperance ,
        "goals":Goals ,
        "assists":Assists ,
        "InfoId": InfoId,
    }

    $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        url: "http://localhost:8000/player/",
        data: JSON.stringify(post_data),
        dataType: "json",
        contentType: "application/json",
        success: function() {
            alert("success! You added New Player");
            window.location.assign("player.html")
        }
    });

}

function get() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        url: "http://localhost:8000/team/",
        dataType: "json",
        contentType: "application/json",

    }).then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var val = data[i].id;
            var text = data[i].teamName;
            var option = document.createElement("option");
            option.text = text;
            option.value = val;
            var select = document.getElementById("teamname");
            select.appendChild(option);
        }
    });

};