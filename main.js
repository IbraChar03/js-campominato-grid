let button = document.getElementById("btn");

 button.addEventListener("click",
 function(){
    let difficolta = document.getElementById("diff").value;
    let main = document.querySelector("main")
    main.style.backgroundColor = "#D6E4E5";

    let container = document.getElementById("container");

    if (difficolta === "Facile"){
        document.getElementById("container").innerHTML = ""
        for(i = 1; i <= 100; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(10% - 10px)";
            let num = elemento.innerHTML = i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                elemento.classList.toggle("color");
                console.log(num);
                
             }
            
            );
            
        }  
      
   
    }
    
    else if (difficolta === "Medio"){
        document.getElementById("container").innerHTML = ""
        for(i = 1; i <= 81; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(11% - 10px)";
            let num = elemento.innerHTML = i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                elemento.classList.toggle("color");
                console.log(num);

             }
            
            );
             
        }         
        
    }

    else if (difficolta === "Difficile"){
        document.getElementById("container").innerHTML = ""
        for(i = 1; i <= 49; i++ ){
            let elemento = nuovoElemento();
            elemento.style.width="calc(13% - 10px)";
            let num = elemento.innerHTML = i;
            container.append(elemento);
             
            elemento.addEventListener("click",
             function(){
                elemento.classList.toggle("color");
                console.log(num);
             }
            
            );
    
        }  
        
    }
 }

 );
 

function nuovoElemento(){
     let nElemento = document.createElement("div");
     nElemento.classList.add("box");
     return nElemento;
}


