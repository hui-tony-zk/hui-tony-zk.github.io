const colorPalette = {
    "colors": [
        {"bg": "#FF6B6B", "text": "#FFFFFF"},
        {"bg": "#4ECDC4", "text": "#000000"},
        {"bg": "#F7FFF7", "text": "#000000"},
        {"bg": "#06D6A0", "text": "#000000"},
        {"bg": "#FFD166", "text": "#000000"},
        {"bg": "#26547C", "text": "#FFFFFF"},
        {"bg": "#EF476F", "text": "#FFFFFF"},
        {"bg": "#2B2D42", "text": "#FFFFFF"},
        {"bg": "#8D99AE", "text": "#000000"},
        {"bg": "#EDF2F4", "text": "#000000"},
        {"bg": "#FF9F1C", "text": "#000000"},
        {"bg": "#5E0B15", "text": "#FFFFFF"},
        {"bg": "#D90429", "text": "#FFFFFF"},
        {"bg": "#3A0CA3", "text": "#FFFFFF"},
        {"bg": "#F72585", "text": "#000000"}
    ]
}

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

document.addEventListener('scroll', function() {
    const headers = document.querySelectorAll('.section h2');
    
    headers.forEach(function(header) {
        const section = header.parentElement;
        const rect = section.getBoundingClientRect();
        
        // Set the background color of the header based on the section's data attribute
        header.style.backgroundColor = section.dataset.bgColor;

        if (rect.top <= 0 && rect.bottom >= header.offsetHeight) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0'; /* Ensure it's aligned to the left */
        } else if (rect.top > 0) {
            header.style.position = 'static';
        } else if (rect.bottom < header.offsetHeight) {
            header.style.position = 'absolute';
            header.style.left = '0'; /* Ensure it's aligned to the left */
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('toc');
    const tocToggle = document.getElementById('tocToggle');
    const headers = document.querySelectorAll('.section h2');
    
    headers.forEach(function(header) {
        const link = document.createElement('a');
        link.href = `#${header.innerText}`;
        link.innerText = header.innerText;
        link.addEventListener('click', function(event) {
            event.preventDefault();
            header.scrollIntoView({ behavior: 'smooth' });
        });
        toc.appendChild(link);
    });

    // Toggle the TOC visibility on button click
    tocToggle.addEventListener('click', function() {
        toc.classList.toggle('hidden');
    });
});
