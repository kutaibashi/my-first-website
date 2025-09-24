// --- الخطوة 1: إيجاد العناصر وتخزينها في متغيرات ---

// ابحث في المستند عن الزر الذي يحمل id="theme-toggle-button"
const themeToggleButton = document.querySelector('#theme-toggle-button');

// ابحث عن وسم  لتطبيق التغييرات عليه
const body = document.querySelector('body');


// --- الخطوة 2: تعريف "الوصفة" أو الدالة التي ستقوم بالعمل ---

// نُعرّف دالة اسمها "toggleTheme"
function toggleTheme() {
    // هذا السطر هو قلب المنطق:
    // .classList.toggle() تقوم بإضافة الفئة إذا لم تكن موجودة،
    // وتقوم بإزالتها إذا كانت موجودة.
    body.classList.toggle('dark-mode');

    // الآن، دعنا نتحقق من الحالة الحالية لتغيير نص الزر
    if (body.classList.contains('dark-mode')) {
        // إذا كانت الصفحة في الوضع الليلي، غيّر نص الزر
        themeToggleButton.textContent = "تفعيل الوضع النهاري";
    } else {
        // وإلا (إذا كانت في الوضع النهاري)، أعد النص الأصلي
        themeToggleButton.textContent = "تفعيل الوضع الليلي";
    }
}


// --- الخطوة 3: ربط الحدث بالدالة ---

// نخبر الزر: "استمع لحدث النقر 'click'"
// "وعندما يحدث النقر، قم بتنفيذ (استدعاء) دالة toggleTheme"
themeToggleButton.addEventListener('click', toggleTheme);