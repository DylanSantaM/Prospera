document.addEventListener('DOMContentLoaded', function () {
    const elements1 = document.querySelectorAll('.animate-on-scroll');
    const elements2 = document.querySelectorAll('#animate-on-scroll2');
    const elements3 = document.querySelectorAll('#animate-on-scroll3');
    const elements4 = document.querySelectorAll('#animate-on-scroll4');
    const elements5 = document.querySelectorAll('#animate-on-scroll5');

    console.log('Elements with .animate-on-scroll:', elements1.length);
    console.log('Elements with #animate-on-scroll2:', elements2.length);
    console.log('Elements with .animate-on-scroll3:', elements3.length);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    elements1.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.3}s`;
        observer.observe(el);
    });

    elements2.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.4}s`;
        observer.observe(el);
    });

    elements3.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    elements4.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    elements5.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.6}s`;
        observer.observe(el);
    });

    // Initialize Tilt.js
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 100,
        speed: 1000,
        glare: true,
        "max-glare": 3
    });

    // Scroll prompt disappearing logic
    const scrollPrompt = document.getElementById('scrollPrompt');
    if (scrollPrompt) {
        document.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) { // Adjust scroll threshold as needed
                scrollPrompt.classList.add('hidden'); // Hide when scrolled beyond 100px
            } else {
                scrollPrompt.classList.remove('hidden'); // Show when scrolled back up
            }
        });
    } else {
        console.error('Scroll prompt element not found.');
    }
});
