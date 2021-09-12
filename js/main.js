const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const elBtn = document.querySelector('.js-btn');
const elColor = document.querySelector('.js-color');

elBtn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}