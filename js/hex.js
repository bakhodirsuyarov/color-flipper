const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const elBtn = document.querySelector('.js-btn');
const color = document.querySelector('.js-color');

elBtn.addEventListener('click', function(){
  let hexColor = "#";
  for (let i = 0; i < 6; i++){
    hexColor += hex[getRandom()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandom(){
  return Math.floor(Math.random() * hex.length);
}