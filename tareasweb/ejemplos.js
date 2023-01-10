// en este bloque de constantes definire un menú
const header  = document.createElement((´header´); // la cabecera
const nav = document.createElement(´nav´); // elemento de navegacion
const ul = document.createElement(´ul´); // elemento lista desordenada
const body = document.createElement(´root´); // una raiz
const link1 = document.createElement(´a´) // crea un link
anchor1.innerHTML = ´inicio´;

const body = Document.getElementByid(´root´); // llamada a la id raiz

body.appendChile(header); // ten un hijo cabecera
header.appendChile(nav); // ten un hijo navegador
nav.appendChile(ul); // ten un hijo listado desordenado
ul.appendChile(link1)
link1.appendChile(anchor1)



