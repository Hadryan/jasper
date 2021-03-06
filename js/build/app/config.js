define([
	'jquery',
	'models/svg'
], function(
	$,
	svg
){

	"use strict";

	var config = {

		// Live or Local
		environment : WP.ENVIRONMENT,

		firstPageLoad : true,

		// Wordpress 
		url         : WP.URL,
		themeurl    : WP.THEME_URL,
		ajaxurl     : WP.AJAX_URL,
		nonce       : WP.NONCE,
		bootstrap   : $.parseJSON( WP.BOOTSTRAP_DATA ),

		// Device detection
		smart : {
			device  :   ( WP.DEVICE == 1 ) ? true : false,
			tablet  :   ( WP.TABLET == 1 ) ? true : false,
			phone   :   ( WP.MOBILE == 1 ) ? true : false
		},

		misc : {
			// retrieve lazyline data
			lazylinedata : svg.get('lazyline'),
			// refers to page transitions
			isAnimating : false
		},

		el : {
			win : $(window),
			doc : $(document),
			body: $('body')
		},

		handlers : {
			resize : {},
			ajax : {}
		},

		screen : {
			height : $(window).height(),
			width  : $(window).width()
		}
	};   
 

	return config;
}); 
