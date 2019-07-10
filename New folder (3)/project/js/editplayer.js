$(document).ready(function(){
    console.log(window.location.search.substring(1));
    var SearchString = window.location.search.substring(1);
    $.ajax({
        url:"http://localhost:8000/player/"+SearchString+"/"
    }).then(function(data) {
        console.log(data);


    $('[id=e_teamname]').attr('value',data.teamName);
    $('[id=e_league]').attr('value',data.league);
    $('[id=e_value]').attr('value',data.value);
    $('[id=e_nation]').attr('value',data.nation);
    $('[id=e_continent]').attr('value',data.continent);
   
});

    $("#editplaye").click(function(){

        var Name = document.getElementById("r_name").value;
        var Age = document.getElementById("r_age").value;
        var Position = document.getElementById("r_position").value;
        var Club = document.getElementById("r_club").value;
        var Apperance = document.getElementById("r_apperances").value;
        var Goals = document.getElementById("register_goals").value;
        var Assists = document.getElementById("r_assists").value;

        var post_data = {
        "name": Name,
        "age":Age ,
        "position":Position ,
        "club": Club,
        "apprances":Apperance ,
        "goals": Goals,
        "assists": Assists

        }

    $.ajax({
                        type    : 'PUT',
                        contentType : 'application/json; charset=utf-8',
                        url:"http://localhost:8000/player/"+SearchString+"/",

                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Edit Team");
                            window.location.assign("team.html");
                        }
                    });
    });



});