// import * as flsFunctions from "./modules/functions.js";
// import * as lazyLoad from "./modules/lazyload.js";

// flsFunctions.isWebp();
// lazyLoad.lazyLoad();

(function($) {
    $('#top-nav .nav__collapse').on('click', function() {
        $('#top-nav').toggleClass('open');
    });

    // Fancybox.bind('[data-fancybox]', {}); 
    Fancybox.bind('[data-fancybox="coca-cola-gallery"', {});
    Fancybox.bind('[data-fancybox="pepsi-gallery"', {});
    Fancybox.bind('[data-fancybox="seven-up-gallery"', {});
    Fancybox.bind('[data-fancybox="toxic-candy-gallery"', {});
    Fancybox.bind('[data-fancybox="wrigley-gallery"', {});
})(jQuery);
