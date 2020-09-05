$(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
})

$(function () {
  $('.expert_slide').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

$(function () {
  $(".share").on("click", function () {
    $(this).parent().find(".strip").slideToggle();
    $(this).find("button i img").toggleClass('flip')
  })
})

$(function () {
  $(".share").mouseover(function () {
    $(this).find("button > i > img").attr("src", "./img/share.png");
  });
  $(".share").mouseout(function () {
    $(this).find("button > i > img").attr("src", "./img/unshare.png");
  });
})

/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 6;
  var totalItems = $('.carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('.carousel-item').eq(i).appendTo('.carousel-inner');
      } else {
        $('.carousel-item').eq(0).appendTo('.carousel-inner');
      }
    }
  }
});

$(function () {
  var offset = 220;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".scrollToTop").fadeIn(duration);
    } else {
      $(".scrollToTop").fadeOut(duration);
    }
  });

  $(".scrollToTop").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration)
  })
})

$(".nav-link").on("click", function () {
  $(".nav-link").each(function () {
    $(this).removeClass("active_item");
  });
  $(this).addClass("active_item");
});

$(function () {
  $(".strip > div").hover(function () {
    $(this > "i").css("color", "#41bceb")
  })
})

$(function () {
  $(".btnGroup button.btn-gallery").mouseover(function () {
    $(".btnGroup button.btn-gallery img").attr("src", "./img/Hero_Search/gallery_selected.png");
  })
})

$(function () {
  $(".btnGroup button.btn-gallery").mouseout(function () {
    $(".btnGroup button.btn-gallery img").attr("src", "./img/Hero_Search/gallery_unselected.png");
  })
})

$(function () {
  $(".btnGroup button.btn-products").mouseover(function () {
    $(".btnGroup button.btn-products img").attr("src", "./img/Hero_Search/products_selected.png");
  })
})

$(function () {
  $(".btnGroup button.btn-products").mouseout(function () {
    $(".btnGroup button.btn-products img").attr("src", "./img/Hero_Search/products_unselected.png");
  })
})

$(function () {
  $(".btnGroup button.btn-professional").mouseover(function () {
    $(".btnGroup button.btn-professional img").attr("src", "./img/Hero_Search/professional_selected.png");
  })
})

$(function () {
  $(".btnGroup button.btn-professional").mouseout(function () {
    $(".btnGroup button.btn-professional img").attr("src", "./img/Hero_Search/professional_unselected.png");
  })
});

$(document).ready(function () {

  // Gets the video src from the data-src on each button

  var $videoSrc;
  $('.btn_video, .circle_video, .story, .play').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })
  // document ready  
});

$('.owl-carousel').owlCarousel({
    loop: false,
    slideSpeed : 200,
    paginationSpeed : 800,
    nav: true,
 
    autoPlay : true,
    goToFirst : true,
    goToFirstSpeed : 0,
 
    // Navigation
    navigation : true,
    navigationText : ["",""],
    pagination : false,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    items : 5,
    itemsDesktop : [1200,4],
    itemsDesktopSmall : [991,3],
    itemsTablet: [756,2],
    itemsMobile : [479,1]
});