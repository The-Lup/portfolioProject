'use strict';

const gallery = document.getElementById('trabajos');
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      const jobs = gallery.querySelectorAll('.trabajos__imagenes a');
      jobs.forEach((job, index) => {
        setTimeout(() => {
          job.classList.add('trabajos__trabajo--visible');
        }, 2000 * index);
      });
    }
  },
  {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
  }
);

observer.observe(gallery);

const jobs = document.getElementById('trabajos');
const windowJobs = document.getElementById('ventana-trabajos');
const data = [
  {
    id: '1',
    title: 'Trabajo #1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
  {
    id: '2',
    title: 'Trabajo #2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
  {
    id: '3',
    title: 'Trabajo #3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
  {
    id: '4',
    title: 'Trabajo #4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
  {
    id: '5',
    title: 'Trabajo #5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
  {
    id: '6',
    title: 'Trabajo #6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?',
    date: '27 Febrero de 2025',
  },
];

jobs.addEventListener('click', (e) => {
  e.preventDefault();

  //Checking if user clicks a job pic
  const jobClick = e.target.closest('.trabajos__trabajo');

  if (jobClick) {
    //obtaining the id of the clicked job pic
    const id = jobClick.dataset.id;
    const jobsFilter = data.filter((job) => {
      if (job.id === id) {
        return job;
      }
    });

    const { title, date, description } = jobsFilter[0];
    windowJobs.querySelector('.ventana__titulo').innerText = title;
    windowJobs.querySelector('.ventana__fecha').innerText = date;
    windowJobs.querySelector('.ventana__parrafo').innerText = description;
    windowJobs.querySelector('.ventana__imagen').src =
      jobClick.querySelector('img').src;
    windowJobs.classList.add('ventana--active');
  }
});

//Eventlistener to close the window img or overlay

windowJobs
  .querySelector('button[data-action="cerrar-ventana"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    windowJobs.classList.remove('ventana--active');
  });

windowJobs.querySelector('.ventana__overlay').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.matches('.ventana__overlay')) {
    windowJobs.classList.remove('ventana--active');
  }
});

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

const emailBtn = document.querySelectorAll(
  '[data-action="abrir-ventana-correo"]'
);
const mailWindow = document.getElementById('ventana-correo');

emailBtn.forEach((boton) =>
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    mailWindow.classList.add('ventana--active');
  })
);

// Eventlistener para cerrar ventana con el boton.
mailWindow
  .querySelector('button[data-action="cerrar-ventana"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    mailWindow.classList.remove('ventana--active');
  });

// Eventlistener para cerrar ventana con el overlay.
mailWindow.querySelector('.ventana__overlay').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.matches('.ventana__overlay')) {
    mailWindow.classList.remove('ventana--active');
  }
});

const animatedText = (element) => {
  const letterNumb = element.dataset.texto.length;

  //activating the pointer when animation starts.
  const pointer = element.querySelector('.hero__cursor');
  pointer.classList.add('hero__cursor--visible');

  //For each letter, we add it to the DOM with a 100ms delay.
  for (let i = 0; i < letterNumb; i++) {
    setTimeout(() => {
      const letter = document.createElement('span');
      letter.append(element.dataset.texto[i]);
      element.append(letter);
    }, 100 * i);
  }

  // We change the cursor class when the letter animation is finished.
  setTimeout(() => {
    // We get the cursors.
    const cursors = [...document.querySelectorAll('.hero__cursor')];

    // We get the index of the current cursor.
    const activeCursorIdx = cursors.indexOf(pointer);

    // We check that the cursor is not the last one.
    if (activeCursorIdx < cursors.length - 1) {
      pointer.classList.remove('hero__cursor--visible');
    } else {
      pointer.classList.add('hero__cursor--visible');
    }
  }, letterNumb * 100);

  //We return a promise to know when the animation has finished.
  return new Promise((resolve) => setTimeout(resolve, letterNumb * 100));
};

window.addEventListener('load', async () => {
  await animatedText(document.querySelector('.hero__titulo--uno'));
  await animatedText(document.querySelector('.hero__titulo--dos'));

  document
    .querySelectorAll('.hero__burbuja')[0]
    .classList.add('hero__burbuja--active-1');
  document
    .querySelectorAll('.hero__burbuja')[1]
    .classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
