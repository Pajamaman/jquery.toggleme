(function ($) {
    'use strict';

    var methods = {
        init: function (options) {
            var settings = $.extend({
                    'icon': true,
                    'autoOpen': false,
                    'linkTitle': true,
                    'preventDefault': false
                }, options);

            return this.each(function () {
                var title = $(this).children(':first'),
                    body = title.next();

                if (settings.icon) {
                    title.addClass('toggleme-icon');
                }

                if (!settings.autoOpen) {
                    $(this).toggleme('close', {
                        'animate': false
                    });
                } else {
                    $(this).toggleme('open', {
                        'animate': false
                    });
                }

                if (settings.linkTitle) {
                    title.html('<a>' + title.html() + '</a>');
                }

                if (!settings.preventDefault) {
                    title.click(function () {
                        if (body.css('display') === 'none') {
                            $(this).parent().toggleme('open');
                        } else {
                            $(this).parent().toggleme('close');
                        }
                    });
                }
            });
        },
        open: function (options) {
            var settings = $.extend({
                    'animate': true
                }, options);

            return this.each(function () {
                var title = $(this).children(':first'),
                    body = title.next();

                if (title.hasClass('toggleme-icon')) {
                    title.addClass('open');
                    title.removeClass('close');
                }

                if (settings.animate) {
                    if (body.css('display') !== 'none') {
                        return false;
                    }

                    body.animate({
                        height: 'show'
                    });
                } else {
                    body.show();
                }
            });
        },
        close: function (options) {
            var settings = $.extend({
                    'animate': true
                }, options);

            return this.each(function () {
                var title = $(this).children(':first'),
                    body = title.next();

                if (title.hasClass('toggleme-icon')) {
                    title.addClass('close');
                    title.removeClass('open');
                }

                if (settings.animate) {
                    if (body.css('display') === 'none') {
                        return false;
                    }

                    body.animate({
                        height: 'hide'
                    });
                } else {
                    body.hide();
                }
            });
        }
    };

    $.fn.toggleme = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }

        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }

        $.error('Method ' + method + ' does not exist on jquery.toggleme');
    };
}(jQuery));
