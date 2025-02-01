const characters = document.querySelector(".characters");
const manCharacter = characters.querySelector(".character.man");

const savedCharacter = localStorage.getItem("lastSavedManCharacter");

if (savedCharacter) {
  manCharacter.innerHTML = savedCharacter;
} else {
  manCharacter.innerHTML = `
    <img
      class="wig"
      src="./male-character/images/outfit/wig/4.png"
      alt="Парик персонажа"
    />
    <img
      class="face"
      src="./male-character/images/outfit/face/7.png"
      alt="Лицо персонажа"
    />
    <img
      class="shirt"
      src="./male-character/images/outfit/shirt/4.png"
      alt="Футболка персонажа"
    />
    <img
      class="pants"
      src="./male-character/images/outfit/pants/1.png"
      alt="Штаны персонажа"
    />
    <img
      class="body"
      src="./male-character/images/character/body.png"
      alt="Тело персонажа"
    />
  `;
}

const catCharacter = characters.querySelector(".character.cat");
const savedCat = JSON.parse(localStorage.getItem("LastSavedCatCharacter"));

if (savedCat) {
  catCharacter.innerHTML = `
  <img id="body" src=" ${savedCat.body ||'./cat/image/body_brown.svg'}" alt="Body">
  <img id="eys" src="${savedCat.eys ||'./cat/image/eys_1green.svg'}" alt="Eyes">
  <img id="ears" src="${savedCat.ears ||'./cat/image/ears_1.svg'}" alt="Ears">
  <img id="scarf" src="${savedCat.scarf ||'./cat/image/scarf_2yellow.svg'}" alt="Scarf">
  <img id="tail" src="${savedCat.tail ||'./cat/image/tail_1brown.svg'}" alt="Tail">;
  `
} else {
  catCharacter.innerHTML = `
  <img id="body" src="./cat/image/body_brown.svg" alt="Body">
  <img id="eys" src="./cat/image/eys_1green.svg" alt="Eyes">
  <img id="ears" src="./cat/image/ears_1.svg" alt="Ears">
  <img id="scarf" src="./cat/image/scarf_2yellow.svg" alt="Scarf">
  <img id="tail" src="./cat/image/tail_1brown.svg" alt="Tail"> `;
   
}

