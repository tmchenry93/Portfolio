$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
     $("#resumeButton").click(function(){
	     $("#cvContainer").toggle(500);
		 if (document.getElementById("resumeButton").innerText === "Hide Resume"){
			document.getElementById("resumeButton").innerText = "Display Resume";
			return;
		 };
		 document.getElementById("resumeButton").innerText = "Hide Resume";
		 
	 });
});
