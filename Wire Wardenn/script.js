const images = document.querySelectorAll('.carousel-image');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicatorsContainer = document.getElementById('indicators');
        const currentImageSpan = document.getElementById('currentImage');
        const totalImagesSpan = document.getElementById('totalImages');

        let currentIndex = 0;
        const totalImages = images.length;

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

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        let autoPlayInterval = setInterval(nextSlide, 3000);

        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 3000);
        });



        function downloadAPK() {
    const userConfirmed = confirm('Do you want to download Wire Warden APK?\n\nFile size: ~78.5MB\nVersion: 1.0');
    
    if (userConfirmed) {
        const link = document.createElement('a');
        link.href = 'Assets/downloads/Wire.Warden.apk';
        link.download = 'WireWarden.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.log('Download cancelled by user');
    }
}


function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            
            if (!isActive) {
                answer.classList.add('active');
                element.classList.add('active');
            }
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form submitted:', { name, email, message });
            
            alert('Thank you for your feedback! We\'ll get back to you soon.');
            
            event.target.reset();

        }
