let button = document.getElementById("btn");

 button.addEventListener("click",
 function(){
     let container = document.getElementById("container");
     container.style.backgroundColor = "aqua";

     for(i = 1; i <= 100; i++ ){
         let elemento = nuovoElemento();
          elemento.innerHTML = i;
          container.append(elemento);
          
          elemento.addEventListener("click",
          function(){
             elemento.classList.toggle("color")
          }
         
          );
         
     }  
 }

 );


 function nuovoElemento(){
     let nElemento = document.createElement("div");
     nElemento.classList.add("box");
     return nElemento;
 }
