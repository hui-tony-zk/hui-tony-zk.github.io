document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        // Check if the middle of the section is within the viewport
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            document.body.style.backgroundColor = section.dataset.bgColor;
            document.body.style.color = section.dataset.textColor;
        }
    });
});
