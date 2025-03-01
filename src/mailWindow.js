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
