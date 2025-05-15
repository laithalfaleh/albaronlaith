// تفعيل القائمة المتنقلة
const mobileMenu = document.getElementById('mobileMenu');
const mainMenu = document.getElementById('mainMenu');

mobileMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('law-menu-active');
});

// تحميل الخدمات
const lawServices = [
    {
        icon: 'fa-gavel',
        title: 'التحكيم التجاري',
        description: 'حل النزاعات بسرية تامة خارج نطاق المحاكم'
    },
    // أضف باقي الخدمات
];

function loadLawServices() {
    const container = document.querySelector('.law-services-grid');
    lawServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'law-service-card';
        serviceCard.innerHTML = `
            <i class="fas ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        container.appendChild(serviceCard);
    });
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    loadLawServices();
});
