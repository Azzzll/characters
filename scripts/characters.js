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


const femaleCharacter = characters.querySelector(".character.woman");
const savedFemale = JSON.parse(localStorage.getItem("LastSavedFemaleCharacter"));
console.log(localStorage.getItem("LastSavedFemaleCharacter"));
if (savedFemale) {
  femaleCharacter.innerHTML = `
  <img id="body" src=" ${savedFemale.body ||'./female-character/images/outfit/тело.png'}" alt="Body">
  <img id="hairs_master" src=" ${savedFemale.hairs_master ||'./female-character/images/outfit/hairs/7.png'}" alt="Body">
  <img id="pants_master" src="${savedFemale.pants_master ||'./female-character/images/outfit/pants/4.png'}" alt="Eyes">
  <img id="top_master" src="${savedFemale.top_master ||'./female-character/images/outfit/top/4.png'}" alt="Ears">
  <img id="eyes_master" src="${savedFemale.eyes_master ||'./female-character/images/outfit/eyes/5.png'}" alt="Scarf">
  <img id="throat_master" src="${savedFemale.throat_master ||'./female-character/images/outfit/throat/3.png'}" alt="Tail">;
  <img id="eyebrows_master" src="${savedFemale.eyebrows_master ||'./female-character/images/outfit/eyebrows/2.png'}" alt="Tail">;
  <img id="boots_master" src="${savedFemale.boots_master ||'./female-character/images/outfit/boots/1.png'}" alt="Tail">;
  `
} else {
  femaleCharacter.innerHTML = `
  <img class="girl-img" src="female-character/images/outfit/тело.png"></img>
  <img class="girl-img" src="female-character/images/outfit/hairs/7.png" id="hairs_master" alt="Волосы" />
  <img class="girl-img" src="female-character/images/outfit/pants/4.png" id="pants_master" alt="Штаны " />
  <img class="girl-img" src="female-character/images/outfit/top/4.png" id="top_master" alt="Верх" />
  <img class="girl-img" src="female-character/images/outfit/eyes/5.png" id="eyes_master" alt="Глаза" />
  <img class="girl-img" src="female-character/images/outfit/throat/3.png" id="throat_master" alt="Рот" />
  <img class="girl-img" src="female-character/images/outfit/eyebrows/2.png" id="eyebrows_master" alt="Брови" />
  <img class="girl-img" src="female-character/images/outfit/boots/1.png" id="boots_master" alt="Кроссовки" />
  `;
}

