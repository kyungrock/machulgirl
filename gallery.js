// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Image lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            const overlayTitle = this.querySelector('.gallery-overlay h3').textContent;
            const overlayDesc = this.querySelector('.gallery-overlay p').textContent;
            
            openLightbox(imgSrc, imgAlt, overlayTitle, overlayDesc);
        });
    });

    // Create lightbox
    function openLightbox(src, alt, title, description) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="${alt}">
                <div class="lightbox-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
                <div class="lightbox-nav">
                    <button class="lightbox-prev">‹</button>
                    <button class="lightbox-next">›</button>
                </div>
            </div>
        `;

        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        // Add lightbox content styles
        const lightboxContent = lightbox.querySelector('.lightbox-content');
        lightboxContent.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

        // Add image styles
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            width: 100%;
            height: auto;
            max-height: 70vh;
            object-fit: cover;
        `;

        // Add info styles
        const lightboxInfo = lightbox.querySelector('.lightbox-info');
        lightboxInfo.style.cssText = `
            padding: 20px;
            text-align: center;
        `;

        // Add close button styles
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            color: white;
            cursor: pointer;
            z-index: 10001;
            background: rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Add navigation styles
        const lightboxNav = lightbox.querySelector('.lightbox-nav');
        lightboxNav.style.cssText = `
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            transform: translateY(-50%);
        `;

        const navButtons = lightbox.querySelectorAll('.lightbox-nav button');
        navButtons.forEach(btn => {
            btn.style.cssText = `
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        });

        document.body.appendChild(lightbox);

        // Animate lightbox
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightboxContent.style.transform = 'scale(1)';
        }, 10);

        // Close lightbox functionality
        function closeLightbox() {
            lightbox.style.opacity = '0';
            lightboxContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        }

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Navigation functionality (placeholder for now)
        navButtons[0].addEventListener('click', function() {
            console.log('Previous image');
        });
        navButtons[1].addEventListener('click', function() {
            console.log('Next image');
        });
    }

    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more content
            this.textContent = '로딩 중...';
            this.disabled = true;

            setTimeout(() => {
                // Add more gallery items (in a real app, this would load from server)
                const galleryGrid = document.querySelector('.gallery-grid');
                const newItems = [
                    {
                        category: 'facility',
                        image: 'https://via.placeholder.com/400x300?text=추가+시설1',
                        title: '추가 시설 1',
                        description: '새로운 프리미엄 시설'
                    },
                    {
                        category: 'service',
                        image: 'https://via.placeholder.com/400x300?text=추가+서비스1',
                        title: '추가 서비스 1',
                        description: '새로운 마사지 서비스'
                    }
                ];

                newItems.forEach((item, index) => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.setAttribute('data-category', item.category);
                    galleryItem.innerHTML = `
                        <div class="gallery-image">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="gallery-overlay">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    `;
                    galleryItem.style.opacity = '0';
                    galleryItem.style.transform = 'translateY(30px)';
                    galleryItem.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    
                    galleryGrid.appendChild(galleryItem);
                    
                    // Animate new item
                    setTimeout(() => {
                        galleryItem.style.opacity = '1';
                        galleryItem.style.transform = 'translateY(0)';
                    }, index * 100);
                });

                this.textContent = '더 보기';
                this.disabled = false;
            }, 1000);
        });
    }

    // Video thumbnail click functionality
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoTitle = this.parentElement.querySelector('h3').textContent;
            alert(`"${videoTitle}" 영상을 재생합니다. (실제 구현에서는 비디오 플레이어가 열립니다.)`);
        });
    });

    // Lazy loading for gallery images
    const galleryImageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    galleryImageObserver.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('.gallery-image img[data-src]');
    lazyImages.forEach(img => {
        galleryImageObserver.observe(img);
    });

    // Gallery search functionality (if needed)
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '갤러리 검색...';
        searchInput.className = 'gallery-search';
        searchInput.style.cssText = `
            width: 100%;
            max-width: 400px;
            padding: 10px 15px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 16px;
            margin-bottom: 20px;
        `;

        const filterSection = document.querySelector('.gallery-filter .container');
        filterSection.insertBefore(searchInput, filterSection.firstChild);

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            galleryItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Uncomment to enable search functionality
    // addSearchFunctionality();
});
