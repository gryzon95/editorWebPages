(function ( $ ) {
    $.fn.draggable = function ( options ) {
        var settings = $.extend({
            source              : null,
            id                  : null,
            target              : null,
            markup              : false,
            options             : null,
            dropableElements    : null,
            moveable            : true
        }, options);
        
        $(settings.source).appendTo(settings.target);
        
        $(settings.source).on('click', function(){
           console.log('click plugin'); 
        });
    };

}( jQuery ));