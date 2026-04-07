'use strict';
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

  // 3. Sticky header shadow on scroll
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

  // 4. Nav dropdown toggle (mobile)
  var dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      var dropdown = toggle.closest('.nav-dropdown');
      dropdown.classList.toggle('open');
    });
  });

  // 5. Form validation + webhook submission
  var WH = 'https://services.leadconnectorhq.com/hooks/1bJ4fVcIT5CSSGfXixmS/webhook-trigger/0gUALcjs3Xy836dmARuD';
  var PR = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

  // Parse URL params once on load
  var UP = new URLSearchParams(window.location.search);
  function gp(k) { return UP.get(k) || ''; }

  // Store landing page + referrer on first hit
  if (!sessionStorage.getItem('landing_page')) {
    sessionStorage.setItem('landing_page', window.location.href);
    sessionStorage.setItem('referrer', document.referrer);
  }

  // Populate hidden timestamp fields on load
  document.querySelectorAll('input[name="timestamp"]').forEach(function(f) {
    f.value = new Date().toISOString();
  });

  document.querySelectorAll('.contact-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var nf = form.querySelector('[name="name"]');
      var pf = form.querySelector('[name="phone"]');
      var ef = form.querySelector('[name="email"]');
      var sf = form.querySelector('[name="service"]');
      var isf = form.querySelector('[name="issue"]');
      var opt = form.querySelector('[name="optin"]');
      var ok = true;

      // Clear previous errors
      form.querySelectorAll('.field--error').forEach(function(f) { f.classList.remove('field--error'); });

      // Validate
      if (nf && !nf.value.trim()) { nf.classList.add('field--error'); ok = false; }
      if (pf) {
        if (!pf.value.trim()) { pf.classList.add('field--error'); ok = false; }
        else if (!PR.test(pf.value.trim())) { pf.classList.add('field--error'); ok = false; }
      }
      if (!ok) return;

      // Update timestamp
      var ts = form.querySelector('[name="timestamp"]');
      if (ts) ts.value = new Date().toISOString();

      var ps = form.querySelector('[name="page_source"]');
      var fi = form.querySelector('[name="form_id"]');

      var pl = {
        name: nf ? nf.value.trim() : '',
        phone: pf ? pf.value.trim() : '',
        email: ef ? ef.value.trim() : '',
        service: sf ? sf.value : '',
        issue: isf ? isf.value.trim() : '',
        optin: opt ? opt.checked : false,
        page: window.location.pathname,
        page_source: ps ? ps.value : '',
        form_id: fi ? fi.value : '',
        site: 'gilbertgaragedoorpro.com',
        timestamp: ts ? ts.value : new Date().toISOString(),
        // UTM parameters
        utm_source: gp('utm_source'),
        utm_medium: gp('utm_medium'),
        utm_campaign: gp('utm_campaign'),
        utm_term: gp('utm_term'),
        utm_content: gp('utm_content'),
        // Google Ads click IDs
        gclid: gp('gclid'),
        gbraid: gp('gbraid'),
        wbraid: gp('wbraid'),
        gad_source: gp('gad_source'),
        // Microsoft/Facebook ad IDs
        msclkid: gp('msclkid'),
        fbclid: gp('fbclid'),
        // Session context
        referrer: sessionStorage.getItem('referrer') || '',
        landing_page: sessionStorage.getItem('landing_page') || '',
        page_url: window.location.href,
        user_agent: navigator.userAgent
      };

      // Submit to webhook
      fetch(WH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pl)
      })
        .then(function(r) {
          if (!r.ok) throw 0;
          // Redirect to thank you page
          window.location.href = 'thank-you.html';
        })
        .catch(function() {
          var sc = form.querySelector('.form__success');
          if (sc) {
            sc.textContent = 'Something went wrong. Please call us at (623) 624-9207.';
            sc.style.display = 'block';
          }
        });

      // Push to dataLayer for analytics
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        event_category: 'Lead',
        page_source: pl.page_source,
        page: pl.page,
        utm_source: pl.utm_source,
        utm_medium: pl.utm_medium,
        utm_campaign: pl.utm_campaign,
        utm_term: pl.utm_term,
        utm_content: pl.utm_content,
        gclid: pl.gclid
      });
    });
  });

  // 6. Click-to-call tracking
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href^="tel:"]');
    if (link) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'phone_click',
        event_category: 'Lead',
        page: window.location.pathname,
        data_source: link.getAttribute('data-source') || ''
      });
    }
  });

});
