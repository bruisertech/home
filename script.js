$(document).ready(function() {
    $('.preload').css({'display': 'table'});

    var percent = 0;
    var int = null;

    // Simulate loading progress
    int = setInterval(function () {
        percent += 20; // Increase by 20% every 500ms -> total 2.5 seconds

        // Update progress bar
        $('.loading-bar .bar').css({width: percent + "%"});

        // Cycle through text spans
        var $activeSpan = $('span.active');
        $activeSpan.removeClass('active');

        var $nextSpan = $activeSpan.next('span');
        if($nextSpan.length > 0) {
            $nextSpan.addClass('active');
        } else {
            // Fallback if we run out of spans (shouldn't happen with exact timing)
            $('span:last-child').addClass('active');
        }

        // Finish loading
        if (percent >= 100) {
            clearInterval(int);

            // Wait a brief moment before hiding the UI and filling the colors
            setTimeout(function() {
                // Hide loading bar and text
                $('.preloader-ui').addClass('hide');

                // Add class to SVG to trigger color fill transition
                $('svg').addClass('fill-colors finished-loading');

                // Optional: allow scrolling on body after loading
                $('body').css('overflow', 'auto');

            }, 300); // Small delay to let the user see 100%
        }
    }, 500);
});