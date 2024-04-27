const boton_switch = document.querySelector('.switch_mode')
const parrafos = document.querySelectorAll('p')
const about = document.querySelector('#header_list li.About');
const alarado_image = document.getElementById('alarado_image')

boton_switch.addEventListener('click',() => {
  document.body.classList.toggle('dark');
  boton_switch.classList.toggle('active');
  about.classList.toggle('dark');

  parrafos.forEach(parrafo => {
    parrafo.classList.toggle('dark');
  });

  if (document.body.classList.contains('dark')) {
    alarado_image.src = 'Resources/alarado-icon-homepage-dark.svg';
    alarado_image.alt = 'Icono en modo oscuro';
    
  } else {
  
    alarado_image.src = 'Resources/alarado-icon-homepage.svg';
    alarado_image.alt = 'Icono en modo claro';
  }
});



