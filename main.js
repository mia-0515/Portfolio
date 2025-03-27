$('.switch').on('click', function () {
    $('header nav').fadeToggle(200);
    $('.switch').toggleClass('active');
});

function checkBreakPoint() {
    w = $(window).width();
    if (w <= 440) {
        // スマホ向け（440px以下のとき）
        $('.kigyou-outer').not('.slick-initialized').slick({
            //スライドさせる
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            centerPadding: "15%",
            dots: true,
        });

        $('.kyuujin-ex-img').not('.slick-initialized').slick({
            //スライドさせる
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: "20%",
        });


    } else {
        // PC向け
        $('.kigyou-outer.slick-initialized').slick('unslick');
        $('.kyuujin-ex-img.slick-initialized').slick('unslick');
    }
}
// ウインドウがリサイズする度にチェック
$(window).resize(function () {
    checkBreakPoint();
});
// 初回チェック
checkBreakPoint();