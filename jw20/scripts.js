const colorPalette = {
    "colors": [
        {"bg": "#FF6B6B", "text": "#FFFFFF"},
        {"bg": "#4ECDC4", "text": "#000000"},
        {"bg": "#F7FFF7", "text": "#000000"},
        {"bg": "#FFD166", "text": "#000000"},
        {"bg": "#26547C", "text": "#FFFFFF"},
        {"bg": "#EF476F", "text": "#FFFFFF"},
        {"bg": "#06D6A0", "text": "#000000"},
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
