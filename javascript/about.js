$(document).ready(function(){
     // this button makes the resume div appear
     // this is a toggle class on the div
     $("#resumeButton").click(function(){
		if (window.innerWidth > 991.98) { 
	 		$("#cvContainerLarge").toggle(500);
			if (document.getElementById("resumeButton").innerText === "Hide Resume"){
		    	document.getElementById("resumeButton").innerText = "Display Resume";
			    return;
		    };
		    document.getElementById("resumeButton").innerText = "Hide Resume";
		} else {
		   $("#cvContainerSmall").toggle(500);
		   if (document.getElementById("resumeButton").innerText === "Hide Resume"){
		        document.getElementById("resumeButton").innerText = "Display Resume";
			    return;
		   };
		   document.getElementById("resumeButton").innerText = "Hide Resume";
		}
	});
});
