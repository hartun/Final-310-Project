//console.log('ready')
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/forecast?location=46805&apikey=DLP9YEUDu06SiE2fvph4HQe7R9ZKdAKp', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
