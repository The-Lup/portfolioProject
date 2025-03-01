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
