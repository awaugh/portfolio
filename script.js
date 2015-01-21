$(document).ready(function()
{

	//creating variable clicked that will return booleon value based on state of function 
	// (i.e; if .cardSummary is faded in our outerHeight
	// using this to change 
	var $clicked = false;

	$(".cardButton").click(function()
	{

		if($clicked == false)
		{
			$clicked = true;
		$(".topCard").slideUp("slow");
		$(this).toggleClass("cardButtonHovered");
		$(".card").animate({
				height:"400px"
			},500, function(){});
		$(".cardSummary").delay(600).fadeIn(200);
			
		}
		else 
		{
			$clicked = false;
			$(".cardSummary").fadeOut(200);
				$(".card").animate({
				height:"250px"
			},550, function(){});
			$(".topCard").slideDown(590);
			$(this).toggleClass("cardButtonHovered");
			
		
			
		}
			
		
		

		
			
	});
});