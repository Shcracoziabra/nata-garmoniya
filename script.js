$(document).ready(function(){
	window.onload = CurrentWidth;
	function CurrentWidth(){
		var myToggle = document.getElementById("myLinks");

		var width = window.innerWidth;
		if ( width < 900) {

			window.onresize = CurrentWidth;

			myToggle.style.display = "none";

			$(".menu-toggle").on('click', function(){
				

				if ( myToggle.style.display == "block") {
					myToggle.style.display = "none";
					
					
				} else {
					myToggle.style.display = "block";
				};


				$("#myLinks").click(function(){
					myToggle.style.display = "none";
				});

				$("main").click(function(){
					myToggle.style.display = "none";
				});
				
			});

		} else {
			window.onresize = CurrentWidth;
			myToggle.style.display = "flex";
			$("#myLinks").click(function(){
					myToggle.style.display = "flex";
				});		
		}
	};

});