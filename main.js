let button = document.getElementById("btn");

 button.addEventListener("click",
 function(){
    let main=document.querySelector("main")
    main.style.backgroundColor = "aqua";

    let container = document.getElementById("container");

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
