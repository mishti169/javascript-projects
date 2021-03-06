console.log("hello! I'm Mishti here");

const searchBtn = document.querySelector('#btn-search');
searchBtn.addEventListener('click', getRecipeList);
let data = [];
async function getRecipeList() {
  const searchBox = document.querySelector('#searchBox');
  const res = await fetch(
    'https://api.spoonacular.com/recipes/search?query=' +
      searchBox.value +
      '&apiKey=a9cb54be8fd147b9b9688cb748ee4617'
  );
  //api.spoonacular.com/recipes/complexSearch?query=panipuri&apiKey=a9cb54be8fd147b9b9688cb748ee4617
  https: data = (await res.json()).results;

  const wrapper = document.querySelector('.recipe-list-wrapper');

  let finalCount = '';

  for (let i = 0; i < data.length; i++) {
    finalCount =
      finalCount +
      `<div class="recipe-item" id=${data[i].id}><img class="img-item" 
    src="https://spoonacular.com/recipeImages/${data[i].id}-240x150.jpg" alt="${data[i].title}"/><span>${data[i].title}</span></div>`;
  }

  wrapper.innerHTML = finalCount;

  const recipeItems = document.querySelectorAll('.recipe-item');
  let arrFromRecipeItems = [];
  for (let i = 0; i < recipeItems.length; i++) {
    arrFromRecipeItems.push(recipeItems[i]);
  }
  for (let i = 0; i < arrFromRecipeItems.length; i++) {
    arrFromRecipeItems[i].addEventListener('click', currentRecipeItem);
  }
}

async function currentRecipeItem(event) {
  const selectedRecipeItem = data.find(function (currentItem) {
    return selectedRecipe(currentItem, +event.currentTarget.id);
  });
  const recipeTitle = document.querySelector('.recipe-title');
  recipeTitle.innerText = selectedRecipeItem.title;

  const recipeImg = document.querySelector('.current-recipe-img');
  recipeImg.style.backgroundImage = `url("https://spoonacular.com/recipeImages/${selectedRecipeItem.id}-636x393.jpg")`;
  // recipeImg.style.backgroundImage = `url("${selectedRecipeItem.id.replace(
  //   '312x231',
  //   '636x393'
  // )}")`;
  const resAns = await fetch(
    `https://api.spoonacular.com/recipes/${selectedRecipeItem.id}/ingredientWidget.json?apiKey=a9cb54be8fd147b9b9688cb748ee4617`
  );

  const ingredientsRes = await resAns.json();

  const ingredientsRes1 = {
    ingredients: [
      {
        name: 'cheese',
        image: 'cheddar-cheese.png',
        amount: {
          metric: {
            value: 113.0,
            unit: 'g',
          },
          us: {
            value: 1.0,
            unit: 'cups',
          },
        },
      },
      {
        name: 'penne pasta',
        image: 'penne-pasta.jpg',
        amount: {
          metric: {
            value: 453.592,
            unit: 'g',
          },
          us: {
            value: 1.0,
            unit: 'lb',
          },
        },
      },
      {
        name: 'spaghetti sauce',
        image: 'tomato-sauce-or-pasta-sauce.jpg',
        amount: {
          metric: {
            value: 735.0,
            unit: 'ml',
          },
          us: {
            value: 3.0,
            unit: 'cups',
          },
        },
      },
      {
        name: 'water',
        image: 'water.png',
        amount: {
          metric: {
            value: 709.764,
            unit: 'ml',
          },
          us: {
            value: 3.0,
            unit: 'cups',
          },
        },
      },
    ],
  };
  const ingredientList = document.querySelector('.ingridients-list');
  let ans = '';
  for (let i = 0; i < ingredientsRes.ingredients.length; i++) {
    ans =
      ans +
      `<li class="list-decor">
  <i class="fa-solid fa-square-check icon"></i>
  <span class="ingredient">${ingredientsRes.ingredients[i].name}</span>
</li>`;
  }
  ingredientList.innerHTML = ans;
}

function selectedRecipe(currentItem, id) {
  return currentItem.id === id;
}
