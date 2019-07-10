//player information
$(document).ready(function() {
	$.ajax({
		url: "http://localhost:8000/team"
	}).then(function(data){
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			var tr = $('<tr/>');

			$(tr).append("<td>"+data[i].teamName+"</td>")
			$(tr).append("<td>"+data[i].league+"</td>")
			$(tr).append("<td>"+data[i].value+"</td>")
			$(tr).append("<td>"+data[i].nation+"</td>")
			$(tr).append("<td>"+data[i].continent+"</td>")
			$(tr).append("<td>"+data[i].player_id+"</td>")
			
			$(tr).append("<td><a href=editteam.html?"+data[i].id+" class='btn btn-primary'>Edit</a></td>");
			$(tr).append("<td><a href=team.html?"+data[i].id+" id='deleteProduct' class='btn btn-danger'>Delete</a></td>");
      

            $('#teamTablebody').append(tr);
		}
		 $('#teamtables').DataTable();
	});
});