var $Slider = $('.slider-win').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    focusOnSelect: true,
    fade: true,
    cssEase: 'linear'
  
  });
  
  $('.slider-item').on('click', function(e) {
  
    var slideIndex = $(this).data('item');
    
    $(this).addClass('on').siblings().removeClass('on');
  
    $Slider.slick( 'slickGoTo', parseInt( slideIndex ) - 1 );
  
    e.preventDefault();
  });