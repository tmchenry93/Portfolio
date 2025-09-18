$(document).ready(function(){

	/*
	this is the object of images, image names and thumbnails
	*/
	var art = [

		{	

			index: 0, 
			images: ["Wishing\ Bed/DSC_0003.JPG", "Wishing\ Bed/DSC_0013.JPG", "Wishing\ Bed/Wishing\ Bed.JPG"],
			title: ["Wishing Bed - Interactive/ Conceptual/ Mixed Media - 2017", "Wishing Bed - Interactive/ Conceptual/ Mixed Media - 2017", "Wishing Bed - Interactive/ Conceptual/ Mixed Media - 2017"],
			artType: "Wishing Bed", 
			description: "is an interactive piece which directed the audience to write their dreams and aspirations on notecards.  Then, throw them back in the bed, as you throw a coin in a well. This piece was showcased in the exhibition, <i>Mimosa Daydreams</i>. The exhibition's main purpose was to depict the experiences, departures and anxieties transitioning into adulthood.  <i>Wishing Bed</i> serves as a bittersweet microscope emphasizing how lonely we are as people and how much we need a genuine community."
		
		},

		{

			index: 1,
			images: ["Abstract\ Paintings/01.jpg", "Abstract\ Paintings/20230628_014835.jpg", "Abstract\ Paintings/brainChild.jpg", "Abstract\ Paintings/DSC_0037.JPG", "Abstract\ Paintings/Abstract\ Blue.jpg"],
			title: ["Illusions at Sea - Acrylic on Wood - 4ft by 3 ft - 2016", "Deluded Stars - Acrylic on Canvas - 4ft by 2ft - 2023", "Brainchild - Acrylic on Wood - 2016", "Abstract Pink - Acrylic on Wood Panel - 3ft by 1ft - 2019", "Abstract Blue - Acrylic on Canvas - 4ft by 2.5ft - 2020" ],
			artType: "Abstract Paintings",
			description: "is a collection of paintings throughout the years. My process is expressive and at random.  I randomly pick color palettes or use inspirations from color combinations I enjoy seeing out in the world (nature, fashion, architectural elements). I visually enjoy stripes so I try to incorporate line work anyway I can."
		
		}, 

		{

			index: 2,
			images: ["Caravan/caravanv1.png"],
			title: ["Caravan v1 - Acrylic on Wood - 1.5ft by 1.5ft - 2022"],
			artType: "Caravan",
			description: "centers around the idea and the process of taking adventures and/ or risks in life. This series’ inspiration stems from my first road trip through Kansas on I70 and the Romantic period’s ideology surrounding Nature and the Sublime. The wide open fields and never-ending views of road and land were the epitome of the Sublime. Through a Romantic lens, I think about what motivated me to take my first road trip and what pushes me to continue to seek out more risk and adventure. Has it benefited or harmed me in the grand scheme of things? I collect photos of windows and mirrors from my travels and reference them in my works."
		
		},

		{

			index: 3,
			images: ["I\ Hate\ Pretty\ Things/IHPT1.JPG", "I\ Hate\ Pretty\ Things/IHPT2.JPG", "I\ Hate\ Pretty\ Things/ihpt4.jpg", "I\ Hate\ Pretty\ Things/ihpthings.jpg"],
			title: ["IHPT v1 - Acrylic on Canvas - 4ft by 5ft - 2017", "IHPT v2 - Acrylic on Canvas - 9in by 9in - 2018", "IHPT v3 - Acrylic on Canvas - 3ft by 3ft - 2022", "IHPT: Lust - Mixed Media - 2019"],
			artType: "I Hate Pretty Things", 
			description: "is an examination of the convoluted relationship I have with my fantasies. The pretty things are the catalysts to some of my fantasies and unique to my experience. They consume my thoughts and fuel my imagination. These pretty things serve as calculated distractions. In my works, I reference people I have met and formed some level of attractive toward, a crush or a muse. Pinks, blush tones and warm colors are intentionally used to portray a sense of intimacy, sexuality and the idealism behind rose-tinted glasses."
		
		},

	];
	// ----------------------------------------------------------------------------------------------------------------------------------
	
	
	/*
	global variables for 'iconcontainers', 'gallerydetailcontainer', 'galleryiconcontainer' divs
	*/
	var iconElement = document.querySelectorAll(".iconContainer");

	var seeGallery = document.querySelectorAll(".seeGallery");
	// ----------------------------------------------------------------------------------------------------------------------------------


	/* 
	this function writes the art type inside of the art icons
	*/
	function writeIcon(iconName){

		iconName.innerHTML = "<div class='iconTitle'>" + iconName.getAttribute("name") + "</div>"

	}

	iconElement.forEach(writeIcon);
	// ----------------------------------------------------------------------------------------------------------------------------------

	
	/* 
	this function builds the carousel
	*/
	function buildCarousel() {

		var carousel = document.createElement("div");
		carousel.setAttribute("class", "carousel slide"); 
		carousel.setAttribute("id", "carousel-example-generic");
		carousel.setAttribute("data-ride", "carousel");
		var cc = document.getElementById("carouselContainer");
		cc.append(carousel);

		var carouselInner = document.createElement("div");
		carouselInner.setAttribute("id", "carouselinner");
		carouselInner.setAttribute("class", "carousel-inner");
		carouselInner.setAttribute("role", "listbox");
		carousel.append(carouselInner);

		var leftControl = document.createElement("a");
		leftControl.setAttribute("id", "leftCarouselNav");
		leftControl.setAttribute("class", "left carousel-control");
		leftControl.setAttribute("href", "#carousel-example-generic");
		leftControl.setAttribute("role", "button");
		leftControl.setAttribute("data-slide", "prev");
		carousel.append(leftControl);

		document.getElementById("leftCarouselNav").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="color:#180976;" width="30" height="30" fill="currentColor" aria-hidden="true" class="bi bi-chevron-compact-left glyphicon glyphicon-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/></svg>';

		/*
		var shape = document.createElement("span");
		shape.setAttribute("class", "glyphicon glyphicon-chevron-left");
		shape.setAttribute("aria-hidden", "true");
		leftControl.append(shape);
		*/

		var prev = document.createElement("span");
		prev.setAttribute("class", "sr-only");
		leftControl.append(prev);

		var rightControl = document.createElement("a");
		rightControl.setAttribute("id", "rightCarouselNav");
		rightControl.setAttribute("class", "right carousel-control");
		rightControl.setAttribute("href", "#carousel-example-generic");
		rightControl.setAttribute("role", "button");
		rightControl.setAttribute("data-slide", "next");
		carousel.append(rightControl);

		document.getElementById("rightCarouselNav").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="color:#180976;" width="30" height="30" fill="currentColor" aria-hidden="true" class="bi bi-chevron-compact-right glyphicon glyphicon-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/></svg>'

		/*
		var rshape = document.createElement("span");
		rshape.setAttribute("class", "glyphicon glyphicon-chevron-right");
		rshape.setAttribute("aria-hidden", "true");
		rightControl.append(rshape);
		*/

		var next = document.createElement("span");
		next.setAttribute("class", "sr-only");
		rightControl.append(next);

	};


	/*
	this function populates the carousel with descriptions of each project and creates a new 'carousel-indicators' div 
	*/
	function projectDescriptionCarousel(){
		
		var carousel = document.getElementById("carousel-example-generic");
		var carouselInner = document.getElementById("carouselinner");

		var orderedList = document.createElement("ol");
		orderedList.setAttribute("class", "carousel-indicators");
		carousel.append(orderedList);

		var mainList = document.createElement("li");
		mainList.setAttribute("data-target", "#carousel-example-generic");
		mainList.setAttribute("data-slide-to", "0");
		mainList.setAttribute("class", "active");
		orderedList.append(mainList);

		for (var i = 1; i < art.length; i++){	

			var list = document.createElement("li");
			list.setAttribute("data-target", "#carousel-example-generic");
			list.setAttribute("data-slide-to", "'" + i + "'");
			orderedList.append(list);
		
		}

		var mainItem = document.createElement("div");
		mainItem.setAttribute("id", "mainitem");
		mainItem.setAttribute("class", "item active descriptionItems");
		carouselInner.append(mainItem);

		var mainCaption = document.createElement("div");
		mainCaption.setAttribute("id", "cc0")
		mainCaption.setAttribute("class", "carousel-caption");
		mainItem.append(mainCaption);

		document.getElementById("cc0").innerHTML = '<p class="descriptionTitle">' + art[0].artType + '</p> <p class="paragraph">' + art[0].description + '</p> <div class="seeGallery" onclick="seeGalleryFunc(event)" name="' + art[0].artType + '">Click to see ' + art[0].artType + ' Gallery</div>';

		for (var i = 1; i < art.length; i++){	

			var item = document.createElement("div");
			item.setAttribute("class", "descriptionItems item " + i);
			carouselInner.append(item);

			var caption = document.createElement("div");
			caption.setAttribute("id", "cc" + i);
			caption.setAttribute("class", "carousel-caption " + i);
			item.append(caption);

			document.getElementById("cc" + i).innerHTML = '<p class="descriptionTitle">' + art[i].artType + '</p> <p class="paragraph">' + art[i].description + '</p> <div class="seeGallery" onclick="seeGalleryFunc(event)" name="' + art[i].artType + '">Click to see ' + art[i].artType + ' Gallery</div>';
		
		}

	};


	/*
	this section is for the start of the page. The project descriptions carousel will be open.
	*/
	buildCarousel();

	projectDescriptionCarousel();


	/* 
	this function populates the 'carouselinner' div with images and creates a new 'carousel-indicators' div
	*/
	function addImgToCarousel(selectedArt){

		$("#closeImageCarousel").show();

		function checkNameAttr(element) { 

			return element.artType == selectedArt;

		};

		var selected = art.findIndex(checkNameAttr);

		if (selected === undefined || selected == "undefined") {
			console.log("selected art doesn't exist");
			return "";
		};

		var carousel = document.getElementById("carousel-example-generic");
		var carouselInner = document.getElementById("carouselinner");

		var orderedList = document.createElement("ol");
		orderedList.setAttribute("class", "carousel-indicators");
		carousel.append(orderedList);

		var mainList = document.createElement("li");
		mainList.setAttribute("data-target", "#carousel-example-generic");
		mainList.setAttribute("data-slide-to", "0");
		mainList.setAttribute("class", "active");
		orderedList.append(mainList);

		for (var i = 1; i < art[selected].images.length; i++){	

			var list = document.createElement("li");
			list.setAttribute("data-target", "#carousel-example-generic");
			list.setAttribute("data-slide-to", "'" + i + "'");
			orderedList.append(list);

		}

		var mainItem = document.createElement("div");
		mainItem.setAttribute("id", "mainitem");
		mainItem.setAttribute("class", "item active");
		carouselInner.append(mainItem);

		var mainImage = document.createElement("img");
		mainImage.setAttribute("src", art[selected].images[0]);
		mainImage.setAttribute("class", "img-fluid");
		(mainItem).append(mainImage);

		var mainCaption = document.createElement("div");
		mainCaption.setAttribute("class", "carousel-caption");
		mainCaption.append(art[selected].title[0]);
		mainItem.append(mainCaption);

		for (var i = 1; i < art[selected].images.length; i++){	

			var item = document.createElement("div");
			item.setAttribute("class", "item " + i);
			carouselInner.append(item);

			var image = document.createElement("img");
			image.setAttribute("class", "pieces img-fluid");
			image.setAttribute("src", art[selected].images[i]);
			item.append(image);

			var caption = document.createElement("div");
			caption.setAttribute("class", "carousel-caption " + i);
			caption.append(art[selected].title[i]);
			item.append(caption);

		}

	};
	// ----------------------------------------------------------------------------------------------------------------------------------


	/*
	If divs with class, "iconContainer", are clicked, the "galleryIconContainer" div shrinks and the "galleryDetailContainer" appears.
	When the "galleryDetailContainer" appears, the carousel appears and the images are
	*/
	$(".iconContainer").click(function(){

		var carouselElement = document.getElementById("carousel-example-generic");

		if (!carouselElement){
			buildCarousel();

			var selectedIcon = this.getAttribute("name");

			if (selectedIcon && selectedIcon != "undefined") {
		        addImgToCarousel(selectedIcon);
			} else {
				alert("green");
			};
		} else {
			$('.carousel-inner').empty();
			$(".carousel-indicators").remove();

			var selectedIcon = this.getAttribute("name");

			if (selectedIcon && selectedIcon != "undefined") {
		        addImgToCarousel(selectedIcon);
			} else {
				alert("green");
			};	
		}
		
	});


	/* 
	this click function removes the description section from the carousel and re-populates it with the respective images.
	*/
	window.seeGalleryFunc = function (event){

		$("#closeImageCarousel").show();
  		$('.carousel-inner').empty();
		$(".carousel-indicators").remove();

		var descriptionButton = event.currentTarget.getAttribute("name");

		if (descriptionButton && descriptionButton != "undefined") {
		    addImgToCarousel(descriptionButton);
		} else {
		    alert("green");
		};

	};


	/*
	this click function empties the images from the carousel and re-populates it with the description sections 
	*/
	var closeImgCar = document.getElementById("closeImageCarousel");

	closeImgCar.addEventListener("click", function (e) {

  		$("#closeImageCarousel").hide();
		$('.carousel-inner').empty();
		$(".carousel-indicators").remove();
		projectDescriptionCarousel();

	});
	
});
