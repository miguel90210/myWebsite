window.onload = function() {
    // Scroll to top when the 'Home' link is clicked
    document.querySelector('a[href="#top"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll to the 'About' section when the 'About' link is clicked
    document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
        event.preventDefault();
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to the 'Contact' section when the 'Contact' link is clicked
    document.querySelector('a[href="#portefolio"]').addEventListener('click', function(event) {
        event.preventDefault();
        const contactSection = document.querySelector('#portefolio');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
};

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });
