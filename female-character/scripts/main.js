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
// По умо
// лчанию первая иконка - активна
appearences[0].classList.add("active");
uploadCells(appearences[0].classList[1]);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // .container .character > img.wig + img.face + img.shirt + img.pants
    // .pick-character .character.mini > img.wig + img.face + img.shirt + img.pants
    const appearenceImage = cell.querySelector(".grid-item-png"); // <img class="icon" src="images/appearence/face/1.png">
    const appearenceSrc = appearenceImage.getAttribute("src"); // images/appearence/face/1.png
    const currentAppearenceUrl = appearenceSrc.substring(
    22,
      appearenceSrc.length,
    ); // face/1.png
    const appearenceName = currentAppearenceUrl.split("/")[0]; // face

    // Путь одежды для персонажа, исходя из пути ячейки
    const outfitUrl = `images/outfit/${currentAppearenceUrl}`;

    const character = document.querySelector(".container .character");
    const face = character.querySelector(".eyes");
    const eyebrows = character.querySelector(".eyebrows");
    const hairs = character.querySelector(".hairs");
    const top = character.querySelector(".top");
    const pants = character.querySelector(".pants");
    const boots = character.querySelector(".boots");


    const characterImage = character.querySelector(`.${appearenceName}`);
    if (characterImage) {
      // Применить найденную одежду на персонажа
      
      
    } else {
      // Если нет одежды персонажа - создаем
      const outfit = document.createElement("img");
      outfit.className = appearenceName + '_master girl-img';
      outfit.src = `images/outfit/${currentAppearenceUrl}`;
      switch (appearenceName) {
        case "eyes":
          document.getElementById('eyes_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "hairs":
          document.getElementById('hairs_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "pants":
          document.getElementById('pants_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "top":
          document.getElementById('top_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "throat":
          document.getElementById('throat_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "eyebrows":
          document.getElementById('eyebrows_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
        case "boots":
          document.getElementById('boots_master').src = `images/outfit/${currentAppearenceUrl}`;
          break;
      }
    }
  });
});








