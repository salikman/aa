import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

(function($) {
    $('#top-nav .nav__collapse').on('click', function() {
        $('#top-nav').toggleClass('open');
    });
})(jQuery);
