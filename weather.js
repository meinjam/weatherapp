const key = 'TLkGci9ETE1rPoZj3aW4DA3B7qpxanT4';

// Get Weather Information
const getWeather = async (locationId) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationId}?apikey=${key}`;
  const response = await fetch(base + query);

  const data = await response.json();
  return data[0];
};

// Get City Information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);

  const data = await response.json();
  return data[0];
};

// getCity('jessore')
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));