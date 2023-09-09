function iniciar(){
    var boton= document.getElementById("grabar");
    boton.addEventListener("click", nuevoitem);
    Mostrar();
}
function nuevoitem(){
    var clave= document.getElementById("clave").value;
    var valor=document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
    Mostrar();
}
function Mostrar(){
    var cajadatos= document.getElementById("cajadatos");
    cajadatos.innerHTML='<div><input type="button" onclick="borratodo()" value="Borrar todo"></div>';
    for(var i=0; i< sessionStorage.length; i++){
         var clave= sessionStorage.key(i);
         var valor= sessionStorage.getItem(clave);
         cajadatos.innerHTML+="<div>"+ clave+"-"+ valor +"</div";
         cajadatos.innerHTML+='<div><input type="button" onclick="borraritem(\''+ clave+'\')" value="Borrar Item"> </div>';
    }
}
function borratodo(){
    if(confirm("Estas seguro que deseas borrar TODO"))
    {
        sessionStorage.clear();
        Mostrar();
    }
}
function borraritem(clave){
    if(confirm("Estas seguro que deseas borrar el ITEM"))
    {
        sessionStorage.removeItem(clave);
        Mostrar();
    }
}
window.addEventListener("load",iniciar);