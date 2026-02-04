$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
     $("#resumeButton").click(function(){
		 var buttonText = document.getElementById("resumeButton").innerText;
	     $("#cvContainer").toggle(1500);
		 buttonText = "Hide Resume";
		 if (buttonText = "Hide Resume"){
			 $("#cvContainer").hide();
			 buttonText = "Display Resume";
		 };
	 });
});
