console.log('project 2');

const genBtn = document.querySelector('#clkBtn');
// genBtn.addEventListener('click', callGenRanQuote);
genBtn.addEventListener('click', callGenRanQuoteAndAuthor);

const quotesArr = [
  {
    text: 'God save me from my friends. I can protect myself from my enemies.',
    author: 'Claude Louis Hector De Villars',
  },
  {
    text: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random texts about the most wonderful gift that we've got",
    author: 'Life',
  },
  {
    text: 'The price of anything is the amount of life you exchange for it.',
    author: 'David Thoreau',
  },
  {
    text: 'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    author: 'John Kenneth Galbraith',
  },
  {
    text: 'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    author: 'Charles Lindbergh',
  },
  {
    text: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    author: 'Tyne Daly',
  },
  { text: 'Look around,Happiness is trying to catch you.', author: 'M' },
];
// only for text
// function callGenRanQuote() {
//   const randomQuote = document.querySelector('#randomQuote');
//   const arr = quotesArr;
//   randomQuote.innerText = genRandomQuote(arr);
// }

// function genRandomQuote(arr2) {
//   console.log('hii');
//   const i = parseInt(Math.random() * arr2.length);
//   return arr2[i].text;
// }

// for author and text

function callGenRanQuoteAndAuthor() {
  const arr = quotesArr;
  const q = genRandomQuoteAndAuthor(arr); // { text:'', author:''}
  const randomQuote = document.querySelector('#randomQuote');
  randomQuote.innerText = q.text;
  const author = document.querySelector('#authorName');
  author.innerText = q.author;
}

function genRandomQuoteAndAuthor(arr2) {
  console.log('hii');
  const i = parseInt(Math.random() * arr2.length);
  return arr2[i];
}
