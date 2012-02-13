// jquery.toggleme
// by David Kennedy
// http://daveden.wordpress.com/

(function($) {
	var methods = {
		init: function(options) {
			var settings = $.extend({
				'icon': 'true',
				'autoOpen': 'false',
				'linkTitle': 'true',
				'preventDefault': 'false'
			}, options);
			
			return this.each(function() {
				var title = $(this).children(':first');
				var body = title.next();
				
				// Reset margins
				title.css('margin-top', '0').css('margin-bottom', '0');
				body.children(':first').css('margin-top', '0');
				body.children(':last').css('margin-bottom', '0');
				
				if (settings.icon == 'true') {
					title.addClass('icon');
				}
				
				if (settings.autoOpen == 'false') {
					$(this).toggleme('close', {
						'animate': 'false'
					});
				} else {
					$(this).toggleme('open', {
						'animate': 'false'
					});
				}
				
				if (settings.linkTitle == 'true') {
					title.html('<a>' + title.html() + '</a>');
				}
				
				if (settings.preventDefault == 'false') {
					title.click(function() {
						if (body.css('display') == 'none') {
							$(this).parent().toggleme('open');
						} else {
							$(this).parent().toggleme('close');
						}
					});
				}
			});
		},
		open: function(options) {
			var settings = $.extend({
				'animate': 'true'
			}, options);
			
			return this.each(function() {
				var title = $(this).children(':first');
				var body = title.next();
				
				if (title.hasClass('icon')) {
					title.css('background', 'url("img/open.png") left center no-repeat')
						.css('padding-left', '1em');
				}
				
				if (settings.animate == 'true') {
					title.css({
						'margin-bottom': '0'
					}).animate({
						'margin-bottom': '1em'
					});
					body.animate({
						height: 'show'
					});
				} else {
					title.css('margin-bottom', '1em');
					body.show();
				}
			});
		},
		close: function(options) {
			var settings = $.extend({
				'animate': 'true'
			}, options);
			
			return this.each(function() {
				var title = $(this).children(':first');
				var body = title.next();
				
				if (title.hasClass('icon')) {
					title.css('background', 'url("img/close.png") left center no-repeat')
						.css('padding-left', '1em');
				}
				
				if (settings.animate == 'true') {
					title.css({
						'margin-bottom': '1em'
					}).animate({
						'margin-bottom': '0'
					});
					body.animate({
						height: 'hide'
					});
				} else {
					title.css('margin-bottom', '0');
					body.hide();
				}
			});
		}
	};
	
	$.fn.toggleme = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method == 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jquery.toggleme');
		}
	};
})(jQuery);