
$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/

  // ハンバーガーメニュークリック
  $(".hamburger").on("click", function () {
    $(".nav").toggleClass("active");
    $(".hamburger").toggleClass("active");
  });

  // navリンククリックで閉じる
  $(".nav a").on("click", function () {
    $(".nav").removeClass("active");
    $(".hamburger").removeClass("active");
  });
});

$(function () {
  /*=================================================
スクロール時の画像フェード表示
===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(20)");
      }
    });
  });
});


$(function () {
  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 800;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});