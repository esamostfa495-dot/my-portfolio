const toggleBtn = document.getElementById('toggle-btn');
const editForm = document.getElementById('edit-form');
const passwordModal = document.getElementById('password-modal');
const confirmPassBtn = document.getElementById('confirm-pass-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const passInput = document.getElementById('modal-password-input');
const errorMsg = document.getElementById('error-msg');

// 🔒 كلمة السر الخاصة بك
const MY_PASSWORD = "1432008esA@"; 

// تحميل البيانات عند فتح الموقع
window.onload = function() {
    if(localStorage.getItem('siteName')) {
        document.getElementById('view-name').textContent = localStorage.getItem('siteName');
        document.getElementById('view-job').textContent = localStorage.getItem('siteJob');
        document.getElementById('view-about').textContent = localStorage.getItem('siteAbout');
        document.getElementById('view-skills').textContent = localStorage.getItem('siteSkills');
        document.getElementById('view-email').href = "mailto:" + localStorage.getItem('siteEmail');
    }
};

// فتح النافذة المنبثقة
toggleBtn.addEventListener('click', () => {
    passwordModal.classList.remove('hidden');
    passInput.value = '';
    errorMsg.classList.add('hidden');
    passInput.focus();
});

// إغلاق النافذة
closeModalBtn.addEventListener('click', () => {
    passwordModal.classList.add('hidden');
});

// التحقق من كلمة السر
confirmPassBtn.addEventListener('click', () => {
    if (passInput.value === MY_PASSWORD) {
        passwordModal.classList.add('hidden');
        editForm.classList.remove('hidden');
        toggleBtn.classList.add('hidden'); // إخفاء زر الفتح بعد الدخول
    } else {
        errorMsg.classList.remove('hidden');
    }
});

// حفظ البيانات
editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('input-name').value;
    const job = document.getElementById('input-job').value;
    const about = document.getElementById('input-about').value;
    const skills = document.getElementById('input-skills').value;
    const email = document.getElementById('input-email').value;

    if(name) localStorage.setItem('siteName', name);
    if(job) localStorage.setItem('siteJob', job);
    if(about) localStorage.setItem('siteAbout', about);
    if(skills) localStorage.setItem('siteSkills', skills);
    if(email) localStorage.setItem('siteEmail', email);

    location.reload();
});
