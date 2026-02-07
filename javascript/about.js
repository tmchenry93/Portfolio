$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
	 if (window.innerWidth > 991.98px) {
        $("#resumeButton").click(function(){
	       $("#cvContainerLarge").toggle(500);
		   if (document.getElementById("resumeButton").innerText === "Hide Resume"){
		      document.getElementById("resumeButton").innerText = "Display Resume";
			  return;
		   };
		   document.getElementById("resumeButton").innerText = "Hide Resume";
		 
	    });
	 } else {
		 $("#resumeButton").click(function(){
	       $("#cvContainerSmall").toggle(500);
		   if (document.getElementById("resumeButton").innerText === "Hide Resume"){
		      document.getElementById("resumeButton").innerText = "Display Resume";
			  return;
		   };
		   document.getElementById("resumeButton").innerText = "Hide Resume";
		 
	    });
	 }
});
