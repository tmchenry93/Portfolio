$(document).ready(function(){

	// this function opens up the portfolio page
	$("#folio").click(function(){
		$("#mainContainer").hide("blind", 1500);
		$("#portfolioBody").show("fade", 1500);
		$("#navBar").show("fade", 1000);
		$("#thumbContainer").show("fade");
	});

	// this function shows the contact section
	$("#aboutTab").click(function(){
		$("#aboutInfo").show("blind", 1500);
		$("#mainContainer").hide("blind", 1500);
		$("#aboutNavBar").show("fade", 1000);
	});

	// this function exits out of the carousel so you can choose another frame
	$("#x").click(function(){
		$("#portfolio").hide();
		$("#portfolio").empty();
		$("#thumbContainer").show();
		document.getElementById("x").style.color = "black";
		document.getElementById("artLink").style.color = "white";
		document.getElementById("codeLink").style.color = "white";

	});

	// this function brings us back to the main page 
	$(".glyphicon-home").click(function(){
		$("#mainContainer").show("blind", 1000);
		$("#portfolioBody").hide("fade", 2000);
		$("#aboutInfo").hide("fade", 2000);
		$("#portfolio").hide();
		$("#portfolio").empty();
		$("#thumbContainer").hide("fade");
		$("#aboutNavBar").hide();
		$("#navBar").hide();
	});

	// this button makes the resume div appear
	// this is a toggle class on the div
	$("#viewResume").click(function(){
		$("#resume").toggle("fade");
	});

	// ---------------------------------------------------------------------
	// this will generate the art thumbnails 
	// this is the object of images and thumbnails
	var art = [
		{	
			index: 0,
			thumb: "", 
			images: ["./figures/sketch.jpg"],
			title: ["30-min Study"],
			artType: "Figures"
		},

		{
			index: 1,
			thumb: "./artThumbnails/typeThumb", 
			images: ["./typography/beautifulLogo.jpg", "./typography/paradise.png", "./typography/winterSpiceAle.jpg"],
			title: [],
			artType: "Hand Drawn Font"
		},

		{
			index: 2,
			thumb: "./abstract/iHatePrettyThings", 
			images: ["./abstract/01.jpg", "./abstract/03.jpg", "./abstract/iHatePrettyThings", "./abstract/brainChild.jpg"],
			title: ["Illusions at Sea", "Afternoon in the park", "I Hate Pretty Things", "Brainchild" ],
			artType: "Abstract"
		}, 

		{ 
			index: 3,
			thumb: "./artThumbnails/ESO",
			images: ["./logos/ACP", "./logos/ESOmockup.jpg"],
			title: ["Photography Logo", "Endurance Sports Outfitters"],
			artType: "Vector Illustrations"
		},

		{	
			index: 4,
			thumb: "./patterns/patternsplantfloral.jpg", 
			images: ["./patterns/charlotte", "./patterns/plantfloral.png", "./patterns/plantPattern.png"],
			title: [],
			artType: "Patterns"
		},
		 
		{
			index: 5,
			thumb: "./layouts/penguinCover.jpg",
			images: ["./layouts/WPCF.jpg", "./layouts/adventureComic.png"],
			title: ["Why Penguins Can't Fly (Published)", "Comic Cover"],
			artType: "Layouts"
		}
	];



	var thumbNames = ["patterns", "paintings", "digital illustrations", "design work"];

	// this function creates the thumbnails
	function createThumbnails(){

		for (var i= 0; i< art.length; i++){
			var displaySquare = $("<div>");
			displaySquare.addClass("artThumbnails thumb" + i);
			displaySquare.append("<div class='title'>" + art[i].artType + "</div>");
			displaySquare.append("<img class='img' src='" + art[i].thumb + "'/>");
			displaySquare.attr("attributeNumber", i);
			displaySquare.attr("thumbName", art[i].artType);
			$("#artThumbs").append(displaySquare);
		}
	};

	// calling the function so it can generate the thumbnails
	createThumbnails();

	// creating the component which allows you to see what thumbnail you are hovering over
	// this lets the viewer know whether or not they have seen all the thumbnails or if they need to keep scrolling horizontally
	function createThumbComponent(){

		for (var i=0; i< art.length; i ++){
			var component= $("<div>");
			component.addClass("component component" + i);
			component.attr("number", i);
			$("#artComponent").append(component);
		}

	};

	// calling the function so it can generate the thumbnail components on the DOM
	createThumbComponent();

	
	// these variables are defining the element which will be changed when hovering another element
	var hoverOn1 = function(){
	    
		$(".component0").css("background-color", "black");
			
	};

	var hoverOff1 = function(){
		
		$(".component0").css("background-color", "white");

	};

	var hoverOn2 = function(){
	    
		$(".component1").css("background-color", "black");
			
	};

	var hoverOff2 = function(){
		
		$(".component1").css("background-color", "white");

	};

	var hoverOn3 = function(){
	    
		$(".component2").css("background-color", "black");
			
	};

	var hoverOff3 = function(){
		
		$(".component2").css("background-color", "white");

	};

	var hoverOn4 = function(){
	    
		$(".component3").css("background-color", "black");
			
	};

	var hoverOff4 = function(){
		
		$(".component3").css("background-color", "white");

	};

	var hoverOn5 = function(){
	    
		$(".component4").css("background-color", "black");
			
	};

	var hoverOff5 = function(){
		
		$(".component4").css("background-color", "white");

	};

	var hoverOn6 = function(){
	    
		$(".component5").css("background-color", "black");
			
	};

	var hoverOff6 = function(){
		
		$(".component5").css("background-color", "white");

	};
	
	// This is calling for the particular element to change on mouseover and mouseleave methods
	$('.thumb0').mouseover(hoverOn1).mouseleave(hoverOff1);
	$('.thumb1').mouseover(hoverOn2).mouseleave(hoverOff2);
	$('.thumb2').mouseover(hoverOn3).mouseleave(hoverOff3);
	$('.thumb3').mouseover(hoverOn4).mouseleave(hoverOff4);
	$('.thumb4').mouseover(hoverOn5).mouseleave(hoverOff5);
	$('.thumb5').mouseover(hoverOn6).mouseleave(hoverOff6);



	// ---------------------------------------------------------------------

	// ---------------------------------------------------------------------
	// this function will allow the images to scroll within the mainArtDiv
	$(".artThumbnails").click(function(){

		document.getElementById("x").style.color = "white";
		document.getElementById("artLink").style.color = "black";
		document.getElementById("codeLink").style.color = "black";

		$this = $(this);
		var artNumber = $(this).attr("attributeNumber");

		$("#thumbContainer").hide();

			var carousel = $("<div>");
			carousel.addClass("carousel slide"); 
			carousel.attr("id", "carousel-example-generic");
			carousel.attr("data-ride", "carousel");
			$("#portfolio").append(carousel).show();

			var orderedList = $("<ol>");
			orderedList.addClass("carousel-indicators");
			carousel.append(orderedList);

			var mainList = $("<li>");
			mainList.attr("data-target", "#carousel-example-generic");
			mainList.attr("data-slide-to", "0");
			mainList.addClass("active");
			orderedList.append(mainList);

		for (var i = 1; i < art[artNumber].images.length; i++){	
			var list = $("<li>");
			list.attr("data-target", "#carousel-example-generic");
			list.attr("data-slide-to", "'" + artNumber + "'");
			orderedList.append(list);
		}

			var carouselContainer = $("<div>");
			carouselContainer.addClass("container");
			carousel.append(carouselContainer);

			var carouselInner = $("<div>");
			carouselInner.addClass("carousel-inner");
			carouselInner.attr("role", "listbox");
			carouselContainer.append(carouselInner);

			var mainItem = $("<div>");
			mainItem.addClass("item active");
			carouselInner.append(mainItem);
	
			var mainImage = $("<img>");
			mainImage.attr("src", art[artNumber].images[0]);
			mainImage.addClass("img-fluid");
			(mainItem).append(mainImage);

			var mainCaption = $("<div>");
			mainCaption.addClass("carousel-caption");
			mainCaption.append(art[artNumber].title[0]);
			mainItem.append(mainCaption);

		for (var i = 1; i < art[artNumber].images.length; i++){	
			var item = $("<div>");
			item.addClass("item " + artNumber);
			carouselInner.append(item);

			var image = $("<img>");
			image.addClass("pieces img-fluid");
			image.attr("src", art[artNumber].images[i]);
			item.append(image);

			var caption = $("<div>");
			caption.addClass("carousel-caption " + i);
			caption.append(art[artNumber].title[i]);
			item.append(caption)
		}

			var leftControl = $("<a>");
			leftControl.addClass("left carousel-control");
			leftControl.attr("href", "#carousel-example-generic");
			leftControl.attr("role", "button");
			leftControl.attr("data-slide", "prev");
			carousel.append(leftControl);

			var shape = $("<span>");
			shape.addClass("glyphicon glyphicon-chevron-left");
			shape.attr("aria-hidden", "true");
			leftControl.append(shape);

			var prev = $("<span>");
			prev.addClass("sr-only");
			leftControl.append(prev);

			var rightControl = $("<a>");
			rightControl.addClass("right carousel-control");
			rightControl.attr("href", "#carousel-example-generic");
			rightControl.attr("role", "button");
			rightControl.attr("data-slide", "next");
			carousel.append(rightControl);

			var rshape = $("<span>");
			rshape.addClass("glyphicon glyphicon-chevron-right");
			rshape.attr("aria-hidden", "true");
			rightControl.append(rshape);

			var next = $("<span>");
			next.addClass("sr-only");
			rightControl.append(next);

	});

	// ---------------------------------------------------------------------
	// this will generate the code thumbnails 
	// this is the object of images and thumbnails

	var code = [
		{
			index: 0,
			demo: "https://tmchenry93.github.io/HelloWorld",
			thumb:"./artThumbnails/hellologo",
			image: "./artThumbnails/helloWorld.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>API, Google Firebase, Javascript, JQuery, Bootstrap, CSS, HTML</p><p>What is the first thing we do when planning a trip?  Search for things to do.  The first thing that pop up in our search engine are tourist guides and generic reviews.  Hello World was created for travelers of all backgrounds to share experiences and places in a journal entry.  You can get to know your fellow travelers and their stories around the country by searching a particular city or add your own experience to the communual journal.</p>",
			artType: "Hello World"
		}, 

		{
			index: 2,
			demo: "https://tmchenry93.github.io/quiz/quiz",
			thumb:"./artThumbnails/runner",
			image: "./artThumbnails/runnersQuiz.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>Javascript, JQuery, CSS, Bootstrap, HTML.</p><p>This is a trivia assignment with multiple choice and a timer.  In this project, I was using Javascript and JQuery to control the html page based on time.  Being a competitive student-athlete for ten years, races started out against the people around you and ended with you against the clock.  So to me, there are no excuses.  ON YOUR MARK, GET SET, *BOOOOM* </p>",
			artType: "Runner's Quiz"
		}, 

		{	
			index: 3,
			demo: "https://tmchenry93.github.io/gifs/buttons",
			thumb:"./artThumbnails/gif",
			image: "./artThumbnails/gifs.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>API, Javascript, JQuery, HTML, CSS.</p><p>With this application, I am using a Giphy API to dynamically create gifs based off of user input.  The user input creates buttons which allow the gifs to be about that specific topic. Clicking on the images will allow it to move and clicking it a second time will stop the motion.  In the demo you will start out with some of my personal favorites topics as button choices.  Create more buttons and see what comes back.  Enjoy!</p>",
			artType: "Gifs"
		},

		{
			index: 4,
			demo: "https://tmchenry93.github.io/TrainProject/train",
			thumb:"./artThumbnails/train", 
			image: "./artThumbnails/train.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>Google Firebase, MomentJS, Javascript, JQuery, Bootstrap, CSS, HTML</p><p>This train schedule website takes user input to create a new train.  With the information taken, MomentJS is used to calculate the train's arrival time and how many minutes the train is away in real time.",
			artType: "Train Schedule"
		}
	];


	// this function creates the thumbnails
	function createCodeThumbnails(){
		for (var i= 0; i< code.length; i++){
			var displaySquare = $("<div>");
			displaySquare.addClass("codeThumbnails codeThumb" + i);
			displaySquare.append("<div class='title'>" + code[i].artType + "</div>");
			displaySquare.append("<img class='img' src='" + code[i].thumb + "'/>");
			displaySquare.attr("attributeNumber", i);
			$("#codeThumbs").append(displaySquare).show("fade", 2500);
		}
	};

	// calling the function so it can generate the thumbnails
	createCodeThumbnails();

	// creating the component which allows you to see what thumbnail you are hovering over
	// this lets the viewer know whether or not they have seen all the thumbnails or if they need to keep scrolling horizontally
	function createCodeThumbComponent(){

		for (var i=0; i< code.length; i ++){
			var component= $("<div>");
			component.addClass("component codeComponent" + i);
			$("#codeComponent").append(component);
		}

	};

	// calling the function so it can generate the thumbnail components on the DOM
	createCodeThumbComponent();

	// ---------------------------------------------------------------------


	// these variables are defining the element which will be changed when hovering another element
	var hoverOn1 = function(){
	    
		$(".codeComponent0").css("background-color", "black");
			
	};

	var hoverOff1 = function(){
		
		$(".codeComponent0").css("background-color", "white");

	};

	var hoverOn2 = function(){
	    
		$(".codeComponent1").css("background-color", "black");
			
	};

	var hoverOff2 = function(){
		
		$(".codeComponent1").css("background-color", "white");

	};

	var hoverOn3 = function(){
	    
		$(".codeComponent2").css("background-color", "black");
			
	};

	var hoverOff3 = function(){
		
		$(".codeComponent2").css("background-color", "white");

	};

	var hoverOn4 = function(){
	    
		$(".codeComponent3").css("background-color", "black");
			
	};

	var hoverOff4 = function(){
		
		$(".codeComponent3").css("background-color", "white");

	};
	
	// This is calling for the particular element to change on mouseover and mouseleave methods
	$('.codeThumb0').mouseover(hoverOn1).mouseleave(hoverOff1);
	$('.codeThumb1').mouseover(hoverOn2).mouseleave(hoverOff2);
	$('.codeThumb2').mouseover(hoverOn3).mouseleave(hoverOff3);
	$('.codeThumb3').mouseover(hoverOn4).mouseleave(hoverOff4);


	// ---------------------------------------------------------------------
	// this function will allow the code body to appear with an image and a demo button 
	$(".codeThumbnails").click(function(){

		document.getElementById("x").style.color = "white";
		document.getElementById("artLink").style.color = "black";
		document.getElementById("codeLink").style.color = "black";

		$this = $(this);
		var codeNumber = $(this).attr("attributeNumber");

		$("#thumbContainer").hide();

		var title = $("<div>");
		title.addClass("codeTitle");
		title.append(code[codeNumber].artType + "<hr>");
		$("#portfolio").append(title).show();

		var image = $("<img>")
		image.attr("src", code[codeNumber].image);
		image.addClass("codingScreenShots");
		$("#portfolio").append(image);

		var script = $("<p>");
		script.addClass("projectDescription");
		script.append(code[codeNumber].script);
		$("#portfolio").append(script);
		
		var demo = $("<button>");
		demo.addClass("demo");
		demo.append("Demo Project");

		var link = $("<a>");
		link.attr("href", code[codeNumber].demo);
		link.attr("target", "_blank");
		link.append(demo);

		$("#portfolio").append(link);
	});

});


