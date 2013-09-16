(function(){

  $('#site-pickers').on('submit', function(e){

    e.preventDefault();

    // Empty the diff area.
    $('.diffzone').html('');
    $('#expando').remove();
    $('.diffzone').show();

    // Create iframes.
    var iframe_one = $('<iframe seamless="seamless" scrolling="no"></iframe>');
    var iframe_two =  $('<iframe seamless="seamless" scrolling="no"></iframe>');
    iframe_one.attr('class', 'one');
    iframe_two.attr('class', 'two');

    // Populate iframes.
    iframe_one.attr('src', $('#picker-one')[0].value);
    iframe_two.attr('src', $('#picker-two')[0].value);

    // Set initial height and append frames.
    $('.diffzone').height('500');
    $('.diffzone').append(iframe_one).append(iframe_two);

    // Create 'expando' link - increase the height of the diff area.
    var expando = $('<a href="#" id="expando">Expand</a>').on('click', function(e){
      e.preventDefault();
      var diffzone = $('.diffzone').eq(0);
      var current_height = diffzone.height();
      diffzone.animate({'height': (current_height * 1.7)}, function(){ $('body').scrollTo(0, '#expando'); } );
    });
    $('.diffzone').after($('<div class="container"></div>').append(expando));

  });

  // Toggle diff type. Side-by-side allows scrolling.
  $('#diff-type').on('change', function(e){
    $('.diffzone').toggleClass('overlay');
    $('.diffzone').toggleClass('sidebyside');
    if ($(this).val() == 'sidebyside') {
      $('.diffzone iframe').removeAttr('seamless');
      $('.diffzone iframe').attr('scrolling', 'yes');
    } else {
      $('.diffzone iframe').attr('seamless', 'seamless');
      $('.diffzone iframe').attr('scrolling', 'no');
    }
    // console.log($(this).val());
  });

})();
