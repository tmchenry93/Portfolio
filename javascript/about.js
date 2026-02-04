$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
	var buttonText = document.getElementById("resumeButton").innerText;
     $("#resumeButton").click(function(){
		 if (buttonText = "Hide Resume"){
			 $("#cvContainer").toggle(500);
			 buttonText = "Display Resume";
		 };
	     $("#cvContainer").toggle(500);
		 buttonText= "Hide Resume";
	 });
});
