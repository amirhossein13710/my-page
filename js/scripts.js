new SmoothScroll('a[href*="#"]' , {
    easing: 'linear',
    speed: 1000
});

new WOW().init();
$('#skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
        var width = $(this).data("val");
        $(this).css('width' , width + '%');
    });
}, { offset: '80%'} );
var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});

$('#portfolio-filter li').on( 'click', function() {
$("#portfolio-filter li").removeClass('filter-active');
$(this).addClass('filter-active');

portfolio.isotope({
    filter: $(this).data('filter')
});
});

portfolio.on( 'arrangeComplete', function () {
if($(window).scrollTop() % 2 == 0)
    $(window).scrollTop($(window).scrollTop() - 1);
else{
    $(window).scrollTop($(window).scrollTop() + 1);
}
});
   





