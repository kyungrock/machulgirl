// 간단한 스크롤 애니메이션 예시
window.addEventListener('scroll', () => {
    const bannerText = document.querySelector('.banner h1');
    bannerText.style.transform = `translate(-50%, ${50 - window.scrollY * 0.2}%)`;
});
