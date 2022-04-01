console.log("hii I'm Mishti here");

// approach 1
/* const valueTag = document.querySelector('#value');
const addCount = document.querySelector('#addCount');
const lowerCount = document.querySelector('#lowerCount');

addCount.addEventListener('click', callAddCounterValue);
lowerCount.addEventListener('click', callLowerCounterValue);

function getCurrentValue() {
  return Number(valueTag.innerText);
}

function callAddCounterValue() {
  let currentVal = getCurrentValue();
  valueTag.innerText = currentVal + 1;
}

function callLowerCounterValue() {
  let currentVal = getCurrentValue();
  valueTag.innerText = currentVal - 1;
}
 */

// approach 2

// add count btn click should increment count
const btnAdd = document.querySelector('#addCount');
const btnMinus = document.querySelector('#lowerCount');

btnAdd.addEventListener('click', handleCount);
btnMinus.addEventListener('click', handleCount);

function handleCount(event) {
  const clickedBtnId = event.target.id;
  const valueTag = document.querySelector('#value');
  const currentValue = Number(valueTag.innerText);
  let ans;
  if (clickedBtnId === 'addCount') {
    ans = currentValue + 1;
  } else {
    ans = currentValue - 1;
  }

  valueTag.innerText = ans;

  if (ans > 0) {
    valueTag.style.color = '#008000';
  } else if (ans < 0) {
    valueTag.style.color = '#ff0000';
  } else {
    valueTag.style.color = ' #333333';
  }
}
