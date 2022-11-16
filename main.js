let button = document.getElementById("btn");
let container=document.getElementById("container");
for(i=1;i<=100;i++){
    let elemento= nuovoElemento();
     elemento.innerHTML=i;
     elemento.addEventListener("click",
     function(){
        elemento.classList.toggle("color")
     }
     
     );

     container.append(elemento);
}


function nuovoElemento(){
    let nElemento=document.createElement("div");
    nElemento.classList.add("box");
    return nElemento;
}