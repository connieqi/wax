var waxWane = {
    wax: function() {
        $('#masthead-positioner').hide();
        $('#masthead-positioner-height-offset').hide();

        $('#msg').text('Video waxed');
        $('#wax-btn').hide();
        $('#wane-btn').show();
    },

    wane: function() {
        $('#msg').text('Video waned');
        $('#wane-btn').hide();
        $('#wax-btn').show();
    },

    onYouTube: function(cb) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true},
        function(tabs) {
            var url = tabs[0].url;

            // js URI parsing thanks to https://gist.github.com/jlong/2428561
            var parser = document.createElement('a');
            parser.href = url;

            if (parser.hostname == 'www.youtube.com' && parser.pathname == '/watch') {
                cb(true);
            } else {
                cb(false);
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('hi wax');
    waxWane.onYouTube(function(response) {
        if (response === true) {
            waxWane.wax();
        }
    });

    $('#wax-btn').on('click', function() {
        waxWane.wax();
    });
    
    $('#wane-btn').on('click', function() {
        waxWane.wane();
    });

});

