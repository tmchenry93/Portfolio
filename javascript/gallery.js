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

	// this function creates the thumbnails
	function createThumbnails(){

		for (var i= 0; i< art.length; i++){
			var displaySquare = $("<div>");
			displaySquare.addClass("artThumbnails thumb" + i);
			displaySquare.append("<div class='title'>" + art[i].artType + "</div>");
			displaySquare.append("<img class='img' src='" + art[i].thumb + "'/>");
			displaySquare.attr("attributeNumber", i);
			displaySquare.attr("thumbName", art[i].artType);
			document.getElementById("artThumbs").append(displaySquare);
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

});