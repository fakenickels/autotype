Autotype
========

Simulates a type of user in any DOM element


# Example
```html
		<script>
			$('#test').click(function(){
				$('p, h1').autotype('Typing in multiples elements', { delay: 30, callback: function(){
				 $('input').autotype('Typing in an input', { form: true });
				}});			
			});
		</script>
```

# Buy me a soda ;)

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="8T9ZSYVZWYRXN">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1">
</form>
