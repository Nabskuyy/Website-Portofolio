document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);
  
      if (section) {
        e.preventDefault();
  
        // Scroll ke bagian target
        section.scrollIntoView({ behavior: 'smooth' });
  
        // Hapus animasi sebelumnya
        section.classList.remove('animated');
  
        // Pakai timeout agar animasi bisa di-retrigger
        setTimeout(() => {
          section.classList.add('animated');
        }, 100);
      }
    });
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1 
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

  