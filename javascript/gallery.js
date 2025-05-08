$(document).ready(function(){

	// this is the object of images, image names and thumbnails
	var art = [
		{	
			index: 0,
			thumb: "", 
			images: [],
			title: [],
			artType: "Figures"
		},

		{
			index: 1,
			thumb: "Abstract\ Paintings/01.jpg", 
			images: ["Abstract\ Paintings/01.jpg", "Abstract\ Paintings/deludedStars.jpg", "Abstract\ Paintings/brainChild.jpg", "Abstract\ Paintings/DSC_0037.JPG", "Abstract\ Paintings/Abstract\ Blue.jpg"],
			title: ["Illusions at Sea", "Afternoon in the park", "I Hate Pretty Things", "Brainchild" ],
			artType: "Abstract Paintings"
		}, 

		{
			index: 2,
			thumb: "",
			images: [],
			title: [],
			artType: "Caravan"
		},

		{
			index: 3,
			thumb: "",
			images: ["I\ Hate\ Pretty\ Things/IHPT1.JPG", "I\ Hate\ Pretty\ Things/IHPT2.JPG"],
			title: [],
			artType: "I Hate Pretty Things"
		},
	];

	var iconElement = document.querySelectorAll(".iconContainer");
	var GDContainer = document.getElementById("galleryDetailContainer");
	var GIContainer = document.getElementById("galleryIconContainer");

	// ---------------------------------------------------------------------
	
	/*
	If divs with class, "iconContainer", are clicked, 
	the "galleryIconContainer" div shrinks and the "galleryDetailContainer" appears
	When the "galleryDetailContainer" appears, 
	the carousel appears and the images are
	*/

	// this function will allow the images to scroll within the mainArtDiv
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

			var selectedIcon = this.getAttribute("name");

			if (selectedIcon && selectedIcon != "undefined") {
		        addImgToCarousel(selectedIcon);
			} else {
				alert("green");
			};
			
		}
		
		/*buildCarousel();

		var selectedIcon = this.getAttribute("name");

		if (selectedIcon && selectedIcon != "undefined") {
		        addImgToCarousel(selectedIcon);
		} else {
			alert("green");
		};

		/*
		if (GDContainer.style.display = "none" && window.innerWidth <= 768) {
			buildCarousel();
			GDContainer.style.height = "70vh";
			GIContainer.style.height = "20vh"
			iconElement.forEach(function(thumb) {
				thumb.style.display = "inline-block";
			});
			var selectedIcon = this.getAttribute("name");
			if (selectedIcon && selectedIcon != "undefined") {
			        addImgToCarousel(selectedIcon);
			} else {
				alert("green");
			};
		} else if (GDContainer.style.display = "none" && window.innerWidth > 768) {
			buildCarousel();
			GDContainer.style.height = "85vh";
			GIContainer.style.height = "85vh"
			iconElement.forEach(function(thumb) {
				thumb.style.display = "block";
			});
			var selectedIcon = this.getAttribute("name");
			//$('.carousel-inner').empty();
			if (selectedIcon && selectedIcon != "undefined") {
			        addImgToCarousel(selectedIcon);
			} else {
				alert("green");
			};
		} else {
			alert("blue");
			
		};
		*/
	});

	/*function iconHover(){

		$this = $(this);
		var icons = document.getElementsByClassName("iconContainer");
		var iconsHoverName = $(this).getAttribute("name");

		icons.addEventListener("mouseover", function(){
			$this = $(this);
			var iconsHoverName = $(this).getAttribute("name");

		});

		if () {

		}
	}; */
	
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
	} 

	function buildCarousel() {

		var carousel = document.createElement("div");
		carousel.setAttribute("class", "carousel slide"); 
		carousel.setAttribute("id", "carousel-example-generic");
		carousel.setAttribute("data-ride", "carousel");
		var cc = document.getElementById("carouselContainer");
		cc.append(carousel);

		//var carouselContainerDiv = document.createElement("div");
		//carouselContainerDiv.setAttribute("class", "container");
		//carousel.append(carouselContainerDiv);

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

	/*	document.getElementById("x").style.color = "white";
		document.getElementById("artLink").style.color = "black";

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
	*/

});
