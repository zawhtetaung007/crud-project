 $(document).ready(function() {
        $("#addteam").click(function(){

        var Name = document.getElementById("r_teamname").value;
        var League = document.getElementById("r_league").value;
        var Value = document.getElementById("r_value").value;
        var Nation = document.getElementById("r_nation").value;
        var Continent = document.getElementById("r_continent").value;
        
        var post_data = {
       "teamName": Name,
        "league": League,
        "value": Value,
        "nation": Nation,
        "continent": Continent,
    
    }
    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/team/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! You added New Player");
                             window.location.assign("team.html")
                        }
                    });
    });});



