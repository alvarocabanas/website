/*( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );
*/

$(document).ready(function() {

    var id;

    doneResizing();
    $(window).resize(function(){
        clearTimeout(id);
        id = setTimeout(doneResizing, 250);
    });

    function doneResizing(){
        $('#server').animate(
            { left: $("#about").offset().left }, {
                duration: 'slow',
                easing: 'easeOutBack'
        });
        $('#front').animate(
            { right: $("#about").offset().left}, {
                duration: 'slow',
                easing: 'easeOutBack'
        });
    }
});