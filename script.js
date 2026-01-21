// КОНФИГУРАЦИЯ - ЗАМЕНИТЕ ЭТУ ССЫЛКУ!
const CONFIG = {
    DOWNLOAD_URL: "https://raw.githubusercontent.com/Proshkaversus/SpringLauncherSite/main/SpringLauncher_Setup.exe",
    FILENAME: "SpringLauncher_Setup.exe"
};

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const notification = document.getElementById('downloadNotification');
    
    // Функция скачивания
    function startDownload() {
        // Анимация кнопки
        downloadBtn.style.transform = 'translateY(-2px) scale(0.98)';
        downloadBtn.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        
        setTimeout(() => {
            downloadBtn.style.transform = 'translateY(-3px)';
            downloadBtn.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
        }, 150);
        
        // Показываем уведомление
        notification.classList.add('show');
        
        // Скрыть уведомление через 4 секунды
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
        
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.href = CONFIG.DOWNLOAD_URL;
        link.download = CONFIG.FILENAME;
        link.target = '_blank';
        
        // Для мобильных устройств
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open(CONFIG.DOWNLOAD_URL, '_blank');
            return;
        }
        
        // Запускаем скачивание
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Скачивание начато:', CONFIG.FILENAME);
    }
    
    // Назначаем обработчик
    downloadBtn.addEventListener('click', startDownload);
    
    // Анимация появления элементов
    const animatedElements = document.querySelectorAll('.game-card, .feature, .step');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    // Анимация появления карточки скачивания
    const downloadCard = document.querySelector('.download-card');
    if (downloadCard) {
        downloadCard.style.opacity = '0';
        downloadCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            downloadCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            downloadCard.style.opacity = '1';
            downloadCard.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Инструкция для замены ссылки
    console.log('🔗 Чтобы кнопка работала, замените DOWNLOAD_URL в script.js на вашу ссылку с GitHub');
    console.log('📥 Текущая ссылка:', CONFIG.DOWNLOAD_URL);
});