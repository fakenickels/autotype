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
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8T9ZSYVZWYRXN)
