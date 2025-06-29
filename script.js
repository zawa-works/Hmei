document.querySelectorAll('.place-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const place = btn.getAttribute('data-place');
        const lat = btn.getAttribute('data-lat');
        const lng = btn.getAttribute('data-lng');
        const audio = document.getElementById('audio-' + place);

        // 音声再生
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }

        // 地図のiframeを切り替え
        if (lat && lng) {
            const iframe = document.getElementById('map-iframe');
            iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&output=embed&t=m&z=12&hl=ja`;
        }

        // ラベルを更新
        const label = btn.textContent.trim();
        document.getElementById('map-label').textContent = label;
    });
});

// ページ初期表示時にもラベルをセット（任意）
window.addEventListener('DOMContentLoaded', () => {
    const firstBtn = document.querySelector('.place-btn');
    if (firstBtn) {
        document.getElementById('map-label').textContent = firstBtn.textContent.trim();
    }
});
