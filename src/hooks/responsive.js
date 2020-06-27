var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
function toggleMenu(){
  $menu.classList.toggle('active')
};
function showMenu(){
  $menu.classList.add('active');
};
function hideMenu(){
  $menu.classList.remove('active');
};

function mediaQuery() {
  if (consulta.matches) {
    // si se cumple hagamos esto
    console.log('se cumplió la condicion');
    $burguerButton.addEventListener('touchstart', toggleMenu);
  } else {
    $burguerButton.removeEventListener('touchstart', toggleMenu);
    // si no se cumple hagamos esto
    console.log('no se cumplió la condicion');
  }
}
mediaQuery();

// lazy loading
var bLazy = new Blazy({
    selector: 'img'
});
// $burguerButton.addEventListener('touchstart', toggleMenu);

// function toggleMenu(){
//   $menu.classList.toggle('active')
// };

// Gestos touch
var $body = document.body;

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);