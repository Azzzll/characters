// Получаем все элементы с классом 'grid-item'
const gridItems = document.querySelectorAll('.grid-item');



const sidebarPickAppearence = document.querySelector(".clothes-changing",);
const cellsWrapper = sidebarPickAppearence.querySelector(".gridcontainerclothes");
const appearences = sidebarPickAppearence.querySelectorAll(".icon_container");
const cells = cellsWrapper.querySelectorAll(".grid-item");


appearences.forEach((appearence) => {
  // При клике на иконку: (парик/одежда/тд)
  appearence.addEventListener("click", () => {
    // Удалить у всех .icon_container класс .active
    appearences.forEach((appearence) =>
      appearence.classList.remove("active"),
    );
    // Удалить у всех ячеек существовавшие изображения
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });

    // Присвоить текущему .icon_container класс active
    appearence.classList.add("active");
    // Узнать что это за внешность (face/wig/pants/etc)
    const activeAppearence = appearence.classList[1];
    uploadCells(activeAppearence);
  });
});




// Подгрузка внешности в ячейки от активной иконки
const uploadCells = (activeAppearence) => {
    for (let i = 1; i <= cells.length; i++) {
      const image = document.createElement("img");
      image.className = "grid-item-png";
      image.src = `images/sidebar-outfit/${activeAppearence}/${i}.png`;
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










