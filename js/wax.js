
var waxWane = {
    wax: function() {
        $('#msg').text('Video waxed');
        $('#wax-btn').hide();
        $('#wane-btn').show();
    },

    wane: function() {
        $('#msg').text('Video waned');
        $('#wane-btn').hide();
        $('#wax-btn').show();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('hi wax');
    waxWane.wax();

    $('#wax-btn').on('click', function() {
        waxWane.wax();
    });
    
    $('#wane-btn').on('click', function() {
        waxWane.wane();
    });

});

