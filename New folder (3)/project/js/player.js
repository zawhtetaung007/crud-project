//player information
$(document).ready(function() {
	$.ajax({
		url: "http://localhost:8000/player"
	}).then(function(data){
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			var tr = $('<tr/>');

			$(tr).append("<td>"+data[i].name+"</td>")
			$(tr).append("<td>"+data[i].age+"</td>")
			$(tr).append("<td>"+data[i].position+"</td>")
			$(tr).append("<td>"+data[i].club+"</td>")
			$(tr).append("<td>"+data[i].apprances+"</td>")
			$(tr).append("<td>"+data[i].goals+"</td>")
			$(tr).append("<td>"+data[i].assists+"</td>")

			$(tr).append("<td><a href=editplayer.html?"+data[i].id+" class='btn btn-primary'>Edit</a></td>");
			$(tr).append("<td><a href=player.html?"+data[i].id+" id='deleteProduct' class='btn btn-danger'>Delete</a></td>");
      

            $('#playerTableBody').append(tr);
		}
		 $('#playertable').DataTable();
	});
});