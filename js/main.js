$(window).scroll(function() {
	 if ($(this).scrollTop() > 2100) {
		 $('.skillbar').each(function() {
	   	  $(this).find('.skillbar-bar').animate({
	      width: $(this).attr('data-percent')
	    }, 3000);
    });
   }
});




