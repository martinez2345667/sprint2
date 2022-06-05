const Nombres=[];
let suma=0;
function capturar(){
    let nomb=document.getElementById("nombres").value;
    let gast=document.getElementById("gastos").value;
    return{nombre:nomb, gasto:gast}    
    } function crearP(datos){
        let Elemento=document.getElementById("listaDatos")
        let p = document.createElement("p");
        let pTexto = document.createTextNode(`${datos.nombre}` + " pagó $" + `${datos.gasto}`);
        p.appendChild(pTexto);
        Elemento.appendChild(p);
    }
    document.getElementById("boton").onclick=function(){
        Nombres.push(capturar());
        crearP(capturar());
        console.log(suma)
        suma= suma + parseInt(capturar().gasto);
        console.log(suma)
        document.getElementById("suma").innerHTML= " $" + suma;
        document.getElementById("promedio").innerHTML= " $" + suma/Nombres.length;
    };
    
