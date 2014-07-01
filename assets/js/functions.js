// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


(function($){

	$(window).load(function (){
		
		var nav = '<ol>';

		$.each($("article[id], section[id]"), function() {
			
			thisID = $(this).attr('id');
			thisTitle = $(this).children('h1, h2').html();
			
			if ($(this).is('section')) {
				
				navElement = '<li class="sub" data-nav-link="link-' + thisID + '">';
				
			} else {
				
				navElement = '<li>';
				
			};
		
			nav += navElement + '<a href="#' + thisID + '">' + thisTitle + '</a></li>';
		});

		nav += '</ol>';
	
		$('nav.prime').append(nav);
		
		$('nav').on('click', 'a', function() {
		
			topOffset = 16; // 1em
		
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - topOffset
					}, 500);
				}
			}
		});
		
		$.wait(function() { $('body').addClass('activated') }, .5);

		
	});
	
	$(document).bind('scroll',function(e){
	
		$('section').each(function(){
		
			if (
				$(this).offset().top < window.pageYOffset + 17
				//begins before top
				&& $(this).offset().top + $(this).height() > window.pageYOffset + 17
				//but ends in visible area
				//+ 10 allows you to change hash before it hits the top border
			) {
				if (window.location.hash != '#' + $(this).attr('id')) {
				
					history.pushState(null, null, '#' + $(this).attr('id'));
					$('nav.prime li').removeClass('active');
					$('nav.prime li[data-nav-link="link-' + $(this).attr('id') + '"]').addClass('active');
				
				}
			}
			
		});
	
	});

	$(document).ready(function (){
		
		$('nav.prime li').on('click', function() {
			
			$('nav.prime li').removeClass('active');
			$(this).addClass('active');	
			
		});
		
		$('div.sample').each(function() {
			
			sample = $(this).html();
			
			sample = sample.replace(/ data-demoable=""/g, '');
			
			sample = sample.replace(/ data-standalone=""/g, '');
			
			sample = sample.replace(/example-box /g, '');
			
			sample = sample.replace(/&nbsp/g, '&amp;nbsp');
			
			sample = sample.replace(/\t/g, '');
			
			sample = sample.replace(/</g, '&lt;');
			
			sample = sample.replace(/&lt;!--/g, '<span class="comment">&lt;!--');
			
			sample = sample.replace(/-->/g, '--></span>');
			
			$(this).after('<pre class="sample">' + sample + '</pre>');
			
		});
	
	});
	
	$.wait = function( callback, seconds){
	   return window.setTimeout( callback, seconds * 1000 );
	}

})(window.jQuery);