menubar

	.menu.blue

		.collapse-toggle(onclick="{openMenu}")
			i.fa.fa-align-justify(aria-hidden="true")

		ul
			li 
				a(data-view="home") Home
			li 
				a(data-view="page1") Page 1
			li
				a(data-view="page2") Page 2

			li.dropdown 
				p Dropdown
				ul.dd-content
					li 
						a() Super Mega Long Texte
					li
						a() Second

		//- Menu on the right side of the bar
		ul.pull-right
			li 
				a() Right
		div.clear



	script.

		this.on("mount", function(){

			console.log("Menu Mounted");

			var items = $(".menu ul li:not(.dropdown) a");

			for(var i = 0; i < items.length; i++)
			{
				$(items[i]).on("click", function(){

					router.goTo($(this).data("view"));

				});
			}

		})

		openMenu(e){

			var menu = $(".menu>ul");

			if(menu.is(":visible"))
			{
				menu.css("display","none")
				$(".collapse-toggle").css("color", "white")
			}
			else
			{
				menu.css("display","block")
				$(".collapse-toggle").css("color", "#0844CF")
			}
		}




