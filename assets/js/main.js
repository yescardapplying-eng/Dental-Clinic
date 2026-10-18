/**
 * DENTAL CLINIC - DADAR WEST, MUMBAI
 * Production JavaScript Engine
 * Features: Mobile Nav, Touch Anti-Zoom, Dual Cursor, Scroll Reveal,
 *           Testimonial Carousel, FAQ Accordion, WhatsApp Integration
 */

(function () {
  'use strict';

  // 1. Enable JS styling state
  document.documentElement.classList.add('js');

  // 2. Anti-Pinch-Zoom & Gesture Lock (Strict Mobile Viewport Stability)
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (eventType) {
    document.addEventListener(eventType, function (e) {
      e.preventDefault();
    }, { passive: false });
  });

  document.addEventListener('touchstart', function (e) {
    if (e.touches && e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', function (e) {
    if ((e.touches && e.touches.length > 1) || (e.scale && e.scale !== 1)) {
      e.preventDefault();
    }
  }, { passive: false });

  // Prevent double-tap zoom while preserving interactive clicks on links, buttons and form controls
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      if (!e.target.closest('a, button, input, select, textarea, label, [role="button"]')) {
        e.preventDefault();
      }
    }
    lastTouchEnd = now;
  }, { passive: false });

  // 3. Dynamic Year Fallback Update
  const yearEls = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear >= 2026 ? currentYear : 2026;
  });

  // 4. Sticky Header with Backdrop Blur on Scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 5. Mobile Navigation Toggle & Focus Trap (<1024px)
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    const toggleMenu = function (open) {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('is-open');
      mobileToggle.classList.toggle('is-active', isOpen);
      navMenu.classList.toggle('is-open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('menu-locked', isOpen);

      if (isOpen) {
        const firstFocusable = navMenu.querySelector('a, button');
        if (firstFocusable) firstFocusable.focus();
      }
    };

    mobileToggle.addEventListener('click', function () {
      toggleMenu();
    });

    // Close menu on Esc key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMenu(false);
        mobileToggle.focus();
      }
    });

    // Close mobile menu on clicking a regular navigation link
    const regularNavLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link');
    regularNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 1024) {
          toggleMenu(false);
        }
      });
    });

    // Mobile dropdown accordion toggle
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', function (e) {
        if (window.innerWidth < 1024) {
          e.preventDefault();
          const isExpanded = dropdownMenu.classList.contains('is-expanded');
          dropdownMenu.classList.toggle('is-expanded', !isExpanded);
          dropdownToggle.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        }
      });
    }
  }

  // 6. Custom Mouse Cursor Engine (Fine-pointer Desktop Only)
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (isFinePointer) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      if (!isVisible) {
        isVisible = true;
        document.body.classList.add('cursor-active');
        ringX = mouseX;
        ringY = mouseY;
      }
    });

    document.addEventListener('mouseleave', function () {
      isVisible = false;
      document.body.classList.remove('cursor-active');
    });

    // Smooth ring following with lerp
    const renderRing = function () {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(renderRing);
    };
    requestAnimationFrame(renderRing);

    // Interactive expansion on hoverable elements
    const interactiveSelectors = 'a, button, input[type="submit"], input[type="button"], .service-card, .trust-card, .step-card, .wa-float, .faq-trigger';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.add('is-hovered');
      }
    });

    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.remove('is-hovered');
      }
    });

    document.addEventListener('mousedown', function () {
      ring.classList.add('is-down');
    });

    document.addEventListener('mouseup', function () {
      ring.classList.remove('is-down');
    });
  }

  // 7. Scroll Reveal Observer with IntersectionObserver
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length > 0 && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(function (el, index) {
      // Add subtle stagger to sibling card elements
      if (el.hasAttribute('data-stagger')) {
        const delay = (index % 4) * 80;
        el.style.transitionDelay = `${delay}ms`;
      }
      revealObserver.observe(el);
    });
  } else {
    // Immediate display if reduced motion or no observer
    revealElements.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  // 8. Testimonials Carousel Engine
  const track = document.querySelector('.carousel-track');
  if (track) {
    const cards = track.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let autoplayTimer = null;

    // Create pagination dots
    if (dotsContainer && cards.length > 0) {
      dotsContainer.innerHTML = '';
      cards.forEach(function (_, i) {
        const dot = document.createElement('button');
        dot.className = `dot-btn ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
        dot.addEventListener('click', function () {
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
      });
    }

    const updateControls = function () {
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot-btn');
        dots.forEach(function (dot, i) {
          dot.classList.toggle('active', i === currentIndex);
        });
      }
    };

    const goToSlide = function (index) {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      currentIndex = index;

      const targetCard = cards[currentIndex];
      if (targetCard) {
        track.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: 'smooth'
        });
      }
      updateControls();
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToSlide(currentIndex + 1);
      });
    }

    // Detect user manual scroll/swipe on track
    let isScrolling = false;
    track.addEventListener('scroll', function () {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        const scrollLeft = track.scrollLeft;
        let closestIndex = 0;
        let minDiff = Infinity;

        cards.forEach(function (card, i) {
          const diff = Math.abs((card.offsetLeft - track.offsetLeft) - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        });

        if (currentIndex !== closestIndex) {
          currentIndex = closestIndex;
          updateControls();
        }
      }, 100);
    }, { passive: true });

    // Autoplay feature with pause on hover/focus
    const startAutoplay = function () {
      if (!prefersReducedMotion) {
        stopAutoplay();
        autoplayTimer = setInterval(function () {
          goToSlide(currentIndex + 1);
        }, 5500);
      }
    };

    const stopAutoplay = function () {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    const carouselWrap = track.closest('.testimonials-wrap') || track;
    carouselWrap.addEventListener('mouseenter', stopAutoplay);
    carouselWrap.addEventListener('mouseleave', startAutoplay);
    carouselWrap.addEventListener('focusin', stopAutoplay);
    carouselWrap.addEventListener('focusout', startAutoplay);

    startAutoplay();
  }

  // 9. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        const isOpen = item.classList.contains('is-open');

        // Close other FAQs in the same group for a clean accordion effect
        const parentList = item.closest('.faq-list');
        if (parentList) {
          parentList.querySelectorAll('.faq-item').forEach(function (otherItem) {
            if (otherItem !== item) {
              otherItem.classList.remove('is-open');
              const otherTrigger = otherItem.querySelector('.faq-trigger');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            }
          });
        }

        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    }
  });

  // 10. Appointment Form Client-Side Validation & WhatsApp Submission
  const appointmentForms = document.querySelectorAll('.appointment-form');
  appointmentForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = form.querySelector('[name="name"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const dateInput = form.querySelector('[name="date"]');
      const timeInput = form.querySelector('[name="time"]');
      const serviceInput = form.querySelector('[name="service"]');
      const messageInput = form.querySelector('[name="message"]');

      // Helper for field validation
      const validateField = function (input, condition, errorMsg) {
        if (!input) return true;
        const formGroup = input.closest('.form-group');
        let errorEl = formGroup ? formGroup.querySelector('.form-error') : null;

        if (!condition) {
          input.classList.add('has-error');
          if (errorEl) {
            errorEl.textContent = errorMsg;
            errorEl.style.display = 'block';
          }
          return false;
        } else {
          input.classList.remove('has-error');
          if (errorEl) {
            errorEl.style.display = 'none';
          }
          return true;
        }
      };

      // Validate Name (at least 2 chars)
      if (nameInput) {
        const validName = nameInput.value.trim().length >= 2;
        if (!validateField(nameInput, validName, 'Please enter your full name.')) {
          isValid = false;
        }
      }

      // Validate Phone (10-digit mobile number)
      if (phoneInput) {
        const phoneClean = phoneInput.value.replace(/[\s-]/g, '');
        const validPhone = /^[6-9]\d{9}$/.test(phoneClean) || /^\+91[6-9]\d{9}$/.test(phoneClean);
        if (!validateField(phoneInput, validPhone, 'Please enter a valid 10-digit mobile number.')) {
          isValid = false;
        }
      }

      // Validate Preferred Date
      if (dateInput) {
        const validDate = dateInput.value.trim() !== '';
        if (!validateField(dateInput, validDate, 'Please select a preferred date.')) {
          isValid = false;
        }
      }

      if (!isValid) {
        const firstError = form.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }

      // Format WhatsApp Pre-filled text
      const patientName = nameInput ? nameInput.value.trim() : 'Patient';
      const patientPhone = phoneInput ? phoneInput.value.trim() : '';
      const preferredDate = dateInput ? dateInput.value : 'Flexible';
      const preferredTime = timeInput ? timeInput.value : 'Anytime';
      const chosenService = serviceInput ? serviceInput.value : 'Dental Consultation';
      const userNotes = messageInput && messageInput.value.trim() ? `\nNotes: ${messageInput.value.trim()}` : '';

      const waText = `Hello Dental Clinic Dadar West, I would like to request an appointment:\n` +
        `• Name: ${patientName}\n` +
        `• Phone: ${patientPhone}\n` +
        `• Treatment: ${chosenService}\n` +
        `• Preferred Date: ${preferredDate}\n` +
        `• Preferred Time: ${preferredTime}` +
        userNotes;

      const waUrl = `https://wa.me/911234567890?text=${encodeURIComponent(waText)}`;

      // Show temporary confirmation and launch WhatsApp
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.innerHTML = 'Connecting to WhatsApp...';
        submitBtn.disabled = true;
      }

      setTimeout(function () {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        if (submitBtn) {
          submitBtn.innerHTML = 'Appointment Request Sent!';
          setTimeout(function () {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            form.reset();
          }, 3000);
        }
      }, 500);

      /* =========================================================================
         COMMENTED HOOK FOR BACKEND APPOINTMENT SUBMISSION (Netlify / Formspree):
         fetch("https://formspree.io/f/YOUR_FORM_ID", {
           method: "POST",
           body: new FormData(form),
           headers: { 'Accept': 'application/json' }
         }).then(response => { ... });
         ========================================================================= */
    });
  });

  // 11. Dynamic Page-specific WhatsApp Float Link
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) {
    const pageMessage = document.body.getAttribute('data-wa-message');
    if (pageMessage) {
      const targetUrl = `https://wa.me/911234567890?text=${encodeURIComponent(pageMessage)}`;
      waFloat.setAttribute('href', targetUrl);
    }
  }

})();
