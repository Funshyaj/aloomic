$(function () {
    jssor_1_slider_init();
});

// for slide
window.jssor_1_slider_init = function () {
    var isMobile = $(window).width() <= 768;
    var TransitionsMobile = [[{ b: 0, d: 700, x: 216, r: 360, e: { x: 11 } }], [{ b: 0, d: 640, y: 167 }], [{ b: 580, d: 380, x: 832, y: 440 }], //the
        [{ b: 700, d: 340, x: 535, y: 530, e: { x: 1, y: 5 } }], // best work
        [{ b: 800, d: 320, x: 0, y: 630, e: { y: 2 } }]];
    var TransitionsDesktop = [[{ b: 0, d: 700, x: 216, r: 360, e: { x: 11 } }], [{ b: 0, d: 640, y: 167 }], [{ b: 580, d: 380, x: 832, y: 285 }], [{ b: 700, d: 340, x: 535, y: 376, e: { x: 1, y: 5 } }], [{ b: 800, d: 320, x: 561, y: 465, e: { y: 2 } }], [{ b: 0, d: 700, x: 216, r: 360, e: { x: 11 } }], [{ b: 0, d: 640, y: 167 }], [{ b: 580, d: 380, x: 832, y: 285 }], [{ b: 700, d: 340, x: 535, y: 376, e: { x: 1, y: 5 } }], [{ b: 800, d: 320, x: 561, y: 465, e: { y: 2 } }], [{ b: 0, d: 700, x: 216, r: 360, e: { x: 11 } }], [{ b: 0, d: 640, y: 167 }], [{ b: 580, d: 380, x: 832, y: 285 }], [{ b: 700, d: 340, x: 535, y: 376, e: { x: 1, y: 5 } }], [{ b: 800, d: 320, x: 561, y: 465, e: { y: 2 } }]];
    var options = {
        $AutoPlay: 1,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: isMobile ? TransitionsMobile : TransitionsDesktop
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", options);

    /*#region responsive code begin*/
    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            jssor_1_slider.$ScaleWidth(expectedWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};