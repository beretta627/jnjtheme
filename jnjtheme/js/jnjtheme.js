/**
 * @file
 * Obio sub-theme behaviors.
 */
(function($, Drupal) {

  "use strict";

  /**
   * Initializes foundation's JavaScript for new content added to the page.
   */
  Drupal.behaviors.foundationInit = {
    attach: function (context, settings) {
      $(context).foundation();
    }
  };

  /**
   * Adds/removes a class when the top-bar menu is overflowing.
   */
  Drupal.behaviors.jnjthemeMenuOverflow = {
    attach: function (context, settings) {
      var onresize = function () {
        var $menu = $('.header-left ');
        var expectedMenuHeight = 120;
        $menu.closest('.header-wrap').removeClass('overflow');
        if ($menu.height() > expectedMenuHeight) {
          $menu.closest('.header-wrap').addClass('overflow');
        }
        else {
          $menu.closest('.header-wrap').removeClass('overflow');
        }
      };
      onresize();
      $(window).once('jnjtheme-menu-resize').resize(onresize);
    }
  };

  // Display a custom modal for Obio.
  Drupal.behaviors.jnjthemeModal = {
    attach: function(context, settings) {
      if (settings.jnjtheme && settings.jnjtheme.modal) {
        var output =
          '<div id="jnjtheme-modal" data-reveal data-animation-in="fade-in" data-animation-out="fade-out" class="jnjtheme-modal-message reveal">' +
          '  <div>' +
          '    <i class="icon ion-ios-checkmark-outline fa-4x"></i>' +
          '    <h2>' + Drupal.t('Thank You') + '</h2>' +
          '    <p>' + Drupal.checkPlain(settings.jnjtheme.modal) + '</p>' +
          '    <button class="close-button" aria-label="Close reveal" type="button" data-close><span aria-hidden="true">&times;</span></button>' +
          '  </div>' +
          '</div>';
        $('html').append(output);
        $('#jnjtheme-modal').foundation().foundation('open');
        delete settings.jnjtheme.modal;
      }
    }
  }

})(jQuery, Drupal);
