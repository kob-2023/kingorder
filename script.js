document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-list img');

  // Intersection Observer 설정
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = 1; 
        // 한 번 페이드 인된 뒤에는 다시 관찰하지 않도록
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnScroll, options);

  images.forEach(img => observer.observe(img));
});
