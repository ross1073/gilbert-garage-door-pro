document.addEventListener('DOMContentLoaded', function() {
  // 1. Mobile menu toggle
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-menu');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('nav-open');
      document.body.classList.toggle('nav-open');
    });
  }

  // 2. FAQ accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        var wasActive = item.classList.contains('active');
        faqItems.forEach(function(other) { other.classList.remove('active'); });
        if (!wasActive) { item.classList.add('active'); }
      });
    }
  });

  // 3. Nav dropdown toggle (mobile)
  var dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      var dropdown = toggle.closest('.nav-dropdown');
      dropdown.classList.toggle('open');
    });
  });

  // 4. Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});
