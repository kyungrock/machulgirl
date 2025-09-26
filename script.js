// Mobile region selection handler
function handleRegionSelect(region) {
    // 출장 옵션 처리
    if (region === 'seoultrip') {
        window.location.href = 'https://xn--z69au6wh5golr.com/?p=54';
        return;
    } else if (region === 'gyeonggitrip') {
        window.location.href = 'https://xn--z69au6wh5golr.com/?p=1166';
        return;
    } else if (region === 'incheontrip') {
        window.location.href = 'https://xn--z69au6wh5golr.com/?p=1180';
        return;
    }

    const seoulDropdown = document.getElementById('seoulDropdown');
    const gyeonggiDropdown = document.getElementById('gyeonggiDropdown');
    const incheonDropdown = document.getElementById('incheonDropdown');

    // 먼저 모두 숨기기
    if (seoulDropdown) seoulDropdown.style.display = 'none';
    if (gyeonggiDropdown) gyeonggiDropdown.style.display = 'none';
    if (incheonDropdown) incheonDropdown.style.display = 'none';

    // 선택된 지역만 보이기
    if (region === 'seoul' && seoulDropdown) {
        seoulDropdown.style.display = 'block';
    } else if (region === 'gyeonggi' && gyeonggiDropdown) {
        gyeonggiDropdown.style.display = 'block';
    } else if (region === 'incheon' && incheonDropdown) {
        incheonDropdown.style.display = 'block';
    }
}

// 드롭다운 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
    const regionBox = document.querySelector('.region-box');
    const seoulDropdown = document.getElementById('seoulDropdown');
    const gyeonggiDropdown = document.getElementById('gyeonggiDropdown');
    const incheonDropdown = document.getElementById('incheonDropdown');

    if (regionBox && !regionBox.contains(event.target)) {
        if (seoulDropdown) seoulDropdown.style.display = 'none';
        if (gyeonggiDropdown) gyeonggiDropdown.style.display = 'none';
        if (incheonDropdown) incheonDropdown.style.display = 'none';
    }
});

// URL 복사 함수
function copyUrl() {
    const url = 'https://xn--z69au6wh5golr.com/?p=1585';
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(() => {
            alert('URL이 복사되었습니다. 이쁜이를 친구에게 공유해보세요! 😊');
        }).catch(err => {
            console.error('URL 복사 실패:', err);
            alert('URL 복사에 실패했습니다. 다시 시도해주세요.');
        });
    } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('URL이 복사되었습니다. 이쁜이를 친구에게 공유해보세요! 😊');
        } catch (err) {
            console.error('URL 복사 실패:', err);
            alert('URL 복사에 실패했습니다. 다시 시도해주세요.');
        }
        document.body.removeChild(textArea);
    }
}

// Defer loading of non-critical scripts
function loadDeferredScripts() {
    // Load Kakao SDK only when needed
    if (typeof kakaoShare === 'function') {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
        script.defer = true;
        document.head.appendChild(script);
    }
}

// Load deferred scripts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDeferredScripts);
} else {
    loadDeferredScripts();
}

// Mobile check function
window.mobileCheck = function() {
    let isMobile = false;
    return function(userAgent) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4))) isMobile = true;
    }(navigator.userAgent || navigator.vendor || window.opera);
    return isMobile;
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile-specific functionality
    if (window.innerWidth <= 768) {
        // Mobile-specific initialization code can go here
        console.log('Mobile view detected');
    }
});
