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
		// {	
		// 	index: 0,
		// 	thumb: "./artThumbnails/figureThumbnail", 
		// 	images: ["./figures/sketch.jpg"],
		// 	title: ["30-min Study"],
		// 	artType: "Figures"
		// },

		{
			index: 1,
			thumb: "./artThumbnails/type", 
			images: ["./typography/beautifulLogo.jpg", "./typography/paradise.png", "./typography/simulacra.jpg"],
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
			thumb: "./logos/ESOmockup.jpg",
			images: ["./logos/ACP", "./logos/ESOmockup.jpg", "./beerBrand/beerBrand"],
			title: ["Photography Logo", "Endurance Sports Outfitters", "Beer Label"],
			artType: "Vector Illustrations"
		},

		{	
			index: 4,
			thumb: "./patterns/charlotte", 
			images: ["./patterns/charlotte", "./patterns/plantfloral.png", "./patterns/plantPattern.png", "./patterns/fingerprint"],
			title: [],
			artType: "Patterns"
		},
		 
		{
			index: 5,
			thumb: "./layouts/mimosa",
			images: ["./layouts/WPCF.jpg", "./layouts/adventureComic.png", "./layouts/mimosa"],
			title: ["Why Penguins Can't Fly (Published)", "Comic Cover", "Gallery Poster"],
			artType: "Layouts"
		}

		// {
		// 	index: 6,
		// 	thumb: "./beerBrand/beerBrand",
		// 	images: ["./beerBrand/winterSpiceAle.jpg", "./beerBrand/f&hbeer.png", "./beerBrand/beerBrand"],
		// 	title: ["Beer #1", "Beer Logo", "Beer Label"],
		// 	artType: "Beer Brand"
		// }
	];



	// var thumbNames = ["patterns", "paintings", "digital illustrations", "design work"];

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
			thumb:"./artThumbnails/helloWorld.png",
			image: "./artThumbnails/helloWorld.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>API, Google Firebase, Javascript, JQuery, Bootstrap, CSS, HTML</p><p>What is the first thing we do when planning a trip?  Search for things to do.  The first thing that pop up in our search engine are tourist guides and generic reviews.  Hello World was created for travelers of all backgrounds to share experiences and places in a journal entry.  You can get to know your fellow travelers and their stories around the country by searching a particular city or add your own experience to the communal journal.</p>",
			artType: "Hello World"
		}, 

		{
			index: 2,
			demo: "https://tmchenry93.github.io/quiz/quiz",
			thumb:"./artThumbnails/runnersQuiz",
			image: "./artThumbnails/runnersQuiz.png",
			script: "<p style='font-size: 16px; font-weight: bolder;'>Javascript, JQuery, CSS, Bootstrap, HTML.</p><p>This is a trivia assignment with multiple choice and a timer.  In this project, I was using Javascript and JQuery to control the html page based on time.  Being a competitive student-athlete for ten years, races started out against the people around you and ended with you against the clock.  So to me, there are no excuses.  ON YOUR MARK, GET SET, *BOOOOM* </p>",
			artType: "Runner's Quiz"
		}, 

		{	
			index: 3,
			demo: "https://tmchenry93.github.io/gifs/buttons",
			thumb:"./artThumbnails/gifs",
			image: "./artThumbnails/gifs",
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


