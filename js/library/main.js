/* ------------------------ Global Vars ------------------------ */

var lang = "eng", /* default language */
	pth = window.location.search.substring(1),
	navi = pth[4] || 0,
	ct = 0,
	max = $(".txt").length,
	min = 1,
	cz = min,
	block = 1;

var toggleLang =
{
	"spa" : "eng",
	"eng" : "spa"
};

var sections = [
	"home",
	"portfolio",
	"prototypes",
	"experiments",
	"contacts"
];


/* ------------------------ Functions ------------------------ */

function setBoard(){
	$('.txt, section').not('#info_01').hide();
	sectionNavigation(navi);
	$('#main_wheel').fadeOut(500);
	$('#box_cover_01').animate({left: '-50%'}, 'slow').hide(0);
	$('#box_cover_02').animate({right: '-50%'}, 'slow').hide(0);
	$("span:lang(" + toggleLang[lang] + ")").hide(0);
	return 0;
}

function sectionNavigation(a){
a = parseInt(a) || 1;
	/* Inicio */
	if(a <= 1){
		$('#home').stop().show().animate({top: 0}, 1000);
		$('#box_city').stop().animate({
			backgroundPositionX: '0'
		},1000);
	} else {
		$('#home').stop().animate({top: '-500'}).hide(0);
	}

	/* Portafolio */
	if(a == 2){
		$('#portfolio').stop().fadeIn('slow');
		$('#box_city').stop().animate({
			backgroundPositionX: '1500'
		},0);
	} else {
		$('#portfolio').stop().fadeOut('slow');
	}

	/* Prototipos */
	if(a == 3){
		$('#prototypes').stop().fadeIn('slow');
		$('#box_city').stop().animate({
			backgroundPositionX: '500'
		},0);
	} else {
		$('#prototypes').stop().fadeOut('slow');
	}

	/* Experimentos */
	if(a == 4){
		$('#experiments').stop().fadeIn('slow');
		$('#box_city').stop().animate({
			backgroundPositionX: '2000'
		},0);
	} else {
		$('#experiments').stop().fadeOut('slow');
	}

	/* Contactar */
	if(a >= 5){
		$('#contacts').stop().fadeIn('slow');
		$('#box_city').stop().animate({
			backgroundPositionX: '800'
		},0);
		block = 0;
	} else {
		$('#contacts').stop().fadeOut('slow');
		block = 1;
	}

	history.pushState( null, "AguacateKun", '?nvg=' + a );
	return 0;
}

function carrouselNavigation(z01)
{
	$('.txt').stop().hide();
	cz = cz + z01;
	if(cz > max){cz = max;}
	if(cz < min){cz = min;}
	c2 = cz.toString();
	$('#info_0' + c2)
		.not("span:lang(" + toggleLang[lang] + ")")
		.stop()
		.fadeIn('slow');
}

function makeCanvas()
{
	var tmpObj;

	makeWheel({
		id: "w_01",						/* object name */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 40, 					/* poligon 1 sides */
		p2Radius: 45,					/* poligon 2 radius */
		circDistances: 25,			/* circles distances from origin */
		circRadius: 10,				/* circles radius */
		nCirc: 5,						/* number of circles */
		innerCircDiam: 15				/* inner circle diameter */
	});

	makeWheel({
		id: "w_02",						/* object name */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 40, 					/* poligon 1 sides */
		p2Radius: 45,					/* poligon 2 radius */
		circDistances: 25,			/* circles distances from origin */
		circRadius: 8,					/* circles radius */
		nCirc: 7,						/* number of circles */
		innerCircDiam: 15				/* inner circle diameter */
	});

	makeWheel({
		id: "w_03",						/* object name */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 20, 					/* poligon 1 sides */
		p2Radius: 38,					/* poligon 2 radius */
		circDistances: 0,				/* circles distances from origin */
		circRadius: 0,					/* circles radius */
		nCirc: 0,						/* number of circles */
		innerCircDiam: 0				/* inner circle diameter */
	});

	makeWheel({
		id: "w_04",						/* object name */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 30, 					/* poligon 1 sides */
		p2Radius: 40,					/* poligon 2 radius */
		circDistances: 25,			/* circles distances from origin */
		circRadius: 10,				/* circles radius */
		nCirc: 2,						/* number of circles */
		innerCircDiam: 10				/* inner circle diameter */
	});

	makeWheel({
		id: "w_05",						/* object name */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 40, 					/* poligon 1 sides */
		p2Radius: 45,					/* poligon 2 radius */
		circDistances: 25,			/* circles distances from origin */
		circRadius: 12,				/* circles radius */
		nCirc: 3,						/* number of circles */
		innerCircDiam: 15				/* inner circle diameter */
	});

	makeWheel({
		id: "w_06",						/* object name */
		wheelColor: "#5f3e28", 		/* wheel color */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 30, 					/* poligon 1 sides */
		p2Radius: 40,					/* poligon 2 radius */
		circDistances: 25,			/* circles distances from origin */
		circRadius: 5,					/* circles radius */
		nCirc: 8,						/* number of circles */
		circlesColor: "#402912", 	/* circles color */
		innerCircDiam: 10				/* inner circle diameter */
	});

	tmpObj = {
		xx: 200,							/* position x */
		yy: 200,							/* position y */
		rotate: 0,						/* object rotation */
		starColor: "#f5e65d", 		/* star color */
		p1Radius: 40, 					/* poligon 1 radius */
		p1Sides: 5, 					/* poligon 1 sides */
		p2Radius: 20					/* poligon 2 radius */
	};

	makeStar("st01", tmpObj);
	makeStar("st01_2", tmpObj);

	tmpObj = {
		xx: 320,							/* position x */
		yy: 200,							/* position y */
		rotate: 0,						/* object rotation */
		starColor: "#f5e65d", 		/* star color */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 5, 					/* poligon 1 sides */
		p2Radius: 25					/* poligon 2 radius */
	};

	makeStar("st02", tmpObj);
	makeStar("st02_2", tmpObj);

	tmpObj = {
		xx: 250,							/* position x */
		yy: 280,							/* position y */
		rotate: 35,						/* object rotation */
		starColor: "#f5e65d", 		/* star color */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 5, 					/* poligon 1 sides */
		p2Radius: 25					/* poligon 2 radius */
	};

	makeStar("st03", tmpObj);
	makeStar("st03_2", tmpObj);

	tmpObj = {
		xx: 320,							/* position x */
		yy: 10,							/* position y */
		rotate: 35,						/* object rotation */
		starColor: "#f5e65d", 		/* star color */
		p1Radius: 50, 					/* poligon 1 radius */
		p1Sides: 5,					/* poligon 1 sides */
		p2Radius: 25					/* poligon 2 radius */
	};

	makeStar("st04", tmpObj);
	makeStar("st04_2", tmpObj);

	tmpObj = {
		xx: 400,							/* position x */
		yy: 100,							/* position y */
		rotate: 35,						/* object rotation */
		starColor: "#f5e65d", 		/* star color */
		p1Radius: 70, 					/* poligon 1 radius */
		p1Sides: 5, 					/* poligon 1 sides */
		p2Radius: 35					/* poligon 2 radius */
	};

	makeStar("st05", tmpObj);
	makeStar("st05_2", tmpObj);
};

/* ------------------------ Events ------------------------ */

$(window).mousemove(function(e) { cursorXY(e); });
$(window).resize(function(e) { cursorXY(e); });

$(window).load(function(e)
{
	makeCanvas();
	cursorXY(e);
	setBoard();
});

$(document).ready(function()
{
	for(c = 1; c <= sections.length; c++)
	{
		(function(cc)
		{
			$('#btn_' + sections[cc - 1]).click(function(e)
			{
				e.preventDefault();
				sectionNavigation(cc);
			});
		})(c);
	}

	$('#arrow_l').click(function(){ carrouselNavigation(-1); });
	$('#arrow_r').click(function(){ carrouselNavigation(1); });

	$('#btn_lang').click(function()
	{
		lang = toggleLang[lang];
		$("span:lang(" + toggleLang[lang] + ")").hide(0);
		$("span:lang(" + lang + ")").show(0);
	});

});