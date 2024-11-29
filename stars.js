function stars() {
    const count = 800;
    const section = document.querySelector('.starlight');
    const sectionWidth = section.offsetWidth; // Get the width of the starlight section
    const sectionHeight = section.offsetHeight; // Get the height of the starlight section
    var i = 0;

    while (i < count) {
        const star = document.createElement('i');
        
        // Calculate random position within the section
        const x = Math.floor(Math.random() * sectionWidth);
        const y = Math.floor(Math.random() * sectionHeight);

        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';

        section.appendChild(star);
        i++;
    }
}

stars();
