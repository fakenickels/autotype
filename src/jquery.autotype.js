;(function ( $, window, document, undefined ) {
	var autotype = {
		c: {
			// Time to type a letter
			delay: 30
		},

		/*
		* autotype#type
		* el -> need to be a jQuery element
		* string text	
		* object c ( configs )
		*/
		type: function( text, el, c ){
			var i = 0,
				lng = text.length,
				output = '',
				inputMethod = c.form ? 'val' : 'text'; 

			var	id = setInterval(function(){
				if( i === lng ){	
					clearInterval( id );

					if( c.callback ){
						c.callback();
					}
					return false;
				}

				output += text[i];						
				el[ inputMethod ]( output + (  i + 1 == lng ? '' : '|' ) );		
				
				i++;
			}, c.delay);
		}
	}

	$.fn.autotype = function( text, configs ){
		var configs = $.extend( configs, autotype.c );

		if( !$.isArray( text ) ){
			autotype.type( text, $(this), configs );
		}
	}
})( jQuery, window, document );
