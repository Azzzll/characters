// Получаем все элементы с классом 'grid-item'
const gridItems = document.querySelectorAll('.grid-item');
const sidebarPickAppearance = document.querySelector(".clothes-changing",);
const cellsWrapper = sidebarPickAppearance.querySelector(".gridcontainerclothes");
const appearances = sidebarPickAppearance.querySelectorAll(".icon_container");
const cells = cellsWrapper.querySelectorAll(".grid-item");

appearances.forEach((appearance) => {
  // При клике на иконку: (парик/одежда/тд)
  appearance.addEventListener("click", () => {
    // Удалить у всех .icon_container класс .active
    appearances.forEach((appearance) =>
      appearance.classList.remove("active"),
    );
    // Удалить у всех ячеек существовавшие изображения
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });

    // Присвоить текущему .icon_container класс active
    appearance.classList.add("active");
    // Узнать что это за внешность (face/wig/pants/etc)
    const activeAppearance = appearance.classList[1];
    uploadCells(activeAppearance);
  });
});

// Подгрузка внешности в ячейки от активной иконки
const uploadCells = (activeAppearance) => {
    for (let i = 1; i <= cells.length; i++) {
      const image = document.createElement("img");
      image.className = "grid-item-png";
      image.src = `images/sidebar-outfit/${activeAppearance}/${i}.png`;
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
appearances[0].classList.add("active");
uploadCells(appearances[0].classList[1]);

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // .container .character > img.wig + img.face + img.shirt + img.pants
    // .pick-character .character.mini > img.wig + img.face + img.shirt + img.pants
    const appearanceImage = cell.querySelector(".grid-item-png"); // <img class="icon" src="images/appearance/face/1.png">
    const appearanceSrc = appearanceImage.getAttribute("src"); // images/appearance/face/1.png
    const currentAppearanceUrl = appearanceSrc.substring(
    22,
      appearanceSrc.length,
    ); // face/1.png
    const appearanceName = currentAppearanceUrl.split("/")[0]; // face

    // Путь одежды для персонажа, исходя из пути ячейки
    const outfitUrl = `images/outfit/${currentAppearanceUrl}`;

    const character = document.querySelector(".container .character");
    const face = character.querySelector(".eyes");
    const eyebrows = character.querySelector(".eyebrows");
    const hairs = character.querySelector(".hairs");
    const top = character.querySelector(".top");
    const pants = character.querySelector(".pants");
    const boots = character.querySelector(".boots");


    const characterImage = character.querySelector(`.${appearanceName}`);
    if (characterImage) {
      // Применить найденную одежду на персонажа
      switch (appearanceName) {
        case "face":
          face.src = outfitUrl;
          break;
        case "wig":
          wig.src = outfitUrl;
          break;
        case "shirt":
          shirt.src = outfitUrl;
          break;
        case "pants":
          pants.src = outfitUrl;
          break;
        // default:
        //   console.log(`${appearanceName} не существует`);
      }
    } else {
      
      // Если нет одежды персонажа - создаем
      const outfit = document.createElement("img");
      outfit.className = appearanceName + '_master girl-img';
      outfit.src = `images/outfit/${currentAppearanceUrl}`;
      switch (appearanceName) {
        case "eyes":
          document.getElementById('eyes_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "hairs":
          document.getElementById('hairs_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "pants":
          document.getElementById('pants_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "top":
          document.getElementById('top_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "throat":
          document.getElementById('throat_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "eyebrows":
          document.getElementById('eyebrows_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
        case "boots":
          document.getElementById('boots_master').src = `images/outfit/${currentAppearanceUrl}`;
          break;
      }
    }
  });
});

const female = document.querySelector(".character");
const save = document.querySelector(".save");

save.addEventListener("click", () => {
const images = female.querySelectorAll("img");
const femaleData = {};

 images.forEach((img) => {
  femaleData[img.id] = img.src;
 });
  localStorage.setItem("LastSavedFemaleCharacter", JSON.stringify(femaleData));
});







