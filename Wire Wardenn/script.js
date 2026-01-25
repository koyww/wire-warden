const images = document.querySelectorAll('.carousel-image');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicatorsContainer = document.getElementById('indicators');
        const currentImageSpan = document.getElementById('currentImage');
        const totalImagesSpan = document.getElementById('totalImages');

        let currentIndex = 0;
        const totalImages = images.length;

        // Create indicators
        for (let i = 0; i < totalImages; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }

        const indicators = document.querySelectorAll('.indicator');

        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.remove('active');
                indicators[index].classList.remove('active');
            });

            images[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
            currentImageSpan.textContent = currentIndex + 1;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Auto-play (slides every 3 seconds)
        let autoPlayInterval = setInterval(nextSlide, 3000);

        // Pause auto-play on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 3000);
        });