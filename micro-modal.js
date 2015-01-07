(function() {
  var $, close, initialize, open;

  $ = jQuery;

  $.fn.modal = function(options) {
    if (typeof options === 'string') {
      switch (options) {
        case 'open':
          open.apply(this);
          break;
        case 'close':
          close.apply(this);
      }
    } else {
      initialize.apply(this, [options]);
    }
    return this;
  };

  initialize = function(options) {
    var $modal;
    options = $.extend({
      backdrop: true,
      keyboard: true,
      vertical: true
    }, options);
    $modal = $(this);
    if (options.backdrop) {
      $modal.addClass('modal-backdrop');
    }
    if (options.vertical) {
      $modal.addClass('modal-vertical');
    }
    return $modal.on('click', function(e) {
      if (e.target === e.currentTarget) {
        return close.apply(this);
      }
    });
  };

  open = function() {
    return $(this).addClass('modal-open');
  };

  close = function() {
    return $(this).removeClass('modal-open');
  };

}).call(this);
