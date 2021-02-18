$(document).ready(function() {
    var contentswitch = true;
    $('#nav-icon').click(function() {
        contentswitch === true ? $('section').hide() : $('section').slideDown('slow');
        contentswitch === true ? $('#contacts').animate({ 'left': '-100%' }) : $('#contacts').animate({ 'left': '0' });
        contentswitch = !contentswitch;
        $(this).toggleClass('open');
        $('#portrait').toggleClass('slidedown');
        $('aside').toggleClass('slideleft');
        $('#contacts').toggleClass;
        let anchors = $('aside a');
        for (let i = 0; i < anchors.length; i++) {
            setTimeout(() => {
                $(anchors[i]).toggleClass('slide');
            }, 300 * i);
        }
    });
});