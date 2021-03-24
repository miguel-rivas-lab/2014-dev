function cursorXY(w)
{
	var fobj = [
		"#st01",
		"#st01_2",
		"#st02",
		"#st02_2",
		"#st03",
		"#st03_2",
		"#st04",
		"#st04_2",
		"#st05",
		"#st05_2",
		"#bird_01",
		"#bird_02",
		"#bird_03"
	];
	var k = 30, h = dw/2;

	if( block == 0 )
	{
		if (!w) var w = window.event;
		if (w.pageX || w.pageY || w.clientX || w.clientY || w.pageXOffset || w.pageYOffset){
			var cx = w.pageX || w.clientX || w.pageXOffset;
			var cy = w.pageY || w.clientY || w.pageYOffset;
		}

		$(fobj[0]).css("left", (h + (cx*0.06)));
		$(fobj[1]).css("right", (h + (cx*0.06)));
		$(fobj[0]+","+fobj[1]).css("top", (k + (cy*-0.04)));

		$(fobj[2]).css("left", (h + (cx*0.02)));
		$(fobj[3]).css("right", (h + (cx*0.02)));
		$(fobj[2]+","+fobj[3]).css("top", (k + (cy*0.005)));

		$(fobj[4]).css("left", (h + (cx*-0.01)));
		$(fobj[5]).css("right", (h + (cx*-0.01)));
		$(fobj[4]+","+fobj[5]).css("top", (k + (cy*0.01)));

		$(fobj[6]).css("left", (h + (cx*0.04)));
		$(fobj[7]).css("right", (h + (cx*0.04)));
		$(fobj[6]+","+fobj[7]).css("top", (k + (cy*-0.02)));

		$(fobj[8]).css("left", (h + (cx*-0.05)));
		$(fobj[9]).css("right", (h + (cx*-0.05)));
		$(fobj[8]+","+fobj[9]).css("top", (k + (cy*0.01)));

		$(fobj[10]).css({"left" : ((dw/10) - (cx*0.04)), "top" : (150 + (cy*-0.05))});
		$(fobj[11]).css({"right" : ((dw/10) - (cx*0.02)), "top" : (500 + (cy*0.03))});
		$(fobj[12]).css({"right" : ((dw/8) - (cx*0.02)), "top" : (150 - (cy*0.03))});
	}
}