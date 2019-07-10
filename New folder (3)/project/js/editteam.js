$(document).ready(function(){
    console.log(window.location.search.substring(1));
    var SearchString = window.location.search.substring(1);
    $.ajax({
        url:"http://localhost:8000/team/"+SearchString+"/"
    }).then(function(data) {
        console.log(data);


    $('[id=e_teamname]').attr('value',data.teamName);
    $('[id=e_league]').attr('value',data.league);
    $('[id=e_value]').attr('value',data.value);
    $('[id=e_nation]').attr('value',data.nation);
    $('[id=e_continent]').attr('value',data.continent);
   
});

    $("#editteam").click(function(){

        var Name=document.getElementById("e_teamname").value;
        var League=document.getElementById("e_league").value;       
        var Value=document.getElementById("e_value").value;
        var Nation=document.getElementById("e_nation").value;
        var Continent=document.getElementById("e_continent").value;

        var post_data = {
        "teamname": Name,
        "league": League,
        "value": Value,
        "nation": Nation,
        "continent": Continent,

        }

    $.ajax({
                        type    : 'PUT',
                        contentType : 'application/json; charset=utf-8',
                        url:"http://localhost:8000/team/"+SearchString+"/",

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