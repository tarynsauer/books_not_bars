

// ========================Navigation Scripts====================
var linkTransition = function() {
  $('a[href^="#"].navLinks').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
}
var linkStyler = function() {
  $(window).scroll( function () {

    var situationTop = 50;
    var factsTop = $('#facts').offset().top - situationTop;
    var exploreTop = $('#explore').offset().top - situationTop;
    var toolkitTop = $('#toolkit').offset().top - situationTop;

    var screenTop = this.scrollY - situationTop;

    var a1 = $('a#1');
    var a2 = $('a#2');
    var a3 = $('a#3');
    var a4 = $('a#4');

    var a1top = $('a#1').offset().top + $('#situation').offset().top;
    var a2top = $('a#2').offset().top + $('#situation').offset().top;
    var a3top = $('a#3').offset().top + $('#situation').offset().top;
    var a4top = $('a#4').offset().top + $('#situation').offset().top;

    // a1
    if ( a1top>factsTop && a1top<toolkitTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("white");
    }
    if ( a1top<factsTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("white");
    }
    if ( a1top>toolkitTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("black");
    }
    // a2
    if ( a2top>factsTop && a2top<toolkitTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("white");
    }
    if ( a2top<factsTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("white");
    }
    if ( a2top>toolkitTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("black");
    }
    //a3
    if ( a3top>factsTop && a3top<toolkitTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("white");
    }
    if ( a3top<factsTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("white");
    }
    if ( a3top>toolkitTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("black");
    }
    //a4
    if ( a4top>factsTop && a4top<toolkitTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("white");
    }
    if ( a4top<factsTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("white");
    }
    if ( a4top>toolkitTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("black");
    }
  });
};

var fadeSlideIn = function(toShow){
  // fade out all slides that aren't this selector
  $("#factPanel2").children().not('[style="display: none;"]').fadeOut(1000, function(){
    $(toShow).fadeIn(100);
  })
}

var animateCaro = function() {
  // loop through each of these classes
  var nextFrameIndex = 0;
  var frames = [".nycprice", ".incrate", ".earlyed", ".earlyed2"];
  window.caroAnimate = setInterval(function() {
    nextFrameIndex += 1;
    if(nextFrameIndex ==frames.length) {
      nextFrameIndex = 0;
    }

    fadeSlideIn(frames[nextFrameIndex]);
  }, 4100);

}
var fadeCaro = function(){
  $('.nycprice').fadeOut(4000, function() {
    $('.incrate').fadeIn(100, function(){
      $('.incrate').fadeOut(4000, function() {
        $('.earlyed').fadeIn(100, function(){
          $('.earlyed').fadeOut(4000, function() {
            $('.earlyed2').fadeIn(100, function(){
              $('.earlyed2').fadeOut(4000, function() {
                $('.nycprice').fadeIn(100, function(){
                  fadeCaro();
                });
              });
            });
          });
        });
      });
    });
  });
};

var slideCaro = function(){
  $(".live-tile, .flip-list").not(".exclude").liveTile();
};

var buttonCaro = function(selector){
  $()

};

var flipTile = function(jqSelector){
  var self = $(jqSelector);

  var tile = self.liveTile({ repeatCount: 0, delay: 0});
      self.liveTile("pause");
    self.click(function(){
      $(this).liveTile("play", 0);
    });

};

var tweetWidget = function() {
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
}


// ========================ON DOCUMENT LOAD======================

$(document).ready(function() {

  tweetWidget();
  // Link Transition Function
  linkTransition();
  // Link Styler Function
  linkStyler();

  flipTile('#fact1');
  flipTile('#fact2');
  flipTile('#fact3');
  flipTile('#fact4');

  $('.btn').html('<img class="tweetFactIcon" src="tweetCongressBlueOnWhite"/>');
});

