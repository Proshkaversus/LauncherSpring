// Ссылка для скачивания (ЗАМЕНИТЕ НА СВОЮ!)
const DOWNLOAD_URL = "https://github.com/YOUR_USERNAME/spring-launcher/releases/download/v3.2.1/SpringLauncher_Setup.exe";

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Обработчик скачивания
    downloadBtn.addEventListener('click', function() {
        // Создаем временную ссылку
        const link = document.createElement('a');
        link.href = DOWNLOAD_URL;
        link.target = '_blank';
        link.download = 'SpringLauncher_Setup.exe';
        
        // Анимация нажатия
        downloadBtn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            downloadBtn.style.transform = '';
        }, 150);
        
        // Добавляем счетчик скачиваний (опционально)
        let downloads = localStorage.getItem('spring_launcher_downloads') || 0;
        downloads++;
        localStorage.setItem('spring_launcher_downloads', downloads);
        
        // Уведомление
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #00d9ff;
            color: #000;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 10000;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 217, 255, 0.3);
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-download"></i>
            Загрузка началась! Файл: SpringLauncher_Setup.exe
        `;
        
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 5 секунд
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
        
        // Стили для анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Запускаем скачивание
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Анимация появления элементов
    const animatedElements = document.querySelectorAll('.feature-card, .launcher-card, .game-item, .step');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});