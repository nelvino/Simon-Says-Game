const colores = ['red', 'green', 'blue', 'yellow']
let secuenciaMaquina = [];
let secuenciaUsuario = [];
const $paneles = document.querySelectorAll('.panel');

$paneles.forEach(($panel) => {
  $panel.addEventListener('click', inputUsuario);
});

function reset(){
  secuenciaMaquina = [];
  secuenciaUsuario = [];
  init();
}

function perdiste(){
  alert('Perdiste por puto!')
  reset()
}

function inputUsuario(e){
  const selectedColor = e.target.id;
  secuenciaUsuario.push(selectedColor);

  if(selectedColor !== secuenciaMaquina[secuenciaUsuario.length-1]){
    perdiste();
  }

  if(secuenciaUsuario.length === secuenciaMaquina.length){
    turnoMaquina();
  }
};



function getRandomColor(colores){
 return colores[Math.floor(Math.random() * colores.length)];
}

function turnoMaquina(){
  secuenciaUsuario = [];
  const colorRandom = getRandomColor(colores);
  secuenciaMaquina.push(colorRandom);
  console.log(secuenciaMaquina);
}

function init(){
  turnoMaquina();
}

init();

// Tarea: Bloquear input de usuario cuando juega la máquina

// Tarea: Hacer que la máquina pueda mostrar su selección en cada turno