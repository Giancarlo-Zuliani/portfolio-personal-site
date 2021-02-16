$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $('#portrait').toggleClass('slidedown');
        $('aside').toggleClass('slideleft');
    });
});

console.log('ciao');