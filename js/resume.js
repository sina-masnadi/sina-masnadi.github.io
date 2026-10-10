(function($) {
  "use strict"; // Start of use strict

  // Keep the header portrait prominent at the top, then compact it over 200px.
  var navigation = document.getElementById('sideNav');
  if (navigation && navigation.querySelector('.profile-avatar')) {
    var profileUpdatePending = false;
    var previousProfileSize;
    var updateProfileSize = function() {
      var progress = Math.min(1, Math.max(0, window.scrollY) / 200);
      var size = (88 - 40 * progress).toFixed(2) + 'px';
      if (size !== previousProfileSize) {
        navigation.style.setProperty('--profile-size', size);
        previousProfileSize = size;
      }
      profileUpdatePending = false;
    };
    window.addEventListener('scroll', function() {
      if (!profileUpdatePending) {
        profileUpdatePending = true;
        window.requestAnimationFrame(updateProfileSize);
      }
    }, { passive: true });
    window.addEventListener('pageshow', updateProfileSize);
    updateProfileSize();
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollMargin = parseFloat(window.getComputedStyle(target[0]).scrollMarginTop) || 0;
        $('html, body').animate({
          scrollTop: Math.max(0, target.offset().top - scrollMargin)
        }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    var menu = $('.navbar-collapse');
    // Bootstrap ignores hide() while the opening transition is running.
    // Queue the close so a quick tap on a menu link still works.
    if (menu.hasClass('collapsing') && $('.navbar-toggler').attr('aria-expanded') === 'true') {
      menu.one('shown.bs.collapse', function() {
        $(this).collapse('hide');
      });
    } else {
      menu.collapse('hide');
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
    offset: 120
  });

  // Load Vimeo only when the visitor activates the custom thumbnail.
  $('.video-thumbnail[data-video-id]').click(function() {
    var player = document.createElement('iframe');
    player.src = 'https://player.vimeo.com/video/' + encodeURIComponent(this.dataset.videoId) +
      '?autoplay=1&title=0&byline=0&portrait=0&dnt=1';
    player.title = 'Magic Leap 2 launch film';
    player.allow = 'autoplay; fullscreen; picture-in-picture';
    player.allowFullscreen = true;
    this.disabled = true;
    this.setAttribute('aria-hidden', 'true');
    this.parentNode.classList.add('is-playing');
    this.parentNode.appendChild(player);
    player.focus();
  });

})(jQuery); // End of use strict
