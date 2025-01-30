// Получаем все элементы с классом 'grid-item'
const gridItems = document.querySelectorAll('.grid-item');














// иконки в сайдбаре по умолчанию
const imagesEyes1 = [
    'images/sidebar-outfit/eyes/11глаза.png',
    'images/sidebar-outfit/eyes/12глаза.png',
    'images/sidebar-outfit/eyes/13глаза.png',
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
const sidebarPickAppearence = document.querySelector(".character",);
const appearences = sidebarPickAppearence.querySelectorAll(".icon_container");
appearences.forEach((gridcontainerclothes) => {
  // При клике на иконку: (парик/одежда/тд)
  gridcontainerclothes.addEventListener("click", () => {
    // Удалить у всех .icon_container класс .active
    appearences.forEach((gridcontainerclothes) =>
        gridcontainerclothes.classList.remove("active"),
    );
    // Удалить у всех ячеек существовавшие изображения
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });

    // Присвоить текущему .icon_container класс active
    gridcontainerclothes.classList.add("active");
    // Узнать что это за внешность (face/wig/pants/etc)
    const activeAppearence = gridcontainerclothes.classList[1];
    uploadCells(activeAppearence);
  });
});

// Подгрузка внешности в ячейки от активной иконки
const uploadCells = (activeAppearence) => {
    for (let i = 1; i <= cells.length; i++) {
      const image = document.createElement("img");
      image.className = "icon";
      image.src = `images/outfit/${activeAppearence}/${i}.png`;

      // Костыль без бекенда
      // Изображения грузятся 1-12.png, даже если их нет
      // TODO: изменить
      image.onerror = () => {
        image.remove();
        // console.clear();
      };

      cells[i - 1].appendChild(image);
    }
  };










