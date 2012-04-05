(function($) {
	$.fn.fullDivGal = function(){
		// RECOGE DATOS Y CREA LAS CAPAS NECESARIAS
		var divGal = $(this);
		var imgs = divGal.find('img');  // recoge las imagenes
		var nimgs = imgs.length;  //numero de imagenes
		var posicion = 0;
		var slides = $('<ul id="fdgSlides"></ul>');
		var fdgThumbs = $('<ul id="fdgThumbs"></ul>');
		var divThumbs = $('<div id="divThumbs"></div>');
		var fdgNav = $('<div id="fdgNav"></div>');
		var fdgPrev = $('<span id="fdgPrev">Prev</span>');
		var fdgNext = $('<span id="fdgNext">Next</span>');
		
		// CREA ELEMENTOS SLIDE Y THUMBS
		function creaLista(valor){
			var lSlide = $('<li id="fdgimg'+ valor +'"><img src="'+ imgs.eq(valor).attr('src')+'" /></li>');
			slides.append(lSlide);
			var lThumb = $('<li id="fdgt'+ valor +'"></li>');
			lThumb.click(function(){
				posicion = valor;
				coloca();
			});
			lThumb.append(imgs.eq(valor));
			fdgThumbs.append(lThumb);
		};
		for ( i=0; i < nimgs; i++){
			creaLista(i);
		};
		// PRECARGA Y CARGA DE IMAGENES
		for ( i = 0 ; i < nimgs ; i++ ){
			imgs.eq(i).load(function(){
				escala($(this));
			});
		};
		
		// ASIGNA FUNCIONES
		fdgPrev.click(function(){
			if (posicion != 0){
				posicion--;
				coloca();
			};
		});
		fdgNext.click(function(){
			if (posicion < (nimgs - 1) ){
				posicion++;
				coloca();
			};
		});
		
		// SLIDE - Coloca el ul#slide horizontalmente
		function coloca(){
			slides.stop();
			slides.animate({ left : '-'+divGal.width() * posicion }, 500);
			( posicion == 0 ) ? fdgPrev.addClass('hide') : fdgPrev.removeClass('hide');
			( posicion == ( nimgs - 1) ) ? fdgNext.addClass('hide') : fdgNext.removeClass('hide');
		};
		
		// CENTRA LAS CAPAS
		function fdgCenter(){
			var slidesLi = slides.find('li');
			var imgSlide = slidesLi.find('img');
			var ratGal =  divGal.width() / divGal.height();
			// fix width ul#slide
			slides.width( divGal.width() * nimgs );
			slides.height( divGal.height());
			// fix width ul#slide li
			slidesLi.width( divGal.width());
			slides.css( 'left', '-' + divGal.width() * posicion +'px' );
		};
		$(window).resize(function(){
			fdgCenter();
			escala();
		});
	
		 // ESCALA IMAGENES
		function escala(e){
			var adios =  slides.find('li');
			var imagenes = adios.find('img');
			var ratGal =  divGal.width() / divGal.height();
			var cual;
			function escalada(x){
				var ratCual = x.width() / x.height();
				if ( ratCual > ratGal){
					x.width('100%');
					x.height('auto');
				} else{
					x.width('auto');
					x.height('100%');
				};
				x.css('margin-top', '-' + ( cual.height() / 2 ) + 'px');
			};
			if (e){
				cual = imagenes.eq(e);
				escalada(cual);
			}else{
				for (i= 0; i < nimgs ; i++){
					cual = imagenes.eq(i);
					escalada(cual);
				};
			};
		};
		
		// SUBE Y BAJA LOS THUMBS
		divThumbs.mouseenter(function(){
			$(this).stop();
			$(this).animate({
				marginTop: '-75px'
			}, 500);
		});
		divThumbs.mouseleave(function(e){
			$(this).stop();
			$(this).animate({
				marginTop: 0
			}, 1000 );
		});
		divThumbs.mouseleave();
		
		// AGREGA LOS ELEMENTOS CREADOS Y CENTRA Y ESCALA LAS CAPAS
		fdgNav.append(fdgPrev);
		fdgNav.append(fdgNext);
		divGal.append(slides);
		divGal.append(fdgNav);
		divThumbs.append(fdgThumbs);
		divThumbs.append($('<span id="up">&uarr;</span>'));
		divGal.append(divThumbs);
		fdgCenter();
		coloca();
		escala();
	};
})(jQuery)