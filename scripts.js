

// Show the button when scrolling down 100px
window.onscroll = function() {
    let arrow = document.querySelector('.top-arrow');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
};

// Arrow up: Smooth scroll to the hero section
document.querySelector('.top-arrow').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({ 
        behavior: 'smooth' 
    });
});






// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

















// Stagger title About Georgina mart
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.staggered-title');

    // Break the text into individual letters wrapped in span tags
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Intersection Observer to trigger animation when the heading is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime.timeline({loop: false})
                .add({
                    targets: '.staggered-title .letter',
                    translateY: [100, 0],    // Animate from bottom to top
                    opacity: [0, 1],         // Animate opacity from 0 to 1
                    easing: "easeOutExpo",
                    duration: 1000,          // Duration of the animation
                    delay: (el, i) => 50 * i // Staggered delay of 50ms per letter
                });
                observer.unobserve(title); // Stop observing after animation
            }
        });
    });

    observer.observe(title); // Start observing the title element
});







// Project title animation
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.projects');
    
    textElements.forEach(textElement => {
      const text = textElement.innerText;
      textElement.innerHTML = text.split("").map(char => {
        return char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`;
      }).join("");
    });
  });
  
  // Trigger animation when the text comes into view
  function animateOnView() {
    const textElements = document.querySelectorAll('.projects');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.projects span',
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(50), // delays each character by 50ms
          });
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    });
  
    textElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  animateOnView();

  









  // Community Involvement character animation
// Split the text into individual characters for .community-animation
document.addEventListener("DOMContentLoaded", function () {
    const communityElement = document.querySelector('.community-animation');
    const text = communityElement.innerText;
    communityElement.innerHTML = text.split("").map(char => {
      return char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`;
    }).join("");
  });
  
  // Trigger animation for the .community-animation when it comes into view
  function animateCommunityOnView() {
    const communityElement = document.querySelector('.community-animation');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.community-animation span',
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(50), // delays each character by 50ms
          });
          observer.unobserve(communityElement); // Stop observing after animation
        }
      });
    });
  
    observer.observe(communityElement);
  }
  
  animateCommunityOnView();
  
  
  
  
  











document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.staggered-titlee');

    // Break the text into individual letters wrapped in span tags
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Intersection Observer to trigger animation when the heading is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime.timeline({loop: false})
                .add({
                    targets: '.staggered-titlee .letter',
                    translateY: [100, 0],    // Animate from bottom to top
                    opacity: [0, 1],         // Animate opacity from 0 to 1
                    easing: "easeOutExpo",
                    duration: 1000,          // Duration of the animation
                    delay: (el, i) => 50 * i // Staggered delay of 50ms per letter
                });
                observer.unobserve(title); // Stop observing after animation
            }
        });
    });

    observer.observe(title); // Start observing the title element
});





function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('visible'); // Toggle visibility class
}











function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle('show');
}








function playVideo() {
  const video = document.getElementById('navon-video');
  const playButton = document.querySelector('.play-button');
  video.play();
  playButton.style.display = 'none';
}










