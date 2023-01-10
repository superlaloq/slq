// const nav = document.createElement("nav");
//const div = document.createElement("div"); 
//const menu = document.createElement("ul"); // metodo para crear elementos HTML

//const item1 = document.createElement("li"); 
//item1.textContent = "opción 1"; // estableser el contenido a la lista
//menu.appendChild(item1); // agregar cada elemento de la lista al menu


//const item2 = document.createElement("li");
//item2.textContent = "opción 2";
//menu.appendChild(item2);


//const item3 = document.createElement("li");
//item3.textContent = "opción 3";
//menu.appendChild(item3);

//document.body.appendChild(menu);// muestra el menu en el body
//


// Se ha creado una nueva variable nav para agregar la navegación a la página.
const nav = document.createElement("nav"); 
// Se ha creado una nueva variable div para agregar un contenedor para el menú.
const div = document.createElement("div"); 
// Se ha creado una nueva variable menu para agregar la lista de elementos del menú.
const menu = document.createElement("ul"); 

// Se han creado tres nuevas variables (item1, item2, item3) para cada elemento del menú.
// Establecer contenido a cada elemento de la lista.
const item1 = document.createElement("li");
item1.textContent = "opción 1"; 

const item2 = document.createElement("li");
item2.textContent = "opción 2";

const item3 = document.createElement("li");
item3.textContent = "opción 3";

// Agregar cada elemento de la lista al menú.
menu.appendChild(item1);
menu.appendChild(item2);
menu.appendChild(item3);

// Agregar el menú al contenedor.
div.appendChild(menu);
// Agregar el contenedor a la navegación.
nav.appendChild(div);
// Agregar la navegación al body.
document.body.appendChild(nav);






