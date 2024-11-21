document.addEventListener('DOMContentLoaded', function () {
    const elements1 = document.querySelectorAll('.animate-on-scroll');
    const elements2 = document.querySelectorAll('#animate-on-scroll2');
    const elements3 = document.querySelectorAll('#animate-on-scroll3');
    const elements4 = document.querySelectorAll('#animate-on-scroll4');
    const elements5 = document.querySelectorAll('#animate-on-scroll5');
    const elements6 = document.querySelectorAll('#animate-on-scroll6');
    const elements7 = document.querySelectorAll('#animate-on-scroll7');
    const elements8 = document.querySelectorAll('#animate-on-scroll8');
    
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
        el.style.transitionDelay = `${index * 0.4}s`;
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

    elements6.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    elements7.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.7}s`;
        observer.observe(el);
    });

    elements8.forEach((el, index) => {
        el.style.transitionDelay = `${index * 3}s`;
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


// Select the arrow element
const arrow = document.getElementById('scrollArrow');

// Set a delay before the arrow appears (1.5 seconds)
window.addEventListener('load', () => {
  setTimeout(() => {
    arrow.style.opacity = '1'; // Make the arrow visible
  }, 1500); // 1.5 seconds delay
});

// Add a scroll event listener
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Hide the arrow after scrolling 100px
  if (scrollY > 100) {
    arrow.style.opacity = '0';
  } else {
    arrow.style.opacity = '1';
  }
});


// Checkbox //

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cbx").checked = false;
});


// Charts //

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('#HeroText');
    

    if (textElement) {
        const text = new SplitType('#HeroText', { types: 'chars' });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        text.chars,
                        {
                            opacity: 0,
                            y: 50,
                            x: 50,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            x: 0,
                            stagger: 0.05,
                            duration: 0.1,
                            ease: 'power2.out',
                        }
                    );
                    // Stop observing after animation has run once
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(textElement);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.sign-up-button');
    
    if (!button) return; // Safeguard if the element is not found

    // Set initial styles for animation
    button.style.opacity = '0';
    button.style.transform = 'scale(0.1)';
    button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Delay the animation by 2 seconds
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'scale(1)';
                }, 1200); // 2000 milliseconds = 2 seconds

                observer.unobserve(button); // Stop observing once the animation is triggered
            }
        });
    });

    observer.observe(button);
});

