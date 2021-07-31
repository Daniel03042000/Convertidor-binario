var input = document.getElementById('entrada');
var result = document.getElementById('resultado');
var inputType = document.getElementById('opcion1');
var resultType = document.getElementById('opcion2');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//Toma el valor inicial
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

    //result.value = input.value;
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue ==="decimal" && resultTypeValue ==="binario"){

        //El metodo to string facilita la conversión en bases de una manera muy rápida
        result.value = Number(input.value).toString(2);
    }
    else if(inputTypeValue ==="decimal" && resultTypeValue ==="octal"){

        //El metodo to string facilita la conversión en bases de una manera muy rápida
        result.value = Number(input.value).toString(8);
    }
    else if(inputTypeValue ==="decimal" && resultTypeValue ==="hexadecimal"){

        //El metodo to string facilita la conversión en bases de una manera muy rápida
        result.value = Number(input.value).toString(16);
    }
    else if(inputTypeValue ==="decimal" && resultTypeValue ==="decimal"){

        result.value = input.value;
    }
//-----------------------------------------------------------------------------------------
    else if(inputTypeValue ==="binario" && resultTypeValue ==="binario"){

        result.value = input.value;
    
    }
    else if(inputTypeValue ==="binario" && resultTypeValue ==="decimal"){
        //Hacia decimal
        conversion = parseInt(input.value,2);
        result.value = conversion;
    }
    else if(inputTypeValue ==="binario" && resultTypeValue ==="octal"){
        //Hacia decimal
        conversion = parseInt(input.value,2);
        result.value = conversion.toString(8);
    }
    else if(inputTypeValue ==="binario" && resultTypeValue ==="hexadecimal"){
        //Hacia decimal
        conversion = parseInt(input.value,2);
        result.value = conversion.toString(16);
    }
    //-----------------------------------------------------------------------------------------
    else if(inputTypeValue ==="octal" && resultTypeValue ==="octal"){

        result.value = input.value;
    
    }
    else if(inputTypeValue ==="octal" && resultTypeValue ==="decimal"){
        //Hacia decimal
        conversion = parseInt(input.value,8);
        result.value = conversion;
    }
    else if(inputTypeValue ==="octal" && resultTypeValue ==="binario"){
        //Hacia decimal
        conversion = parseInt(input.value,8);
        result.value = conversion.toString(2);
    }
    else if(inputTypeValue ==="octal" && resultTypeValue ==="hexadecimal"){
        //Hacia decimal
        conversion = parseInt(input.value,8);
        result.value = conversion.toString(16);
    }
    //-----------------------------------------------------------------------------------------
    else if(inputTypeValue ==="hexadecimal" && resultTypeValue ==="hexadecimal"){

        result.value = input.value;
    
    }
    else if(inputTypeValue ==="hexadecimal" && resultTypeValue ==="decimal"){
        //Hacia decimal
        conversion = parseInt(input.value,16);
        result.value = conversion;
    }
    else if(inputTypeValue ==="hexadecimal" && resultTypeValue ==="binario"){
        //Hacia decimal
        conversion = parseInt(input.value,16);
        result.value = conversion.toString(2);
    }
    else if(inputTypeValue ==="hexadecimal" && resultTypeValue ==="octal"){
        //Hacia decimal
        conversion = parseInt(input.value,16);
        result.value = conversion.toString(8);
    }
    


    
    


}