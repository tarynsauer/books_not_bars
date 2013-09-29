$(document).on('mouseover', '*[data-zc-copy-value]', function() {
  var that = $(this),
      width = that.outerWidth(),
      height =  that.outerHeight();

  if(that.data("zc-activated") !== "true"){
    // init new ZeroClipboard client
    clip = new ZeroClipboard();
    clip.setHandCursor( true );
    clip.setText(that.data('zc-copy-value'));

    var flash_movie = '<div>'+clip.getHTML(width, height)+'</div>';
    // make your own div with your own css property and not use clip.glue()
    flash_movie = $(flash_movie).css({
      position: 'relative',
      marginTop: -height,
      width: width,
      height: height,
      zIndex: that.css('zIndex') + 1
    });

    // delegate mouse states (use the .hover/.active class instead of :hover/:active)
    flash_movie
       .hover(function() { that.addClass('hover'); },
              function() { that.removeClass('hover'); })
       .mousedown(function() { that.addClass('active'); })
       .mouseup(function() { that.removeClass('active'); });

    // add flash overlay
    that
      .after(flash_movie) // if you want to put before and not after, then you have to change the marginTop to marginBottom
      .data("zc-activated", "true");
  }
});