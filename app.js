const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUi = (data) => {
  //   console.log(data);
  const city = data.cityDetails; // const {city, weather} = data;
  const weather = data.weatherDetails;

  // Update details Templete
  details.innerHTML = `
        <h5 class="my-3">${city.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

  // Update night and day
  let imgSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  //   let imgSrc = null;
  //   if (weather.IsDayTime) {
  //     imgSrc = 'img/day.svg';
  //   } else {
  //     imgSrc = 'img/night.svg';
  //   }
  time.setAttribute('src', imgSrc);

  // Update icons
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // Remove d-none class
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};
///////////////////////////////////////////////////////////////////
const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weatherDetails = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weatherDetails: weatherDetails,
  };
};
///////////////////////////////////////////////////////////////////
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get City Value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Update ui with new city
  updateCity(city)
    .then((data) => updateUi(data))
    .catch((error) => console.log(error));
});
