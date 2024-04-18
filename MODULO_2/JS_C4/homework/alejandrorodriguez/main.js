const edad= Number(prompt("Digita tu edad por favor "));

if(edad <= 12 && edad> 0){
    document.write("Eres un niño");
    }
    else if(edad > 12 && edad <= 17){
        document.write("Eres un adolecente");
    }
    else if(edad >=18 && edad<=64) {
        document.write("Eres adulto");
    }
    else if(edad> 64 && edad< 102){
        document.write("Eres un adulto mayor");
    }
    else{
        document.write(" <br>Dame un dato valido");
    }



