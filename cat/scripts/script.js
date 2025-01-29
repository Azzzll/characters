const leftPanelArrow = document.querySelector('.arrowPanelLeft');
const rightPanelArrow = document.querySelector('.arrowPanelRight');
const tabs = document.querySelectorAll('.cards > div');
let currentTabIndex = 0;

function updateTabs(index) {
  tabs.forEach((tab, i) => {
    tab.style.display = i === index ? 'block' : 'none';
  });
}

leftPanelArrow.addEventListener('click', () => {
  currentTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
  updateTabs(currentTabIndex);
});

rightPanelArrow.addEventListener('click', () => {
  currentTabIndex = (currentTabIndex + 1) % tabs.length;
  updateTabs(currentTabIndex);
});

updateTabs(currentTabIndex);
 document.addEventListener("DOMContentLoaded", () => {
    const layers = {
        body: document.getElementById("body"),
        eys: document.getElementById("eys"),
        ears: document.getElementById("ears"),
        scarf: document.getElementById("scarf"),
        tail: document.getElementById("tail"),
    };
    document.querySelectorAll(".card1, .card4").forEach((button) => {
        button.addEventListener("click", () => {
            const layer = button.dataset.layer; 
            const img = button.querySelector("img"); 
            if (layers[layer]) {
                layers[layer].src = img.src;
            }
        });
    });
   
});

  let currentCharacterIndex = 0;
  const characters = [
      {
          elipse: "image/elipse.svg",
          body: "image/body_brown.svg",
          eyes: "image/eys_1green.svg",
          ears: "image/ears_1.svg",
          scarf: "image/scarf_2yellow.svg",
          tail: "image/tail_1brown.svg"
      },
      {
        elipse: "image/elipse.svg",
        body: "image/body_black.svg",
        eyes: "image/eys_2black.svg",
        ears: "image/ears_2.svg",
        scarf: "image/scarf_2pink.svg",
        tail: "image/tail_2black.svg"
     },
      {
          elipse: "image/elipse.svg",
          body: "image/body_grey.svg",
          eyes: "image/eys_2blue.svg",
          ears: "image/ears_2.svg",
          scarf: "image/scarf_1blue.svg",
          tail: "image/tail_2grey.svg"
      }
  ];
 
  function changeCharacter(direction) {
      console.log('Button clicked, direction:', direction);
  
      if (direction === 'left') {
          currentCharacterIndex = (currentCharacterIndex === 0) ? characters.length - 1 : currentCharacterIndex - 1;
      } else if (direction === 'right') {
          currentCharacterIndex = (currentCharacterIndex === characters.length - 1) ? 0 : currentCharacterIndex + 1;
      }

      const character = characters[currentCharacterIndex];
  
      document.getElementById('elipse').src = character.elipse;
      document.getElementById('body').src = character.body;
      document.getElementById('eys').src = character.eyes;
      document.getElementById('ears').src = character.ears;
      document.getElementById('scarf').src = character.scarf;
      document.getElementById('tail').src = character.tail;
  }
  document.querySelector('.left-arrow').addEventListener('click', () => {
    console.log('Left arrow clicked');
    changeCharacter('left');
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    console.log('Right arrow clicked');
    changeCharacter('right');
});
