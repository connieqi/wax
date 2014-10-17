var waxWane = {
    wax: function() {
        chrome.tabs.executeScript({file: '/js/lib/jquery.min.js'}, function() {
            chrome.tabs.executeScript({file: '/js/yt_wax.js'});
        });

        $('#msg').text('Video expanded');
        $('#wax-btn').hide();
        $('#wane-btn').show();
    },

    wane: function() {
        chrome.tabs.executeScript({file: '/js/lib/jquery.min.js'}, function() {
            chrome.tabs.executeScript({file: '/js/yt_wane.js'});
        });

        $('#msg').text('Back to normal');
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
    waxWane.onYouTube(function(response) {
        if (response === true) {
            waxWane.wax();
        }
    });

    $('#wax-btn').on('click', function() {
        waxWane.onYouTube(function(response) {
            if (response === true) {
                waxWane.wax();
            }
        });
    });
    
    $('#wane-btn').on('click', function() {
        waxWane.onYouTube(function(response) {
            if (response === true) {
                waxWane.wane();
            }
        });
    });

});

