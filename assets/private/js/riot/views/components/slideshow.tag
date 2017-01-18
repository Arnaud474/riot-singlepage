slideshow
	#container.normal
		img.slide(src="public/images/slideshow/slide1.jpg")
		img.slide(src="public/images/slideshow/slide2.jpg")
		img.slide(src="public/images/slideshow/slide1.jpg")
		img.slide(src="public/images/slideshow/slide2.jpg")

		i.button.left(class="fa fa-chevron-left", aria-hidden="true")
		i.button.right(class="fa fa-chevron-right", aria-hidden="true")

		#dots
			

	script.

		/*Index to know the current image*/
		
		var slideIndex = 0;

		var SLIDE_COUNT;

		this.on("mount", function(){

			SLIDE_COUNT = $("#container img.slide").length;

			for(var i = 0; i < SLIDE_COUNT; i++)
			{
				var dot = $("#dots").append("<i class='fa fa-circle' data-index='"+ i +"'/>")

				dot.find("i").last().on("click", function(){
					$("#container img.slide").eq(slideIndex).removeClass("visible");
					
					slideIndex = $(this).data("index");

					$("#container #dots").find(".current").removeClass("current");

					$(this).addClass("current")

					$("#container img.slide").eq($(this).data("index")).addClass("visible");

				});
			}

			//Init for first position in slider
			$("#container img.slide").eq(slideIndex).addClass("visible");
			$("#container #dots i").eq(slideIndex).addClass("current");

			$(".button.left").on("click", function(){
				
				$("#container img.slide").eq(slideIndex).removeClass("visible");

				if(slideIndex - 1 < 0)
					slideIndex = SLIDE_COUNT-1;
				else
					slideIndex--;

				$("#container img.slide").eq(slideIndex).addClass("visible");

				$("#container #dots").find(".current").removeClass("current");

				$("#container #dots i").eq(slideIndex).addClass("current");
			});

			$(".button.right").on("click", function(){
				
				$("#container img.slide").eq(slideIndex).removeClass("visible");

				if(slideIndex + 1 > SLIDE_COUNT-1)
					slideIndex = 0;
				else
					slideIndex++;

				$("#container img.slide").eq(slideIndex).addClass("visible");

				$("#container #dots").find(".current").removeClass("current");

				$("#container #dots i").eq(slideIndex).addClass("current");

			});
		});
		