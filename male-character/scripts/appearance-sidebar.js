const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
const sidebarPickAppearance = document.querySelector(
  ".sidebar.pick-appearance",
);

if (sidebarPickAppearance) {
  const backToCharacterSelection = sidebarPickAppearance.querySelector(".back");
  const aboutCharacter = document.querySelector(".about-character");
  const character = document.querySelector(".container .character");

  backToCharacterSelection.addEventListener("click", () => {
    const cell = sidebarPickCharacter.querySelector(".cell.active");
    cell.classList.toggle("active");
    sidebarPickCharacter.classList.remove("deactive");
    aboutCharacter.classList.remove("deactive");
    sidebarPickAppearance.classList.remove("active");
    character.classList.remove("appearance");
  });

  const cellsWrapper = sidebarPickAppearance.querySelector(".appearance");
  const cells = cellsWrapper.querySelectorAll(".cell");

  const appearances = sidebarPickAppearance.querySelectorAll(".icon_container");
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
      image.className = "icon";
      image.src = `images/appearance/${activeAppearance}/${i}.png`;

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

  // По умолчанию первая иконка - активна
  appearances[0].classList.add("active");
  uploadCells(appearances[0].classList[1]);

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      // .container .character > img.wig + img.face + img.shirt + img.pants
      // .pick-character .character.mini > img.wig + img.face + img.shirt + img.pants
      const appearanceImage = cell.querySelector(".icon"); // <img class="icon" src="images/appearance/face/1.png">
      const appearanceSrc = appearanceImage.getAttribute("src"); // images/appearance/face/1.png
      const currentAppearanceUrl = appearanceSrc.substring(
        18,
        appearanceSrc.length,
      ); // face/1.png
      const appearanceName = currentAppearanceUrl.split("/")[0]; // face

      // Путь одежды для персонажа, исходя из пути ячейки
      const outfitUrl = `images/outfit/${currentAppearanceUrl}`;

      const character = document.querySelector(".container .character");
      const face = character.querySelector(".face");
      const wig = character.querySelector(".wig");
      const shirt = character.querySelector(".shirt");
      const pants = character.querySelector(".pants");

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
        outfit.className = appearanceName;
        outfit.src = `images/outfit/${currentAppearanceUrl}`;
        switch (appearanceName) {
          case "face":
            outfit.classList.add = "face";
            break;
          case "wig":
            outfit.classList.add = "wig";
            break;
          case "shirt":
            outfit.classList.add = "shirt";
            break;
          case "pants":
            outfit.classList.add = "pants";
            break;
        }
        character.appendChild(outfit);
      }
    });
  });

  const save = sidebarPickAppearance.querySelector(".save");
  save.addEventListener("click", () => {
    const cell = sidebarPickCharacter.querySelector(".cell.active"); // understand current cell by added second class - .active
    const session = cell.getAttribute("data-id"); // current session

    sidebarPickCharacter.classList.remove("deactive");
    aboutCharacter.classList.remove("deactive");
    sidebarPickAppearance.classList.remove("active");
    character.classList.remove("appearance");
    cell.classList.toggle("active");

    localStorage.setItem(session, character.innerHTML);
    //  Отобразить в ячейке текущего персонажа
    //  Если мини персонаж существует, тогда добавь в него innerHTML контент
    //  Иначе создай новый мини персонаж
    const miniCharacter = cell.querySelector(".character.mini");
    const text = cell.querySelector(".text");
    if (cell.contains(miniCharacter)) {
      miniCharacter.innerHTML = character.innerHTML;
      text.style.display = "none";
    } else {
      const savedCharacter = document.createElement("div");
      savedCharacter.classList.add("character", "mini");
      savedCharacter.innerHTML = character.innerHTML;
      text.style.display = "none";
      cell.appendChild(savedCharacter);
    }

    const images = character.querySelectorAll("img");
    images.forEach((img) => {
      // Проверяем, является ли src полным URL
      if (img.src.startsWith("http")) {
        console.log("Полный URL:", img.src);
      } else {
        // Если src не является полным URL, добавляем префикс
        img.src = "./male-character/" + img.src;
      }
    });

    // Создаем новый массив строк с обновленными изображениями
    const updatedImages = Array.from(images).map((img) => {
      return `<img class="${img.className}" src="${img.src}" alt="${img.alt}">`;
    });

    // Сохраняем обновленный HTML в localStorage
    const manCharacter = updatedImages.join(""); // Объединяем массив строк в одну строку
    // console.log(manCharacter);
    localStorage.setItem("lastSavedManCharacter", manCharacter);
  });
}
