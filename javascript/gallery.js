$(document).ready(function(){

	/*
	this is the object of images, image names and thumbnails
	*/
	var art = [
		{	
			index: 0,
			thumb: "", 
			images: ["Wishing\ Bed/DSC_0003.JPG", "Wishing\ Bed/DSC_0013.JPG", "Wishing\ Bed/Wishing\ Bed.JPG"],
			title: [],
			artType: "Wishing Bed", 
			description: "My friends and I showcased Mimosa Daydreams post graduation. This exhibition’s main purpose was to depict our experiences, departures and anxieties through our transition into adulthood.  The ‘Wishing Bed’ was an interactive piece which directed the audience to write their dreams on notecards and throw it back into the bed, as you do a coin into a well.  Unbeknownst to me, this piece served as a bittersweet microscope emphasizing how lonely we are as people and how much we need a genuine community."
		},

		{
			index: 1,
			thumb: "Abstract\ Paintings/01.jpg", 
			images: ["Abstract\ Paintings/01.jpg", "Abstract\ Paintings/20230628_014835.jpg", "Abstract\ Paintings/brainChild.jpg", "Abstract\ Paintings/DSC_0037.JPG", "Abstract\ Paintings/Abstract\ Blue.jpg"],
			title: [],
			artType: "Abstract Paintings",
			description: ""
		}, 

		{
			index: 2,
			thumb: "",
			images: ["Caravan/caravanv1.png"],
			title: [],
			artType: "Caravan",
			description: "“Caravan” exhibition centers around the idea and the process of taking adventures and/ or risks in life. This exhibition’s inspiration stems from my first road trip through Kansas and the Romantic period’s ideology surrounding Nature and the Sublime. Through a Romantic lens, I think about what motivated me to take that first road trip and what pushes me to continue to seek out more risk and adventure. Has it benefited or harmed me in the grand scheme of things?Through a romantic lens, I reflected on my road trips out west and used reference photos from them. The wide open fields and never-ending views of road and land were the epitome of the Sublime. You won’t know how far the destination is or what the journey will be like."
		},

		{
			index: 3,
			thumb: "",
			images: ["I\ Hate\ Pretty\ Things/IHPT1.JPG", "I\ Hate\ Pretty\ Things/IHPT2.JPG"],
			title: [],
			artType: "I Hate Pretty Things", 
			description: "This series is an examination of the convoluted relationship I have with my fantasies. The pretty things are the catalysts to some of my fantasies and unique to my experience. They consume my thoughts and fuel my imagination. These pretty things serve as calculated distractions. In my works, I reference people I have met and formed some level of attractive toward, a crush or a muse."
		},
	];
	// ----------------------------------------------------------------------------------------------------------------------------------
	
	
	/* */
	var iconElement = document.querySelectorAll(".iconContainer");
	var GDContainer = document.getElementById("galleryDetailContainer");
	var GIContainer = document.getElementById("galleryIconContainer");
	// ----------------------------------------------------------------------------------------------------------------------------------


	/* */
	function writeIcon(iconName){
		iconName.innerHTML = "<div class='iconTitle'>" + iconName.getAttribute("name") + "</div>"
	}

	iconElement.forEach(writeIcon);


	/* */
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
		leftControl.setAttribute("class", "left carousel-control");
		leftControl.setAttribute("href", "#carousel-example-generic");
		leftControl.setAttribute("role", "button");
		leftControl.setAttribute("data-slide", "prev");
		carousel.append(leftControl);

		var shape = document.createElement("span");
		shape.setAttribute("class", "glyphicon glyphicon-chevron-left");
		shape.setAttribute("aria-hidden", "true");
		leftControl.append(shape);

		var prev = document.createElement("span");
		prev.setAttribute("class", "sr-only");
		leftControl.append(prev);

		var rightControl = document.createElement("a");
		rightControl.setAttribute("class", "right carousel-control");
		rightControl.setAttribute("href", "#carousel-example-generic");
		rightControl.setAttribute("role", "button");
		rightControl.setAttribute("data-slide", "next");
		carousel.append(rightControl);

		var rshape = document.createElement("span");
		rshape.setAttribute("class", "glyphicon glyphicon-chevron-right");
		rshape.setAttribute("aria-hidden", "true");
		rightControl.append(rshape);

		var next = document.createElement("span");
		next.setAttribute("class", "sr-only");
		rightControl.append(next);

	};


	/* */
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
		mainCaption.setAttribute("class", "carousel-caption");
		mainCaption.innerHTML('<p class="descriptionTitle">' + art[0].artType + '</p> <p>' + art[0].description + '</p> <div class="seeGallery" onclick="">See ' + art[0].artType + ' Gallery</div>');
		mainItem.append(mainCaption);

		for (var i = 1; i < art.length; i++){	
			var item = document.createElement("div");
			item.setAttribute("class", "descriptionItems item " + i);
			carouselInner.append(item);

			var caption = document.createElement("div");
			caption.setAttribute("class", "carousel-caption " + i);
			caption.innerHTML('<p class="descriptionTitle">' + art[i].artType + '</p> <p>' + art[i].description + '</p> <div class="seeGallery" onclick="">See ' + art[i].artType + ' Gallery</div>');
			item.append(caption);
		}
	};


	/*
	this section is for the start of the page. The project descriptions carousel will be open.
	*/
	buildCarousel();
	projectDescriptionCarousel();
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


	/* */
	$("#closeImageCarousel").click(function(){
		$('.carousel-inner').empty();
		$(".carousel-indicators").remove();
		projectDescriptionCarousel();
	});
	

	/* */
	function addImgToCarousel(selectedArt){
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

});
