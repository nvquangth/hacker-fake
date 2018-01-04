var content;
$.ajax({
	url: "data/content.json",
	dataType: "text",
	success: function(data) {
		content = JSON.parse(data);
		

	},
	error: function(data) {
		alert("Failed");
	}
});

var i = 0;
$("body").keyup(function () {
	$("body").append(content[i]);
	if (i == content.length) {
		i = 0;
	} else {
		i++;
	}
})

var flag = false;
$("#terminal").hide();
$("#btn-terminal").click(function () {
	if (flag) {
		$("#terminal").hide();
		$("#btn-terminal").html("Run")
		flag = false;
	} else {
		$("#terminal").show();
		$("#btn-terminal").html("Stop")
		flag = true;
	}
	
});