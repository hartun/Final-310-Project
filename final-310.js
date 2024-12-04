//console.log('ready')
const formEl = document.getElementById('');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const zipEl = document.getElementById('zip');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const URL = `https://api.tomorrow.io/v4/weather/forecast?location=${zip}&apikey=${API_KEY}`

  fetch(URL).then((result) => {
    return result.json()
  }).then((data) => {
    console.log(data);
  })

});





// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.tomorrow.io/v4/weather/forecast?location=46805&apikey=DLP9YEUDu06SiE2fvph4HQe7R9ZKdAKp', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// function helpMessage() {
//   alert('Text 206-867-5309 for help.');
// }
// setTimeout(helpMessage, 3000);

// function stopMessage() {
//   clearTimeout(helpMessage);
// }
