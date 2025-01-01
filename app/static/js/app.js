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


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('#HeroText');

    if (textElement) {
        // Split the text into individual characters
        const text = new SplitType('#HeroText', { types: 'chars' });

        // Apply initial teal color to all characters
        text.chars.forEach((char) => {
            char.style.color = 'teal';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Create a timeline to control animation phases with a 1-second delay
                    const timeline = gsap.timeline({
                        defaults: { ease: 'power1.out' },
                        delay: .8, // Add half a second delay before animations begin
                    });

                    // Animate teal color duration
                    timeline.to(text.chars, {
                        color: 'white', // Transition from teal to white
                        duration: 1, // Teal duration
                        stagger: 0.05,
                    });

                    // Animate movement and opacity
                    timeline.fromTo(
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
                            duration: 0.1, // Main animation duration
                            stagger: 0.05,
                        },
                        '<' // Sync with the start of the color animation
                    );

                    // Initialize Tilt.js for each character after animation completes
                    timeline.call(() => {
                        text.chars.forEach((char) => {
                            VanillaTilt.init(char, {
                                max: 30, // Maximum tilt
                                speed: 400, // Speed of tilt effect
                            });
                        });
                    });

                    // Stop observing after animation runs once
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(textElement);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.sign-up-button2');
    
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
                }, 2000); // 2000 milliseconds = 2 seconds

                observer.unobserve(button); // Stop observing once the animation is triggered
            }
        });
    });

    observer.observe(button);
});


const moneyContainer = document.getElementById('money-container');

function createMoney() {
  const money = document.createElement('div');
  money.classList.add('money');
  money.textContent = '$';

  // Randomize the starting position and rotation
  const startX = Math.random() * window.innerWidth; // Random horizontal position
  const startY = Math.random() * window.innerHeight; // Random vertical position
  const startRotation = Math.random() * 360; // Random rotation

  money.style.left = `${startX}px`;
  money.style.top = `${startY}px`;
  money.style.transform = `rotate(${startRotation}deg)`;

  moneyContainer.appendChild(money);

  // Remove the money element after the animation ends
  money.addEventListener('animationend', () => {
    money.remove();
  });
}

function throwMoney() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createMoney, i * 300);
  }
}

// Set up Intersection Observer to detect when #money-container is visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start throwing money and repeat it forever
      throwMoney();
      setInterval(throwMoney, 5000); // Repeat every 3 seconds
      observer.unobserve(moneyContainer); // Stop observing
    }
  });
}, { threshold: 0.9 }); // Trigger when at least 90% of the element is visible

// Fade in the money-container after 2 seconds
setTimeout(() => {
  moneyContainer.style.opacity = '1';
}, 2000);

observer.observe(moneyContainer);


// loading screen
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    // Hide the loading screen after a delay
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transition = "opacity 0.5s ease";
  
      // Remove the loading screen from the DOM after fade-out
      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
  
        // Trigger animations
        document.body.style.overflow = "auto"; // Allow scrolling
      }, 500);
    }, 1000); // Adjust delay as needed
  });
  