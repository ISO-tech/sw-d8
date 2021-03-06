(function($) {
  Drupal.behaviors.shareExpander = {
    attach: function (context, settings) {
      
      $(".social-links .more", context).click(function(e) {
        e.preventDefault();
        $(this).parent('.social-links').siblings('.more-links').toggleClass('open');
      });
  
      $(".more-links-close", context).click(function() {
        $(this).parent('.more-links').removeClass('open');
      });
    }
  };
})(jQuery);
