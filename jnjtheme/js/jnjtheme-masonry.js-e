/**
 * @file
 * Obio Masonry.
 */

(function($, Drupal) {
  "use strict";

  /**
   * Masonry helper for tile views.
   */
  Drupal.behaviors.jnjthemeMasonry = {
    attach: function (context) {
      $(context).find('.js-jnjtheme-masonry').once('jnjthemeMasonry').each(function () {
        var $viewContent = $(this).find('.view-content');
        $viewContent.addClass('jnjtheme-masonry-loading');
        $viewContent.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>').once();

        // Indicate that images are loading.
        $viewContent.append('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
        $viewContent.imagesLoaded(function () {
          $viewContent.masonry({
            columnWidth: '.grid-sizer',
            // do not use .grid-sizer in layout
            itemSelector: '.l-card-elem',
            percentPosition: true
          });
          // Add a class to reveal the loaded images, which avoids FOUC.
          $viewContent.children().addClass('jnjtheme-masonry-done');
          $viewContent.find('.ajax-progress').remove();
          $viewContent.removeClass('jnjtheme-masonry-loading');
        });
      });
    }
  };

})(jQuery, Drupal);
