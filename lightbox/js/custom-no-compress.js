/* JS DOCUMENTATION:

* FOLIO Ner2 *

*/

/*********************************************
* ON READY
*********************************************/

var donde = null;

$(document).ready(function(){
	
/****************************
 MULTIDISPLAY SMART COLLUMS 
******************************************/

function smartColumns() { //Create a function that calculates the smart columns
    //Reset column size to a 100% once view port has been adjusted
	$("ul#thumbs").css({ 'width' : "100%"});
	var colWrap = $("ul#thumbs").width(); //Get the width of row
	var colNum = Math.floor(colWrap / 200); //Find how many columns of 200px can fit per row / then round it down to a whole number
	var colFixed = Math.floor(colWrap / colNum); //Get the width of the row and divide it by the number of columns it can fit / then round it down to a whole number. This value will be the exact width of the re-adjusted column
	$("ul#thumbs").css({ 'width' : colWrap}); //Set exact width of row in pixels instead of using % - Prevents cross-browser bugs that appear in certain view port resolutions.
	$("ul#thumbs li").css({ 'width' : colFixed}); //Set exact width of the re-adjusted column
}
smartColumns();//Run the function when page loads


/***************************
// SLIDE NAV
*********************************/
function checkTopNav() {
//First we need to detect if top navigation mode is active. If it is, remove lateral navigation behaviors for hover states
if ($("#top-nav").length > 0){
  $("#tab-nav").remove();
}
else {

barra = $('nav'); // nav
trabajos = $('#wrapper'); // contents
loquedura = {queue:true, duration:1250, easing: 'easeInOutExpo'}; // .animate() style
// slideNav animations
function para(){ barra.stop(); trabajos.stop(); };
// return pixels number to move
function mide(){ 	return ($('nav').width()-10)+'px'; };

function slideNav(e){ 
	para();
	// moves nav
	barra.animate({  left: (e) ? '-'+mide() : 0	}, loquedura);
	// moves contents
	trabajos.animate({ left: (e) ? 0 : mide() }, loquedura);
};
barra.mouseenter(function(){ slideNav();});
barra.mouseleave(function(){ slideNav(1); });
$("#tap-close").click(function(){ slideNav(1); });
var initBar = setTimeout('barra.mouseleave()',1000); // 

}
}

/******************************************
// TOP NAVIGATION IN IPAD
*************************************************/

//detects if device is iOS based. If it is run the functions
if (navigator.userAgent.match(/like Mac OS X/i)) {
				//launch top navigation mode
				$("body").attr("id","top-nav");
				checkTopNav();				
}
checkTopNav();


/****************************************
// HASH FUNCTIONS
*******************************************/

var controlHash = "";
$(function() {
    var newHash      = "",
        $mainContent = $("#work-detail-wrapper"),
        $pageWrap    = $("#thumb-wrapper"),
        $el;
	
		
	$(".work-launcher").delegate("a:not(#filters-launcher)", "click", function() {
		prevHash = window.location.hash.substring(1);
        window.location.hash = $(this).attr("href");
        donde = 1;
		
		tempHash = window.location.hash.substring(1);
			if (prevHash == tempHash || prevHash == "") {
					$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top},'slow');
				}
				
        if ( $.browser.msie ) {
			if(parseInt($.browser.version, 10) <=7){
				window.location.reload();
			} ;
		}   
        return false;
    });
	
    $("li.thumb").delegate("a", "click", function() {
    	if ($(this).attr("href") != controlHash ){
    		createLoader($(this));
	        window.location.hash = $(this).attr("href");
	        donde = 1;
    	}else{
    		if (controlHash != ""){
    			$mainContent.slideDown(500, function() {
					var viewportHeight = $(window).height();
					$mainContent.height(viewportHeight);
					$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top}, "slow");
	            });
    		}
    	}
    });
	 
	 $("#sections").delegate("a:not(#filters-launcher)", "click", function() {
		prevHash = window.location.hash.substring(1);
        window.location.hash = $(this).attr("href");
        donde = 1;
		
		tempHash = window.location.hash.substring(1);
			if (prevHash == tempHash || prevHash == "") {
					$mainContent.slideDown(500, function() {
						var viewportHeight = $(window).height();
						$mainContent.height(viewportHeight);
						$('html,body, #wrapper').animate({scrollTop: $("#work-detail-wrapper").offset().top-39}, "slow");
				}
					
				
		)};
				
        if ( $.browser.msie ) {
			if(parseInt($.browser.version, 10) <=7){
				window.location.reload();
			} ;
		}   
        return false;
		
    }); 
	 
    $(window).bind('hashchange', function(){
        newHash = window.location.hash.substring(1);
        if (newHash && newHash != controlHash) {
        	controlHash = window.location.hash.substring(1);
        	$mainContent.load(newHash, function(response, status, xhr) {
        		if (status == "error") {
					alert("Error loading work");
					$('#imgLoad').remove();
				}
				
				
        		$('#imgLoad').remove();
        		// slides on
        		
				$('#prev').click(function(){
					activeSlides();
				});
				$('#next').click(function(){
					activeSlides(1);
				});
				
				
        		$mainContent.slideDown(300, function() {
					var viewportHeight = $(window).height();
					$mainContent.height(viewportHeight);
	            });
	            
				//detects if device is iOS based. If it is run the functions
				if (navigator.userAgent.match(/like Mac OS X/i)) {
					$('html,body').animate({scrollTop: $("#work-detail-wrapper").offset().top},'slow');								
				}
				else{
					$('html,body').animate({scrollTop: $("#work-detail-wrapper").offset().top-39},'slow');
					}
				slideWorks();
				centerWork();
				closeSlideWork();

				$('#slides img').load(function() {  
				  	var aparece = setTimeout("$('figure img').animate({opacity: 1},2000)", 200); 
				});
				$("img.img-work-back").fullBg();
				
                $(".thumbs a").removeClass("current");
                $(".thumbs a[href='"+newHash+"']").addClass("current");
                setTimeout(
				   function(){
					  mCustomScrollbars();
				   }, 1000);
			    $('#slideshow').fullDivGal();
				showThumbs();
            });
        };
    });
    $(window).trigger('hashchange');
});

$('#close-filters').click(function () {
	return false;
	});


      		

/********************************************************
 *  AJAX LOADER ANIMATION
 * ****************************************************** */
function createLoader(dondeLoad){
	var marca = document.createElement("img");
	marca.setAttribute("id", 'imgLoad');
	marca.setAttribute("src", "images/ajax-loader.gif");
	dondeLoad.append(marca);
}


/**************************************************
 SLIDE WORK WRAPPER
********************************************************/
var workWrapper = $('#work-detail-wrapper');
function viewportHeight(){
	return $(window).height();
};
function viewportWidth(){
	return $(window).width();
};
function slideWorks() { 
	workWrapper.height(viewportHeight());
	workWrapper.width(viewportWidth());
}
slideWorks();//Run the function when page loads


function closeSlideWork(){
	$('#closebt a').click(function () {
	$("#work-detail-wrapper").slideUp();
	$('html,body, #wrapper').animate({scrollTop: 0}, 500);
	donde = null;
});
};

/*************************************************
 * CENTERWORK
 ************************************************/
function centerWork() { 
    function wrapper (){
    	return $("#work-detail-wrapper"); 
    }
	var itemW = $(".item-wrapper");
	var theItem = $('.item-wrapper .item');
	theItem.css('height', itemW.height() - 222 +'px');
};
//* SHOW INFO
function infoDiv(){
	return $('div.info-work');
}
function showInfo(){
	if (infoDiv().css('display') = 'none'){
		infoDiv().fadeIn(1000);
	}else{
		infoDiv().fadeOut(1000);
	}
}

/**********************************
   ON LOAD SLIDE NAV FUNC
****************************************/
$(window).load(function(){
(function(){
		$('.thumb').fadeTo(250, 0.4);
	});
	centerWork();
});

/***************************************
 ON RESIZE ADJUST IMAGES
*********************************************/
$(window).resize(function(){
	centerTopNavControls();
	slideWorks(); //Esential for calculate sizes in iPad landscape/portrait modes.
	centerWork();
	smartColumns();
	//slideNav(1);	//Run the function when page loads 
});

/**********************************************
//NAVIGATION		
************************************************/
$('#filters-launcher').click(function(){
	$('#filters').fadeIn(500);
	$('#sections').fadeOut(500);
	function altoScroll(){
		return $('#work-detail-wrapper').height();
	};
	$('html,body,#wrapper').animate({scrollTop: (donde) ? altoScroll() : 0}, 500);

});

$('.close-sub').click(function(){
	$('#filters').fadeOut(500);
	$('#sections').fadeIn(500);
});
var cat = "none";
if(cat == "none" )
		$(".thumb").fadeTo(100, 0.4);

/*******************************************
//FILTERS
********************************************/
$("#filter-menu a").click(function() {
	cat = $(this).attr("class");
	$("#works .thumb").not("."+cat).fadeTo(100, 0.1);
	$("#works .thumb").filter("."+cat).fadeTo(100, 1);
	$("#filter-menu a").parent().removeClass("active");
	$(this).parent().addClass("active");
	function altoScroll(){
		
		if ($("#top-nav").length > 0){
			var navHeight = $("#main-nav").height();
			var altoTopNav = $('#work-detail-wrapper').height()+(navHeight-40); //-40 is the margin top for wrapper. This compensate this margin.
			return altoTopNav;
		}
		else{
			return $('#work-detail-wrapper').height();
			}
	
	};
	
	
	$('html,body,#wrapper').animate({scrollTop: (donde) ? altoScroll() : 0}, 500);
	return false;
});
$("#filter-menu a.none").click(function() {
	$("#works .thumb").animate({ opacity: 0.4 },{queue:true, duration:250, easing: 'easeInOutExpo'});
});


/*******************************************
// TOP NAVIGATION CONTROLS
********************************************/

function centerTopNavControls(){
var winWidth = $(window).width();
var sizeButton = $("#slide-controls").width()/2;
var posMiddle = winWidth/2-(sizeButton+5);
 $("#slide-controls").css("margin-left", posMiddle);
}
centerTopNavControls();


// Check if user is in top navigation mode. If he is, show the smart controls
if ($("#top-nav").length > 0){			
 	$("#slide-controls")
 			.css("display", "block")
 			.fadeOut(10)
			.delay(2000)
			.fadeIn(500);
	}
			
			
//Checkpoints to change controls when user scrolls. Smart control for top navigation mode
function getPixels(){ 
		var pos = $(window).scrollTop(); //position of the scrollbar
		var navigationHeight = $("#main-nav").height();
		var trueHeigh = navigationHeight-40;
		//$('#pixels').html(pos);
		
		if ($(".open-nav").length > 0){
			if(pos > trueHeigh){
					$(".scroll-to-menu").fadeIn(500);
				}
				else{
					$(".scroll-to-menu").fadeOut(500)
					}
		}
			else{
				return false;
				}
};

$(window).bind('scroll', function(){ //when the user is scrolling...
		getPixels(); //check if nav is open and controls the scroll in order to change the buttons
	});


$(".launch-nav").click(function(){
		$("nav#main-nav").slideToggle("slow");
		$(this).toggleClass("open-nav");
		$("#thumb-wrapper").toggleClass("the-margin");
		$('html,body,#wrapper').animate({scrollTop:0}, 500);
		findWaypoint();
		return false;
	});
	$(".scroll-to-menu").click(function(){
		$('html,body,#wrapper').animate({scrollTop:0}, 500);
		return false;
		})

/*Preventing "ajaxify" for social links*/
$("#network-menu li a").click(function() {
	window.open(this.href);
    return false;
}); 

/*******************************************
 * THUMBS HOVER FIX
 ********************************************/
$('.thumb').hover(function(){
	if(cat== null || cat == "none" )
		$(this).fadeTo(100, 1);
}, function(){
	if(cat== null || cat == "none" )
		$(this).fadeTo(100, 0.4)
});


}); // End document ready

/*******************************************
 * MEDIA QUERIES TO DINAMYC ENHANCEMENT
 ********************************************/
// Edit to suit your needs.
var ADAPT_CONFIG = {
  // Where is your CSS/adaptive/folder?
  path: 'assets/',

  dynamic: true,
 
  range: [
    '0px    to 449px  = mobile.css',
    '459px  to 840px  = middle.css',
    '841px  to 1440px = large.css',
    '1441px  		  = xlarge.css'
  ]
};

