;(function(){
	$(function(){
		var body=$('body'),
			menuToggle=$('.ba-menu-toggle');

		menuToggle.click(function(event){
			console.log(menuToggle);
			event.preventDefault();
			body.toggleClass('ba-menu-opened');
			console.log('hw');
		});
	});
})(jQuery);


