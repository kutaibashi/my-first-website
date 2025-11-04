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

// نضع الكود بالكامل داخل مستمع حدث للتأكد من تحميل الصفحة أولاً
document.addEventListener('DOMContentLoaded', function () {

    // 1. تحديد "عنوان" النادل (نقطة النهاية للـ API)
    const apiUrl = 'https://catfact.ninja/fact';

    // 2. إنشاء "الوظيفة" التي ستقوم بالعمل
    // نستخدم كلمة "async" لنخبر جافاسكريبت أن هذه الوظيفة ستنتظر بيانات من الخارج
    async function getCatFact() {

        // 3. إجراء "المكالمة الهاتفية" (إرسال طلب HTTP GET)
        // نستخدم "await" لنقول للكود "توقف هنا وانتظر حتى يرد النادل"
        const response = await fetch(apiUrl);

        // 4. فك تغليف الرد (تحويل الرد من JSON إلى كائن JavaScript)
        // الرد (response) ليس هو البيانات نفسها، بل هو "الصندوق" الذي يحتوي عليها
        // نستخدم await مرة أخرى لأن عملية قراءة الصندوق تستغرق وقتًا
        const data = await response.json();

        // 5. استخدام البيانات لتحديث الصفحة (التفاعل مع DOM)
        // الآن نستخدم مهاراتنا من مقال "JavaScript"
        const factElement = document.querySelector('#fact-text');
        factElement.textContent = data.fact;
    }

    // 6. تشغيل الوظيفة لبدء العملية
    getCatFact();

});