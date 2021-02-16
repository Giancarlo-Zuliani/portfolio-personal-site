$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        $('#portrait').toggleClass('slidedown');
        $('aside').toggleClass('slideleft');
        let anchors = $('aside a');
        for (let i = 0; i < anchors.length; i++) {
            setTimeout(() => {
                $(anchors[i]).toggleClass('slide');
            }, 300 * i);
        }
    });
});

console.log('ciao');