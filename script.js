const slides = [
    {
      image: "assets/image1.jpg",
      title: "Community Resilience in Action",
      subtitle: "Empowering locals in disaster response"
    },
    {
      image: "assets/image2.jpg",
      title: "Relief Distribution Drives",
      subtitle: "Volunteers reaching the most affected"
    },
    {
      image: "assets/image3.jpg",
      title: "Rebuilding Lives",
      subtitle: "A future rebuilt by compassion"
    },
    {
      image: "assets/image4.jpg",
      title: "Preparedness Training",
      subtitle: "Equipping people for safer tomorrows"
    }
];

let currentIndex = 0;

function updateHeroContent() {
    const image = document.getElementById("hero-image");
    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");

    const currentSlide = slides[currentIndex];

    // Fade out transition
    image.style.opacity = 0;

    setTimeout(() => {
      image.src = currentSlide.image;
      title.textContent = currentSlide.title;
      subtitle.textContent = currentSlide.subtitle;

      // Fade in
      image.style.opacity = 1;
      
      // Update dot active state
      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }, 500);

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(updateHeroContent, 4000); // Change every 4 seconds
window.onload = updateHeroContent;
