// jquery.toggleme
// by David Kennedy
// http://daveden.wordpress.com/

(function($) {
	var methods = {
		init: function(options) {
			var settings = $.extend({
				'icon': 'true',
				'autoOpen': 'false',
				'linkTitle': 'true'
			}, options);
			
			return this.each(function() {
				var title = $(this).children(':first');
				var body = title.next();
				
				// Swap the margin between the title and the body
				body.css('margin-top', title.css('margin-bottom'));
				title.css('margin-top', '0px').css('margin-bottom', '0px');
				body.children(':first').css('margin-top', '0px');
				body.children(':last').css('margin-bottom', '0px');
				
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
				
				title.click(function() {
					if (body.css('display') == 'none') {
						$(this).parent().toggleme('open');
					} else {
						$(this).parent().toggleme('close');
					}
				});
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
					title.addClass('open').removeClass('close');
				}
				
				if (settings.animate == 'true') {
					body.animate({
						height: 'show'
					});
				} else {
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
					title.removeClass('open').addClass('close');
				}
				
				if (settings.animate == 'true') {
					body.animate({
						height: 'hide'
					});
				} else {
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