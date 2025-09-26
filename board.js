// Board functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const boardSections = document.querySelectorAll('.board-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all sections
            boardSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show target section
            const targetSection = document.getElementById(targetTab);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherToggle = otherItem.querySelector('.faq-toggle');
                otherAnswer.style.display = 'none';
                otherToggle.textContent = '+';
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isOpen) {
                answer.style.display = 'block';
                toggle.textContent = '-';
                item.classList.add('active');
            }
        });
    });

    // Contact form functionality
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const inquiryType = formData.get('inquiry-type');
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            const privacy = formData.get('privacy');

            // Basic validation
            if (!inquiryType || !name || !phone || !message || !privacy) {
                alert('모든 필수 항목을 입력해주세요.');
                return;
            }

            // Phone number validation
            const phoneRegex = /^[0-9-+\s()]+$/;
            if (!phoneRegex.test(phone)) {
                alert('올바른 전화번호를 입력해주세요.');
                return;
            }

            // Email validation (if provided)
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('올바른 이메일 주소를 입력해주세요.');
                    return;
                }
            }

            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.textContent = '전송 중...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');
                this.reset();
                submitBtn.textContent = '문의하기';
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Write review functionality
    const writeReviewBtn = document.querySelector('.write-review-btn');
    if (writeReviewBtn) {
        writeReviewBtn.addEventListener('click', function() {
            openReviewModal();
        });
    }

    // Review modal functionality
    function openReviewModal() {
        const modal = document.createElement('div');
        modal.className = 'review-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2>후기 작성하기</h2>
                <form class="review-form">
                    <div class="form-group">
                        <label for="reviewer-name">이름</label>
                        <input type="text" id="reviewer-name" name="reviewer-name" required>
                    </div>
                    <div class="form-group">
                        <label for="review-service">이용 서비스</label>
                        <select id="review-service" name="review-service" required>
                            <option value="">선택해주세요</option>
                            <option value="premium">마출 프리미엄</option>
                            <option value="classic">마출 클래식</option>
                            <option value="aroma">마출 아로마</option>
                            <option value="sports">마출 스포츠</option>
                            <option value="relax">마출 릴렉스</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>평점</label>
                        <div class="rating-input">
                            <input type="radio" id="star5" name="rating" value="5">
                            <label for="star5">★</label>
                            <input type="radio" id="star4" name="rating" value="4">
                            <label for="star4">★</label>
                            <input type="radio" id="star3" name="rating" value="3">
                            <label for="star3">★</label>
                            <input type="radio" id="star2" name="rating" value="2">
                            <label for="star2">★</label>
                            <input type="radio" id="star1" name="rating" value="1">
                            <label for="star1">★</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="review-title">제목</label>
                        <input type="text" id="review-title" name="review-title" required>
                    </div>
                    <div class="form-group">
                        <label for="review-content">후기 내용</label>
                        <textarea id="review-content" name="review-content" rows="4" required placeholder="서비스 이용 후기를 자세히 작성해주세요."></textarea>
                    </div>
                    <button type="submit" class="submit-review-btn">후기 등록</button>
                </form>
            </div>
        `;

        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(modal);

        // Animate modal
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }

        // Review form submission
        const reviewForm = modal.querySelector('.review-form');
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-review-btn');
            submitBtn.textContent = '등록 중...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('후기가 성공적으로 등록되었습니다. 검토 후 게시됩니다.');
                closeModal();
            }, 1500);
        });

        // Rating input styling
        const ratingInput = modal.querySelector('.rating-input');
        ratingInput.style.cssText = `
            display: flex;
            gap: 5px;
            margin-top: 10px;
        `;

        const ratingLabels = modal.querySelectorAll('.rating-input label');
        ratingLabels.forEach(label => {
            label.style.cssText = `
                font-size: 24px;
                color: #ddd;
                cursor: pointer;
                transition: color 0.2s ease;
            `;
        });

        // Rating interaction
        const ratingInputs = modal.querySelectorAll('.rating-input input');
        ratingInputs.forEach(input => {
            input.addEventListener('change', function() {
                const rating = parseInt(this.value);
                ratingLabels.forEach((label, index) => {
                    if (index < rating) {
                        label.style.color = '#f39c12';
                    } else {
                        label.style.color = '#ddd';
                    }
                });
            });
        });
    }

    // Board item click functionality
    const boardItems = document.querySelectorAll('.board-item:not(.review-item)');
    boardItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const content = this.querySelector('p').textContent;
            const date = this.querySelector('.date').textContent;
            
            openBoardDetailModal(title, content, date);
        });
    });

    // Board detail modal
    function openBoardDetailModal(title, content, date) {
        const modal = document.createElement('div');
        modal.className = 'board-detail-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2>${title}</h2>
                <div class="modal-meta">
                    <span class="modal-date">${date}</span>
                </div>
                <div class="modal-body">
                    <p>${content}</p>
                    <p>더 자세한 내용은 전화로 문의해주시기 바랍니다.</p>
                </div>
            </div>
        `;

        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(modal);

        // Animate modal
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    }

    // Keyboard navigation for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.review-modal, .board-detail-modal');
            modals.forEach(modal => {
                if (modal.style.display !== 'none') {
                    modal.click();
                }
            });
        }
    });

    // Form validation enhancements
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 3 && value.length < 7) {
                value = value.replace(/(\d{3})(\d)/, '$1-$2');
            } else if (value.length >= 7 && value.length < 11) {
                value = value.replace(/(\d{3})(\d{4})(\d)/, '$1-$2-$3');
            } else if (value.length >= 11) {
                value = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            }
            this.value = value;
        });
    }
});
