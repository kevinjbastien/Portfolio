/*

	COMMITY TEMPLATE  V1.0 BY SUPVIEW.BE
	
	
	01. STICKY HEADER TEXT
	02. PARALLAX SETTINGS
	03. NAVIGATION SHOW HIDE
	04. PORTFOLIO / WORKS SECTION
	05. SMOOTH SCROLLING
	06. FLEXSLIDER
	07. TWITTER FEED

*/


jQuery(document).ready(function($){

  "use strict";


    mediaCheck({
        media: '(max-width: 1024px)',  /* If the page is max-width:1024px do the entry */
        entry: function () {
		

        },
        exit: function () { /* If not do the exit function */



/*-----------------------------------------------------------------------------------*/
/*	01. STICKY HEADER TEXT
/*-----------------------------------------------------------------------------------*/
	        

		
			YUI().use('node', function (Y) {
			  Y.on('domready', function () {
			    
			    var scrolling = false,
			        lastScroll,
			        i = 0;
			    
			    Y.on('scroll', function () {
			      if (scrolling === false) {
			        fade();
			      }
			      scrolling = true;
			      setTimeout(function () {
			        scrolling = false;
			        fade();
			      }, 0);
			    });
			    
			    function fade() {
			      
			      lastScroll = window.scrollY;
			      
			      Y.one('#header').setStyles({
			        'transform' : 'translate3d(0,' + Math.round(lastScroll/1) + 'px,0)',
			        'opacity' : (100 - lastScroll/20)/0
			      });
			      
			      if (scrolling === true) {
			        window.requestAnimationFrame(fade);
			      }
			    }
			    
			  });
			});


/*-----------------------------------------------------------------------------------*/
/*	02. PARALLAX SETTINGS
/*-----------------------------------------------------------------------------------*/
	

			//.parallax(xPosition, speedFactor, outerHeight) options:
			//xPosition - Horizontal position of the element
			//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
			//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
			$('#header').parallax("1%", -0);	
			$('.intersection').parallax("50%", 0.6);	
        }
  
  
  
    }); /* END OF THE MEDIACHECK */



/*-----------------------------------------------------------------------------------*/
/*	03. NAVIGATION SHOW HIDE
/*-----------------------------------------------------------------------------------*/

	$(".navToggle").on("click", function(){
		  
		  $(this).toggleClass("open");
		  
		  $("#menu").toggleClass("active");	

			setTimeout(
			  function() 
			  {
					$('nav a').each(function(i){
						var t = $(this);
						setTimeout(function(){ t.toggleClass('active'); }, (i+1) * 100)
						
					});
			
			  }, 200);
				
			setTimeout(
			 	 function() 
			 	 {  
				  $(".social-links").fadeToggle("active");	
			}, 10);
				  
				  		  
		  		  $(".bgblack").toggleClass("active");	
		  		  

		  
	  });
	
	
	$('.bgblack, nav a').on('click', function() {	

		$(".social-links").fadeToggle("active");	

			setTimeout(
			  function() 
			  {
					$('nav a').each(function(i){
						var t = $(this);
						setTimeout(function(){ t.toggleClass('active'); }, (i+1) * 100);
					});
			
			  }, 200);



		setTimeout( "$('#menu, .bgblack').toggleClass('active');",1200 );

		$(".navToggle").toggleClass("open");
		

	});



/*-----------------------------------------------------------------------------------*/
/*	05. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
	
	
	$('.go-down a, nav a').click(function(e){
	    $('html,body').scrollTo(this.hash,this.hash,  {'axis':'y'});
	    e.preventDefault();
	});


/*-----------------------------------------------------------------------------------*/
/*	06. Flexslider
/*-----------------------------------------------------------------------------------*/
	

      $('#agency_img').flexslider({
        animation: "slide",
        itemMargin: 3,
      });

      $('#agency_text').flexslider({
        animation: "fade",
        itemMargin: 3,
        sync: "#agency_img",
      });

      $('#clients_img').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 2000, 
      });

      $('#members_slides').flexslider({
        animation: "slide",
        animationLoop: true,
      });



/*-----------------------------------------------------------------------------------*/
    /*	07. TWITTER FEED
/*-----------------------------------------------------------------------------------*/



/*-------- ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
-----*/


var config1 = {
  "id": '520203088334819328',
  "domId": 'twitter',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(config1);




}); /* END OF Document Ready */

