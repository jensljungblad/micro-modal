$ = jQuery

$.fn.modal = (options) ->
  if typeof options == 'string'
    switch options
      when 'open' then open.apply this
      when 'close' then close.apply this
  else
    initialize.apply this, [options]
  this

initialize = (options) ->
  options = $.extend {
    backdrop: true
    vertical: true
  }, options

  $modal = $(this)

  $modal.addClass 'modal-backdrop' if options.backdrop
  $modal.addClass 'modal-vertical' if options.vertical

  # Close modal when clicking the backdrop
  $modal.on 'click', (e) ->
    close.apply this if e.target is e.currentTarget

open = ->
  $(this).addClass 'modal-open'

close = ->
  $(this).removeClass 'modal-open'
