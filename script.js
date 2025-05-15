// تفعيل القائمة المتنقلة
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// تحميل الخدمات
const services = [
    { icon: 'fa-gavel', title: 'التحكيم', description: '...' },
    // ...
];

function loadServices() {
    const container = document.querySelector('.services-grid');
    services.forEach(service => {
        container.innerHTML += `
            <div class="service-card">
                <i class="fas ${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
    });
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', loadServices);
