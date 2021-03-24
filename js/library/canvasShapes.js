function makeWheel(o){
	/* ----------- Vars ----------- */
	o.wheelColor = "#5f3e28";
	o.circlesColor = "#402912";

	var nm = document.getElementById(o.id),
		w = nm.width, /* canvas weight */
		h = nm.height, /* canvas height */
		mx = (h < w) ? h : w, /* valor maximo a considerar */
		per = (mx / 100), /* percent */
		p = nm.getContext('2d'),
		ang = Math.PI / 180,
		sd = o.p1Sides, /* poligon sides */
		x = nm.width / 2,
		y = nm.height / 2,
		/* ----------- Poligon 1 ----------- */
		r = o.p1Radius * per,
		px = new Array(),
		py = new Array(),
		/* ----------- Poligon 2 ----------- */
		r2 = o.p2Radius * per,
		px2 = new Array(),
		py2 = new Array(),
		/* ----------- Inner Circle ----------- */
		r3 = o.circDistances * per, /* distance of circles */
		r4 = o.circRadius * per, /* radius of circle */
		sd2 = o.nCirc, /* number of circles */
		px3 = new Array(),
		py3 = new Array(),
		/* ----------- Inner Circle ----------- */
		r5 = o.innerCircDiam;
		

	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px[ kk ] = Math.cos( ( ( 360 / sd ) * kk ) * ang ) * r;
		py[ kk ] = Math.sin( ( ( 360 / sd ) * kk ) * -ang ) * r;
	}

	/* --------------------- Second Shape --------------------- */

	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px2[ kk ] = Math.cos( ( ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * ang ) * r2;
		py2[ kk ] = Math.sin( ( ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * -ang ) * r2;
	}

	/* --------------------- Circles --------------------- */
	for( kk = 0; kk <= ( sd2 - 1 ); kk++ )
	{
		px3[ kk ] = Math.cos( ( ( 360 / sd2 ) * kk ) * ang ) * r3;
		py3[ kk ] = Math.sin( ( ( 360 / sd2 ) * kk ) * -ang ) * r3;
	}

	p.beginPath();
	p.moveTo( x + px[ 0 ] , y + py[ 0 ] );
	p.lineTo( x + px2[ 0 ] , y + py2[ 0 ] );

	for( kk = 1; kk <= ( sd - 1 ); kk++ )
	{
		p.lineTo( x + px[ kk ] , y + py[ kk ] );
		p.lineTo( x + px2[ kk ] , y + py2[ kk ] );
	}

	p.fillStyle = o.wheelColor;
	p.fill();
	p.closePath();

	p.beginPath();
	p.arc(x, y, r5, 0, Math.PI * 2, true);
	p.fillStyle = o.circlesColor;
	p.fill();
	p.closePath();

	for( kk = 0; kk <= ( sd2 - 1 ); kk++ )
	{
		p.beginPath();
		p.arc(x + px3[ kk ] , y + py3[ kk ] , r4, 0, Math.PI * 2, true);
		p.fillStyle = o.circlesColor;
		p.fill();
		p.closePath();
	}
}


function makeStar(ide, o)
{
	var nm = document.getElementById(ide),
		w = nm.width, /* canvas weight */
		h = nm.height, /* canvas height */
		mx = (h < w) ? h : w, /* valor maximo a considerar */
		p = nm.getContext('2d'),
		ang = Math.PI / 180,
		sd = o.p1Sides, /* poligon sides */
		x = w - o.p1Radius - o.xx,
		y = h - o.p1Radius - o.yy,
		/* ----------- Poligon 1 ----------- */
		r = o.p1Radius,
		px = [],
		py = [],
		/* ----------- Poligon 2 ----------- */
		r2 = o.p2Radius;
		px2 = [],
		py2 = [],
		/* ----------- Inner Circle ----------- */
		r3 = o.circDistances, /* distance of circles */
		r4 = o.circRadius, /* radius of circle */
		sd2 = o.nCirc, /* number of circles */
		px3 = [],
		py3 = [],
		/* ----------- Inner Circle ----------- */
		r5 = o.innerCircDiam,
		k = o.rotate;

	/* --------------------- defining points --------------------- */
	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px[ kk ] = Math.cos( ( k + ( 360 / sd ) * kk ) * ang ) * r;
		py[ kk ] = Math.sin( ( k + ( 360 / sd ) * kk ) * -ang ) * r;
	/* --------------------- Second Shape --------------------- */
		px2[ kk ] = Math.cos( ( k + ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * ang ) * r2;
		py2[ kk ] = Math.sin( ( k + ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * -ang ) * r2;
	}

	/* --------------------- making the tail --------------------- */
	p.beginPath();
	p.moveTo( x + px[ 1 ] , y + py[ 1 ] );
	p.lineTo( x + px2[ 3 ] , y + py2[ 3 ] );
	p.lineTo( w , h );
	p.fillStyle = "#d19c4b";
	p.fill();
	p.closePath();

	p.beginPath();
	p.moveTo( x + px[ 3 ] , y + py[ 3 ] );
	p.lineTo( x + px2[ 3 ] , y + py2[ 3 ] );
	p.lineTo( w , h );
	p.fillStyle = "#453415";
	p.fill();
	p.closePath();

	p.beginPath();
	p.moveTo( x + px[ 1 ] , y + py[ 1 ] );
	p.lineTo( x + px2[ 4 ] , y + py2[ 4 ] );
	p.lineTo( w , h );
	p.fillStyle = "#63471b";
	p.fill();
	p.closePath();

	p.beginPath();
	p.moveTo( x + px[ 4 ] , y + py[ 4 ] );
	p.lineTo( x + px2[ 4 ] , y + py2[ 4 ] );
	p.lineTo( w , h );
	p.fillStyle = "#7a5321";
	p.fill();
	p.closePath();

	p.beginPath();
	p.moveTo( x + px[ 0 ] , y + py[ 0 ] );
	p.lineTo( x + px2[ 4 ] , y + py2[ 4 ] );
	p.lineTo( w , h );
	p.fillStyle = "#a5742a";
	p.fill();
	p.closePath();

	/* --------------------- making the star --------------------- */
	p.beginPath();
	p.moveTo( x + px[ 0 ] , y + py[ 0 ] );
	p.lineTo( x + px2[ 0 ] , y + py2[ 0 ] );

	for( kk = 1; kk <= ( sd - 1 ); kk++ ){
		p.lineTo( x + px[ kk ] , y + py[ kk ] );
		p.lineTo( x + px2[ kk ] , y + py2[ kk ] );
	}

	p.fillStyle = o.starColor;
	p.fill();
	p.closePath();

}