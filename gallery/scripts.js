document.getElementById('scrollButton').addEventListener('click', fadeOutTitle);

function fadeOutTitle() {
  document.getElementById('header').classList.add('fadeOutClass');
  document.getElementById('gallery').classList.add('fadeInClass');
}
