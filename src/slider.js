const slider = document.getElementById('slider');

// Variable que guarda el estado de si tenemos el click presionado.
let pressClick = false;
let initialCoord;
let scrollLeft;

const press = (e) => {
  pressClick = true;

  // e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respecto al documento.
  // slider.offsetLeft - El espacio entre el slider y la parte izquierda del documento.

  initialCoord = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  // console.log('startX: ', e.pageX);
  // console.log('slider.offsetLeft: ', slider.offsetLeft);
  // console.log('scrollLeft: ', slider.scrollLeft);
};
const move = (e) => {
  if (!pressClick) {
    return;
  }
  // Spacing between the slider's starting coordinate and where we clicked.
  const space = e.pageX - slider.offsetLeft;
  const traveledDist = space - initialCoord;

  // console.log('distancia: ', traveledDist);
  // console.log('scrollLeft: ', scrollLeft);

  // We move the scroll.
  // We subtract the distance from the initial scroll position when we clicked.
  slider.scrollLeft = scrollLeft - traveledDist;
};
const release = (e) => {
  pressClick = false;
};

slider.addEventListener('mousedown', press);
slider.addEventListener('mousemove', move);
slider.addEventListener('mouseup', release);
