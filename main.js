$('.switch').on('click', function () {
    $('header nav').slideToggle(200);
    $('.switch').toggleClass('active');
});
