function setMsk(){
	$('.circle').animate({left:'-1px'},100);
	//
}
function setSpb(){
	$('.circle').animate({left:'16px'},100);
	//
}
function changeCity(){
	if ($('.circle').css('left')=='-1px') {
		setSpb();
	} else if ($('.circle').css('left')=='16px') {
		setMsk();
	};
};