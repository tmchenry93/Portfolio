$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
     $("#resumeButton").click(function(){
		 document.getElementById("resumeButton").innerText;
	     $("#cvContainer").toggle(500);
		 document.getElementById("resumeButton").innerText = "Hide Resume";
		 if (buttonText = "Hide Resume"){
			 $("#cvContainer").hide();
			 buttonText = "Display Resume";
		 };
	 });
});
