document.getElementById('error-message').style.display = 'none';

const searchFood = () => {  
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  document.getElementById('error-message').style.display = 'none';
  if (searchText == ''){

  }
  else {    
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.meals))
    .catch(error => displayError(error));
  }
}

const displayError = error => {
  document.getElementById('error-message').style.display = 'block';
}

const displaySearchResults = meals => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  
  if (meals.length == 0) {
    // show no result found;
  }

  meals.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="card" style="width: 18rem;">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
    searchResult.appendChild(div);
  });
}

const loadMealDetail = mealId => {
  
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
  const mealDetail = document.getElementById('meal-details');
  mealDetail.innerText = '';
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card mx-auto my-4" style="width: 18rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Youtube Link</a>
  </div>
</div>
  `;
  mealDetail.appendChild(div);
}