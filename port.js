$(document).ready(function(){

	// this function opens up the portfolio page
	$("#folio").click(function(){
		$("#mainContainer").toggle("blind", 1500);
		$("#portfolioBody").show("fade", 2500);
		$("#navBar").show("fade", 2000);
		$("#thumbContainer").show("fade", 2500);
	});

	// this function shows the bio section
	$("#about").click(function(){
		$("#introCover").toggle("fade");
	});

	// this function exits out of the carousel so you can choose another frame
	$("#x").click(function(){
		$("#portfolio").hide();
		$("#portfolio").empty();
		$("#thumbContainer").show();
	});

	// this function brings us back to the main page 
	$(".glyphicon-home").click(function(){
		$("#mainContainer").show("blind", 1500);
		$("#portfolioBody").hide("fade", 2000);
		$("#portfolio").hide();
		$("#portfolio").empty();
		$("#thumbContainer").show("fade", 4000);
		$("#navBar").hide();
	});

	// ---------------------------------------------------------------------
	// this will generate the art thumbnails 
	// this is the object of images and thumbnails
	var art = [
		{	
			index: 0,
			thumb: "./figures/marcus.jpg", 
			images: ["./figures/image2.png", "./figures/marcus.jpg", "./figures/sketch.jpg"],
			title: ["3-hour Study", "Serenity", "30-min Study" ],
			artType: "figures"
		},

		{
			index: 1,
			thumb: "./artThumbnails/typeThumb", 
			images: ["./typography/beautifulLogo.jpg", "./typography/irishRedAle.png", "./typography/paradise.jpg", "./typography/winterSpiceAle.jpg"],
			artType: "hand drawn font"
		},

		{
			index: 2,
			thumb: "./abstract/03.jpg", 
			images: ["./abstract/01.jpg", "./abstract/03.jpg", "./abstract/iHatePrettyThings"],
			title: ["Untitled", "Afternoon in the park", "I Hate Pretty Things" ],
			artType: "abstract"
		}, 

		{ 
			index: 3,
			thumb: "./logos/mchenryTeam.jpg",
			images: ["./logos/ACP", "./logos/mchenryTeam.jpg"],
			title: ["Photography Logo", "Real Estate Logo"],
			artType: "logos"
		},

		{	
			index: 4,
			thumb: "./patterns/patternsplantfloral.jpg", 
			images: ["./patterns/charlotte.jpg", "./patterns/plants2.png", "./patterns/patternsplantfloral.jpg"],
			artType: "patterns"
		}
	];



	var thumbNames = ["patterns", "paintings", "digital illustrations", "design work"];

	// this function creates the thumbnails
	function createThumbnails(){
		$("#thumbContainer").show("fade", 2500);

		for (var i= 0; i< art.length; i++){
			var displaySquare = $("<div>");
			displaySquare.addClass("artThumbnails");
			displaySquare.append("<div class='title'>" + art[i].artType + "</div>");
			displaySquare.append("<img src='" + art[i].thumb + "'/>");
			displaySquare.attr("attributeNumber", i);
			displaySquare.attr("thumbName", art[i].artType);
			$("#artThumbs").append(displaySquare);
		}
	};

	// calling the function so it can generate the thumbnails
	createThumbnails();

	// ---------------------------------------------------------------------

	// ---------------------------------------------------------------------
	// this function will allow the images to scroll within the mainArtDiv
	$(".artThumbnails").click(function(){
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
			script: "",
			artType: "Hello World"
		}, 

		{
			index: 2,
			demo: "https://tmchenry93.github.io/quiz/quiz",
			thumb:"./artThumbnails/runner",
			image: "./artThumbnails/runnersQuiz.png",
			script: "Javascript, JQuery, CSS, Bootstrap, HTML. \n This is a trivia assignment with multiple choice and a timer.  In this project, I was using Javascript and JQuery to control the html page based on time. \n  Being a competitive student-athlete for ten years, races started out against the people around you and ended with you against the clock.  So to me, there are no excuses.  ON YOUR MARK, GET SET, *BOOOOM* ",
			artType: "Runner's Quiz"
		}, 

		{	
			index: 3,
			demo: "https://tmchenry93.github.io/gifs/buttons",
			thumb:"./artThumbnails/gif",
			image: "./artThumbnails/gifs.png",
			script: "API, Javascript, JQuery, HTML, CSS. \n With this application, I am using a Giphy API to dynamically create gifs based off of user input.  The user input creates buttons which allow the gifs to be about that specific topic. Clicking on the images will allow it to move and clicking it a second time will stop the motion.  In the demo you will start out with some of my personal favorites topics as button choices.  Create more buttons and see what comes back.  Enjoy!",
			artType: "Gifs"
		},

		{
			index: 4,
			demo: "https://tmchenry93.github.io/TrainProject/train",
			thumb:"./artThumbnails/train", 
			image: "./artThumbnails/train.png",
			script: "",
			artType: "Train Project"
		}
	];


	// this function creates the thumbnails
	function createCodeThumbnails(){
		for (var i= 0; i< code.length; i++){
			var displaySquare = $("<div>");
			displaySquare.addClass("codeThumbnails");
			displaySquare.append("<div class='title'>" + code[i].artType + "</div>");
			displaySquare.append("<img src='" + code[i].thumb + "'/>");
			displaySquare.attr("attributeNumber", i);
			// displaySquare.attr("thumbName", art[i].artType);
			$("#codeThumbs").append(displaySquare).show("fade", 2500);
		}
	};

	// calling the function so it can generate the thumbnails
	createCodeThumbnails();

	// ---------------------------------------------------------------------

	// ---------------------------------------------------------------------
	// this function will allow the code body to appear with an image and a demo button 
	$(".codeThumbnails").click(function(){
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

