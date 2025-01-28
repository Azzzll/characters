// .characters .character.men
const characters = document.querySelector(".characters");
const manCharacter = characters.querySelector(".character.man");

const savedCharacter = localStorage.getItem("lastSavedManCharacter");
// console.log(savedCharacter);

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
