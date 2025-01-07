$(function () {
  slideHeight = $("#sliderWrap").height();
  function slideHeightChange() {
    slideHeight = $("#sliderWrap").height();
  }

  let timer = false;
  var currentWidth = window.innerWidth; // ウインドウの横幅を保持
  $(window).on("orientationchange resize", function () {
    if (timer !== false) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      if (currentWidth == window.innerWidth) {
        // ウインドウ横幅が変わっていないため処理をキャンセル。
        return;
      }
      // ウインドウ横幅が変わったのでリサイズと見なす。
      currentWidth = window.innerWidth; // 横幅を更新
      slideHeightChange();
    }, 200);
  });
  var $win = $(window),
    $header = $("#header");


  $win.on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > slideHeight) {
      $header.addClass('on');
    } else {
      $header.removeClass('on');
    }
  });
});