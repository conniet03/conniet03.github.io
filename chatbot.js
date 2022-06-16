jQuery(document).ready(function($) 
{
	jQuery(document).on('click', '.iconInner', function(e) 
	{
		jQuery(this).parents('.botIcon').addClass('showBotSubject');
		$("[name='msg']").focus();
	});

	jQuery(document).on('click', '.closeBtn, .chat_close_icon', function(e) 
	{
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
	});

	jQuery(document).on('submit', '#botSubject', function(e) 
	{
		e.preventDefault();

		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').addClass('showMessenger');
	});
	
	/* Chatboat Code */
	$(document).on("submit", "#messenger", function(e) 
	{
		e.preventDefault();

		var val = $("[name=msg]").val().toLowerCase();
		var mainval = $("[name=msg]").val();
		uname = '';
		nowtime = new Date();
		nowhoue = nowtime.getHours();

		function userMsg(msg) 
		{
			$('.Messages_list').append('<div class="msg user"><span class="avtr"><figure style="background-image: url(image/user.jpg)"></figure></span><span class="responsText">' + mainval + '</span></div>');
		};

		function appendMsg(msg) 
		{
			$('.Messages_list').append('<div class="msg"><span class="avtr"><figure style="background-image: url(image/logo3.png)"></figure></span><span class="responsText">' + msg + '</span></div>');
			$("[name='msg']").val("");
		};


		userMsg(mainval);
		if( val.indexOf("hello") > -1 || val.indexOf("hi") > -1 || val.indexOf("good morning") > -1 || val.indexOf("good afternoon") > -1 || val.indexOf("good evening") > -1 || val.indexOf("good night") > -1 ) 
		{
			if(nowhoue >= 12 && nowhoue <= 16) 
			{
				appendMsg('Good Afternoon, <br>Welcome to <br>Oriental Melaka Straits <br>Medical Centre!');
			} 
			else if(nowhoue >= 10 && nowhoue <= 12) 
			{
				appendMsg('Welcome to <br>Oriental Melaka Straits <br>Medical Centre!');
			} 
			else if(nowhoue >= 0 && nowhoue <= 10) 
			{
				appendMsg('Good Morning, <br>Welcome to <br>Oriental Melaka Straits <br>Medical Centre!');
			} 
			else 
			{
				appendMsg('Good Evening, <br>Welcome to <br>Oriental Melaka Straits <br>Medical Centre!');
			}

			appendMsg("What's your name?");

		} 
		else if(val.indexOf("i have problem with" )>-1 || val.indexOf("problem with") > -1 || val.indexOf("ask for")>-1) 
		{ 
			
			if (val.indexOf("Appointment") > -1 || val.indexOf("appointment") > -1) 
			{

				appendMsg('<a href="hhttp<a/>');
				appendMsg("Is it helpful? (yes/no)");

			}  
			else if (val.indexOf("Doctor") > -1 || val.indexOf("doctor") > -1) 
			{
				appendMsg('<a href="http://www.w3schools.com/js/js_htmldom_html.asp">do stuff</a>');
				appendMsg("Is it helpful? (yes/no)");
				
			} 
			else if(val.indexOf("Location")>-1 || val.indexOf("location")>-1)
			{
				appendMsg('<a href="https://www.google.com/maps/dir/2.2085632,102.2164992/oriental+location/@2.2090037,102.2123905,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31d1f1aa48d00799:0x458a02500a809069!2m2!1d102.2139854!2d2.2079812">Click Here</a>');
				appendMsg("Is it helpful? (yes/no)");
			}
			else if (val.indexOf("insurance")>-1 || val.indexOf("Insurance")>-1)
			{
				appendMsg("Depends on your Insurance company procress");
				appendMsg("Is it helpful? (yes/no)");
			}
			else if (val.indexOf("fee")>-1 || val.indexOf("Fee")>-1)
			{
				appendMsg("Depends on your Insurance company procress");
				appendMsg("Is it helpful? (yes/no)");
			}
			else 
			{
				appendMsg("Sorry, I'm not able to help. <br>Please call 06-315 8888.");
			}
		} 
		else if( val.indexOf("yes") > -1) 
		{

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("It's my pleasure to help. <br>Thank you.");
			saybye();
		} 
		else if( val.indexOf("no") > -1) 
		{

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("I'm sorry for any inconvenience caused. <br>Please call 06-315 8888 <br>for assistant.");
			saybye();
		} 
		else if( val.indexOf("my name is ") > -1 || val.indexOf("i am ") > -1 || val.indexOf("i'm ") > -1  || val.indexOf(uname) > -1) 
		{
			/*|| mainval != ""*/
			// var name = "";
			if(val.indexOf("my name is") > -1) 
			{
				uname = val.replace("my name is", "");
			}

			else if(val.indexOf("i am") > -1) 
			{
				uname = val.replace("i am", "");
			}

			else if(val.indexOf("i'm") > -1) 
			{
				uname = val.replace("i'm", "");
			}

			else 
			{
				uname = mainval;
			}

			// appendMsg("hi " + name + ", how can i help you?");
			appendMsg("Hi " + uname + ", how can i help you? <br><br>Describe your problem.<br><br>Example: I have problem with...");
		} 
		else 
		{
			appendMsg("Sorry, I counldn't get your point. <br>Please try again.");
		}

		function saybye() 
		{
			if (nowhoue <= 10) 
			{
				appendMsg("Have nice day! :)");
			} 
			else if (nowhoue >= 11 || nowhoue <= 20) 
			{
				appendMsg("Good bye!");
			} 
			else 
			{
				appendMsg("Good night!");
			}
		}

		var lastMsg = $('.Messages_list').find('.msg').last().offset().top;
		$('.Messages').animate({scrollTop: lastMsg}, 'slow');
	});
	/* Chatboat Code */
})