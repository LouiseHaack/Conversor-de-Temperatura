var valorTemperatura;
var valorTemp1;
var valorTemp2;
var valorConverter;

function calcular(){
    valorTemperatura=document.getElementById("temperatura").value;
    valorTemp1=document.getElementById("temp1").value;
    valorTemp2=document.getElementById("temp2").value;


    //Conversões Celsius

    if(valorTemp1 == '°C' && valorTemp2 == '°F'){
        valorConverter = (valorTemperatura * 1.8)+32;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°C' && valorTemp2 == '°R'){
        valorConverter = (valorTemperatura + 273.15) * 9/5;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°C' && valorTemp2 == '°K'){
        valorConverter = (valorTemperatura + 273.5);
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    //Conversões Ferenheit

    if(valorTemp1 == '°F' && valorTemp2 == '°C'){
        valorConverter = (valorTemperatura - 32)/1.8;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°F' && valorTemp2 == '°R'){
        valorConverter =  (valorTemperatura  - 459.67);
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°F' && valorTemp2 == '°K'){
        valorConverter = (valorTemperatura - 32) * 5/9 + 273.15;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    //Conversões Rankine 

    if(valorTemp1 == '°R' && valorTemp2 == '°C'){
        valorConverter = (valorTemperatura * 5/9) - 273.15;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°R' && valorTemp2 == '°F'){
        valorConverter = valorTemperatura + 459.67;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°R' && valorTemp2 == '°K'){
        valorConverter = valorTemperatura / 1.8;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    //Conversões Kelvin

    if(valorTemp1 == '°K' && valorTemp2 == '°C'){
        valorConverter = valorTemperatura - 273.15;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°K' && valorTemp2 == '°F'){
        valorConverter = (valorTemperatura - 273.15) * 9/5 + 32;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

    if(valorTemp1 == '°K' && valorTemp2 == '°R'){
        valorConverter = valorTemperatura * 1.8;
        document.getElementById("converter").value = valorConverter;
        console.log(valorConverter)
        document.getElementById("converter").value = valorConverter;
    }

}

function limpar(){
    document.getElementById("temperatura").value = '';
    document.getElementById("converter").value = '';
}