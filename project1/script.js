console.log('hello!');
console.log('hello from project 1');

const btn = document.querySelector('#clkBtn');

btn.addEventListener('click', changeBgColor);

let arr = [
  'DarkGreen',
  'DarkSeaGreen',
  'DarkOliveGreen',
  'DarkKhaki',
  'ForestGreen',
  'LawnGreen',
  'MediumAquaMarine',
  'MediumSeaGreen',
  'MediumSpringGreen',
  'MediumTurquoise',
  'PaleTurquoise',
  'PowderBlue',
  'SkyBlue',
];

function changeBgColor() {
  const body = document.querySelector('body');
  body.style.background = randomColorIndex();
  const hex = w3color(body.style.background).toHexString();

  // show hex code in the screen
  const h1 = document.querySelector('#hexContainer');
  h1.innerText = `The HEX code is : ${hex}`;
}

function randomColorIndex() {
  // get a random number between 0 to arr.length - 1
  const index = parseInt(Math.random() * arr.length);
  return arr[index];
}
