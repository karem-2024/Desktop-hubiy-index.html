document.addEventListener("DOMContentLoaded", () => {
    const numberElement = document.getElementById("number");
    
    // إضافة تأثير عند تحميل الصفحة
    setInterval(() => {
        numberElement.style.transform = `scale(${Math.random() + 1})`;
    }, 1000);
});
