$(document).ready(function(){

	// this is the object of images, image names and thumbnails
	var art = [
		{	
			index: 0,
			thumb: "./artThumbnails/figureThumbnail", 
			images: ["./figures/sketch.jpg"],
			title: ["30-min Study"],
			artType: "Figures"
		},

		{
			index: 1,
			thumb: "./abstract/iHatePrettyThings", 
			images: ["./abstract/01.jpg", "./abstract/03.jpg", "./abstract/iHatePrettyThings", "./abstract/brainChild.jpg"],
			title: ["Illusions at Sea", "Afternoon in the park", "I Hate Pretty Things", "Brainchild" ],
			artType: "Abstract"
		}, 

		{
			index: 2,
			thumb: "",
			images: [],
			title: [],
			artType: ""
		},

		{
			index: 3,
			thumb: "",
			images: [],
			title: [],
			artType: ""
		},
	];

	var iconElement = document.querySelectorAll(".iconContainer");
	var GDContainer = document.getElementById("galleryDetailContainer");
	var GIContainer = document.getElementById("galleryIconContainer");

	// ---------------------------------------------------------------------
	// this function will allow the images to scroll within the mainArtDiv
	$(".iconContainer").click(function(){

		if (GDContainer.style.display = "none") {
			GDContainer.style.display = "inline";
			GDContainer.style.backgroundColor = "green";
			GDContainer.style.height = "90vh";
			iconElement.forEach(function(thumb) {
				thumb.style.display = "inline";
			});
			GIContainer.setAttribute("overflow", "scroll")
			GIContainer.setAttribute("class", "col-xs-12 col-sm-12 col-md-3 col-lg-3");
			GDContainer.setAttribute("class", "col-xs-12 col-sm-12 col-md-9 col-lg-9");
			alert("display block");
		} else {
			alert("GDContainer refill with new art");
		};

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

	function buildCarousel(artArr) {
		var carousel = document.createElement("div");
		carousel.setAttribute("class", "carousel slide"); 
		carousel.setAttribute("id", "carousel-example-generic");
		carousel.setAttribute("data-ride", "carousel");
		var cc = document.getElementById("carouselContainer");
		cc.appendChild(carousel);

		var orderedList = document.createElement("ol");
		orderedList.setAttribute("class", "carousel-indicators");
		carousel.appendChild(orderedList);

		var mainList = document.createElement("li");
		mainList.setAttribute("data-target", "#carousel-example-generic");
		mainList.setAttribute("data-slide-to", "0");
		mainList.setAttribute("class", "active");
		orderedList.appendChild(mainList);

		for (var i = 1; i < art[artNumber].images.length; i++){	
			var list = document.createElement("li");
			list.setAttribute("data-target", "#carousel-example-generic");
			list.setAttribute("data-slide-to", "'" + artNumber + "'");
			orderedList.appendChild(list);
		}

		var carouselContainerDiv = document.createElement("div");
		carouselContainerDiv.setAttribute("class", "container");
		carousel.appendChild(carouselContainerDiv);

		var carouselInner = document.createElement("div");
		carouselInner.setAttribute("class", "carousel-inner");
		carouselInner.setAttribute("role", "listbox");
		carouselContainerDiv.appendChild(carouselInner);

		var mainItem = document.createElement("div");
		mainItem.setAttribute("class", "item active");
		carouselInner.appendChild(mainItem);

		var mainImage = document.createElement("img");
		mainImage.setAttribute("src", art[artNumber].images[0]);
		mainImage.setAttribute("class", "img-fluid");
		(mainItem).appendChild(mainImage);

		var mainCaption = document.createElement("div");
		mainCaption.setAttribute("class", "carousel-caption");
		mainCaption.appendChild(art[artNumber].title[0]);
		mainItem.appendChild(mainCaption);








		var leftControl = document.createElement("a");
		leftControl.setAttribute("class", "left carousel-control");
		leftControl.setAttribute("href", "#carousel-example-generic");
		leftControl.setAttribute("role", "button");
		leftControl.setAttribute("data-slide", "prev");
		carousel.appendChild(leftControl);

		var shape = document.createElement("span");
		shape.setAttribute("class", "glyphicon glyphicon-chevron-left");
		shape.setAttribute("aria-hidden", "true");
		leftControl.appendChild(shape);

		var prev = document.createElement("span");
		prev.setAttribute("class", "sr-only");
		leftControl.appendChild(prev);

		var rightControl = document.createElement("a");
		rightControl.setAttribute("class", "right carousel-control");
		rightControl.setAttribute("href", "#carousel-example-generic");
		rightControl.setAttribute("role", "button");
		rightControl.setAttribute("data-slide", "next");
		carousel.appendChild(rightControl);

		var rshape = document.createElement("span");
		rshape.setAttribute("class", "glyphicon glyphicon-chevron-right");
		rshape.setAttribute("aria-hidden", "true");
		rightControl.appendChild(rshape);

		var next = document.createElement("span");
		next.setAttribute("class", "sr-only");
		rightControl.appendChild(next);

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