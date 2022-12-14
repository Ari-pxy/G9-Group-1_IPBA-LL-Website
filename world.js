function resizePanel() {

	//get the browser width and height
	width = $(window).width();
	height = $(window).height();

	//get the mask height: height * total of items
	mask_height = height * $('.item').length;
		
	//set the dimension		
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: width, height: mask_height});

	//if the item is displayed incorrectly, set it to the corrent pos
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
		
}
