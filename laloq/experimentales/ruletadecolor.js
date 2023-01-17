let colors = ["Grey","red", "yellow", "Cyan", "blue", "red", "black", "Azure","Cyan", "green", "white", "Grey", "Azure",  "red", "black", "Yellow", "green", "red", "Azure", "white", "Cyan", "black", "Grey", "green", "red", "black", "white", "Azure", "green", "black", "red", "yellow", "Cyan", "red",  "Azure", "white", "red", "black", "Azure", "Yellow" ];
let i = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i >= colors.length) i = 0;
}, 400);

alert("Bienvenido a SlQ, aquí encontraras Servicios y Productos Informáticos");
      