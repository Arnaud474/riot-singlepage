menubar

	.menu.blue

		.collapse-toggle(onclick="{openMenu}")
			i.fa.fa-align-justify(aria-hidden="true")

		ul
			li 
				a(data-view="home", data-lzr-id="menu.home")
			li 
				a(data-view="page1", data-lzr-id="menu.products") 
			li
				a(data-view="page2")

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
				a.locale(onclick="{changeLocale}") {locale}
		div.clear



	script.

		var self = this;

		this.on("mount", function(){

			var items = $(".menu ul li:not(.dropdown) a");

			for(var i = 0; i < items.length; i++)
			{
				$(items[i]).on("click", function(){

					router.goTo($(this).data("view"));

				});
			}

			self.locale = localizer.currentLocale().toUpperCase();
			self.update();

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

		changeLocale(e){
			localizer.setLocale();
			localizer.getTranslation(null, function(){

				self.locale = localizer.currentLocale().toUpperCase();
				self.update();
				localizer.localizeView("body");

			});
			
		}




