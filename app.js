const boton_switch = document.querySelector('.switch_mode')
const parrafos = document.querySelectorAll('p')
const about = document.querySelector('#header_list li.About');
const alarado_image = document.getElementById('alarado_image')
const nav = document.querySelector("#nav")
const abrir = document.querySelector("#open_menu")
const cerrar =document.querySelector("#close_menu")


boton_switch.addEventListener('click',() => {
  document.body.classList.toggle('dark');
  boton_switch.classList.toggle('active');
  about.classList.toggle('dark');
  nav.classList.toggle('dark');
  cerrar.classList.toggle('dark');
  abrir.classList.toggle('dark_menu');

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

abrir.addEventListener('click', () =>{
  nav.classList.add('extended');
  cerrar.classList.add('extended');
  boton_switch.classList.add('boton_menu');
})

cerrar.addEventListener('click', () =>{
  nav.classList.remove('extended');
  cerrar.classList.remove('extended');
  boton_switch.classList.remove('boton_menu');
})