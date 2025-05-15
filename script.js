// تنبيه عند إرسال النموذج
document.querySelector('form').addEventListener('submit', function(e) {
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك خلال 24 ساعة.');
    this.reset();
});

// القائمة المنسدلة للجوّال
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navList = document.querySelector('nav ul');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});
