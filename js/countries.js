const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {

  const countriesDiv = document.getElementById('countries');
  countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h3> ${country.name.official}</h3>
    <p> ${country.capital}</p>
    <button onclick="loadCountryByName('${country.name.official}')">Details</button>
    `;
    countriesDiv.appendChild(div);
  })
}

const loadCountryByName = name => {
  const url = `https://restcountries.com/v3.1/name/${name}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
  console.log(country.name.official);
  const countryDiv = document.getElementById('country-detail');
  countryDiv.innerHTML = `
  <h5>${country.name.official}</h5>
  <p>Population: ${country.population}</p>
  <img width="200px" src="${country.flags.svg}">
  `;
}