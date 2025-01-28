// Получаем все элементы с классом 'grid-item'
const gridItems = document.querySelectorAll('.grid-item-png');

// Выбранная иконка в сайдбаре
let selectedIcon = 0;

// Функция для очистки изображений в ячейках
function clearImages() {
    gridItems.forEach(item => {
        const img = item.querySelector('img'); // Находим изображение в ячейке
        if (img) {
            item.removeChild(img); // Удаляем изображение
        }
    });
}

// иконки в сайдбаре по умолчанию
const imagesEyes1 = [
    '../images/sidebar-outfit/eyes/11глаза.png',
    'images/sidebar-outfit/eyes/12глаза.png',
    '../images/sidebar-outfit/eyes/13глаза.png',
    'images/sidebar-outfit/eyes/14глаза.png',
    'images/sidebar-outfit/eyes/21глаза.png',
    'images/sidebar-outfit/eyes/22глаза.png',
];
const imagesEyebrows1 = [
    '../images/outfit/eyebrows/16брови.png',
    'images/outfit/eyebrows/26брови.png',
    'images/outfit/eyebrows/36брови.png',
    'images/outfit/eyebrows/46брови.png',
];
const imagesHairs1 = [
    'images/outfit/hairs/11волосы.png',
    'images/outfit/hairs/12волосы.png',
    'images/outfit/hairs/13волосы.png',
    'images/outfit/hairs/21волосы.png',
    'images/outfit/hairs/22волосы.png',
    'images/outfit/hairs/23волосы.png',
];
const imagesHairs2 = [
    'images/outfit/hairs/31волосы.png',
    'images/outfit/hairs/32волосы.png',
    'images/outfit/hairs/33волосы.png',
    'images/outfit/hairs/41волосы.png',
    'images/outfit/hairs/42волосы.png',
    'images/outfit/hairs/43волосы.png',
];


document.addEventListener("DOMContentLoaded", function() {
    // Перебираем ячейки и устанавливаем изображения
    gridItems.forEach((item, index) => {
    if (imagesEyes1[index]) { // Проверяем, есть ли изображение для текущей ячейки
        item.style.backgroundImage = `url(${imagesEyes1[index]})`;
    }
    });
});


// Функция для обновления значения переменной и отображения его на странице
function updateValue(newValue) {
    myInteger = newValue;
    document.getElementById('value').textContent = myInteger;
}
// Обработчики событий для кнопок в сайдбаре
document.getElementById('eyes').addEventListener('click', function() {
    updateValue(1); 
});
document.getElementById('eyebrows').addEventListener('click', function() {
    clearImages();
    gridItems.forEach((item, index) => {
        if (imagesEyebrows1[index]) { // Проверяем, есть ли изображение для текущей ячейки
            item.style.backgroundImage = `url(${imagesEyebrows1[index]})`;
        }
        });
});
document.getElementById('hairs').addEventListener('click', function() {
    updateValue(3); 
});
document.getElementById('top').addEventListener('click', function() {
    updateValue(4); 
}); 
document.getElementById('pants').addEventListener('click', function() {
    updateValue(5); 
});
document.getElementById('boots').addEventListener('click', function() {
    updateValue(6);
});


