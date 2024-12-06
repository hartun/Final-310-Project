const videoSection = document.querySelector('section');

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU1M6N5LUj3c1JhiZXiNDq3A&key=AIzaSyDu0XoK-4KitG1sLxKzankX9DGd6Hx6PD4')
.then(res => res.json())
.then(data => {
  data.items.forEach(el => {
  videoSection.innerHTML =
  `<a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
      <img src="${el.snippet.thumbnails.maxres.url}" />
      <h4>${el.snippet.title}</h4>
  </a>`
  });
});

function helpMessage() {
  alert('Have questions about YouTube Channel Insights? Text (206) 867-5309.');
}
setTimeout(helpMessage, 2000);

function stopMessage() {
  clearTimeout(helpMessage);
}

//Setting up the snackbar
const button = document.getElementById('snackbarButton');
const snackBar = document.getElementById('snackbar');
button.addEventListener('click', function() {
   snackBar.className = 'show';
   setTimeout(function(){ snackBar.className = snackBar.className.replace('show', ''); }, 3000);
});
