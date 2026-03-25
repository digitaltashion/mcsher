
// Wait for document ready
$(document).ready(function () {

    // --- AOS Initialization ---
    AOS.init({
        once: true,
        duration: 1000,
        offset: 50,
        easing: 'ease-out-cubic'
    });

    // --- Navbar Scroll Effect ---
    // Fixed height logic for initial state
    const navbar = $('#navbar');
    if ($(window).scrollTop() <= 50) {
        navbar.addClass('py-6');
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            navbar.addClass('bg-dark/90 backdrop-blur-md shadow-lg py-3').removeClass('py-6');
        } else {
            navbar.removeClass('bg-dark/90 backdrop-blur-md shadow-lg py-3').addClass('py-6');
        }
    });


    // --- Mobile Menu ---
    // Toggle menu
    $('#mobile-menu-btn').click(function (e) {
        e.stopPropagation();
        $('#mobile-menu').toggleClass('translate-x-full');

        // Toggle icon between bars and times
        const icon = $(this).find('i');
        if ($('#mobile-menu').hasClass('translate-x-full')) {
            $('body').removeClass('overflow-hidden');
            icon.removeClass('fa-xmark').addClass('fa-bars');
        } else {
            $('body').addClass('overflow-hidden');
            icon.removeClass('fa-bars').addClass('fa-xmark');
        }
    });

    // Close when clicking links or outside
    $('.mobile-link, #mobile-menu').click(function () {
        $('#mobile-menu').addClass('translate-x-full');
        $('body').removeClass('overflow-hidden');
        $('#mobile-menu-btn i').removeClass('fa-xmark').addClass('fa-bars');
    });

    // --- Scroll To Top Button ---
    const scrollTopBtn = $('#scrollToTopBtn');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            scrollTopBtn.removeClass('opacity-0 invisible translate-y-10');
        } else {
            scrollTopBtn.addClass('opacity-0 invisible translate-y-10');
        }
    });

    scrollTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });


    // --- GSAP Animations (Advanced) ---
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Effect for Hero Background
    gsap.to(".parallax-bg", {
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        scale: 1.1,
        ease: "none"
    });

    // --- Social Sharing ---
    window.shareDeal = function (platform, title, text) {
        const url = encodeURIComponent(window.location.href);
        const textEncoded = encodeURIComponent(text + " - " + title);
        let shareUrl = "";

        if (platform === 'whatsapp') {
            shareUrl = `https://wa.me/?text=${textEncoded} ${url}`;
        } else if (platform === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${textEncoded}`;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

});
