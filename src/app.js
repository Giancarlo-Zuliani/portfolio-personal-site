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

/* $("#typedbanner").typing({
    
    
    
    // time before backspacing in milliseconds
    
    eraseDelay: 10,
    
    
    
    // time before typing in milliseconds
    
    typeDelay: 70,
    
    
    
    // time before string typing in milliseconds
    
    stringStartDelay: 1000,
    
    
    
    // text color
    
    color: 'red',
    
    
    
    // text color when typing
    
    typingColor: 'black',
    
    
    
    // opacity when typing
    
    typingOpacity: '0.1',
    
    
    
    // amount of loops
    
    loopCount: 3,
    
    
    
    // shows blink cursor
    
    cursorBlink: true,
    
    
    
    // character for cursor
    
    cursorChar: '<small></small>',
    
    
    
    // enables fade animation
    
    fade: true
    
    
    
}); */
$('#typedbanner').typing({
    strings: ['javascript berserker', 'code hard play hard', 'full stack web developer'],
    cursorBlink: true,
    loopCount: 5,
    typingColor: "#e73635",
    color: "#e73635"
});