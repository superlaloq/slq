var miTitulo=document.querySelector('h1');
miTitulo.innerHTML="Hola amigos";
var Titulo2=document.querySelector('h2')
Titulo2.innerHTML="<img src='img\img1.jpg'>";

function saludar(){
    alert("Bienvenido")
}
function function2(variable){
//    console.log(variable);
    // console.dir(variable);
    console.dir(miTitulo);
if(variable.className=='rojo') {
    variable.className= "azul";
    miTitulo.style.color="red";
}else{
    variable.className="rojo";
    miTitulo.style.color="blue";
}

    }