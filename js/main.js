var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
		center:[55.813527,37.580976], //msk
	    zoom:16
	});
	mskBalloon = new ymaps.Placemark([55.813527,37.584976], {
	    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
	    balloonContentHeader: "Представительство",
	    balloonContentBody: "Ул. Руставели, д. 3, корп. 7, под. 1,<br>127254, Москва, Россия",
	    balloonContentFooter: "Часы работы: 10:00 - 18:00",
	    hintContent: "Ул. Руставели, д. 3, корп. 7"
	},{
		preset: 'twirl#photographerIcon'
	});
    spbBalloon = new ymaps.Placemark([59.957569,30.331288], {
	    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
	    balloonContentHeader: "Центральный офис",
	    balloonContentBody: "Ул. Куйбышева д.32-У,<br>197046,Cанкт-Петербург, Россия",
	    balloonContentFooter: "Часы работы: 10:00 - 18:00",
	    hintContent: "Ул. Куйбышева д.32-У"
    },{
    	preset: 'twirl#photographerIcon'
    });
    myMap.geoObjects.add(mskBalloon);
    myMap.geoObjects.add(spbBalloon);
}
function setMapMsk () {
	myMap.panTo([55.813527,37.580976],{delay:0});
}
function setMapSpb () {
	myMap.panTo([59.957569,30.327288],{delay:0});
}

function setMsk(){
	$('.circle').animate({left:'-1px'},100);
	setMapMsk();
}
function setSpb(){
	$('.circle').animate({left:'16px'},100);
	setMapSpb();
}
function changeCity(){
	if ($('.circle').css('left')=='-1px') {
		setSpb();
	} else if ($('.circle').css('left')=='16px') {
		setMsk();
	};
};

$(document).ready(function(){
	$(".checkie").mousedown(
		function() {
			changeCheck($(this));
	});
	$(".checkie").each(
		function() {
		changeCheckStart($(this));
	});
	$('.selector').click(function(){
		$('.dropdown').toggle();
	});
});

function changeCheck(el) {
    var el = el,
        input = el.find("input").eq(0);
   	if(!input.attr("checked")) {
		el.css("background-position","0 -70px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
    return true;
}

function changeCheckStart(el){
	var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -70px");	
		}
     return true;
}

