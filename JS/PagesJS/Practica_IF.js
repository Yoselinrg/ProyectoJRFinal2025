console.log(`Funcionando Archivo: Practica_IF`);


//Caso 1
function verificarEdad() {

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IFELSE
    
    if (edad >= 18) {

        alert(`Eres mayor de edad en ${pais} `)
    } else {
        
        alert(`No eres mayor de edad en ${pais}`)
    }
    
}

function verificarParImpar() {

    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        
       document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es par`;
    } else {
        document.getElementById('mensajeParImpar').innerText = `El numero ${numeroconvertido} es Impar`;
    }

    console.log(numeroconvertido)
}


function evaluarNota() {
    
    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

    //mayor de 90 excelente nota
    //mayor a 70 aprobado 
    //menor 70 reprobado 
    if (numeroconvertido >= 90) {
       // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if(numeroconvertido >= 70){
       // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }     
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}

//parse int
//parseFloat decimales
//monto * 0.9


    function calcularDescuento() {
        let monto = document.getElementById('monto') ;
        let numeroConvertido = parseFloat(monto);
        console.log(numeroConvertido)

        if (numeroConvertido * 0.9 >= 10) {
           
             document.getElementById('mensajecalcularDescuento').innerText = `calcular Descuento`;
         }
         else if(numeroConvertido >= 90){
            
             document.getElementById('mensajecalcularDescuento').innerText = ` El número ${numeroConvertido} aplica descuento`;
         }     
         else {
           
             document.getElementById('mensajecalcularDescuento').innerText = ` El número ${numeroConvertido}  No aplica descuento`;
         }
    
        }

    function verificarMayorMenor() {
        let edad = parseInt(document.getElementById('edadSimple').value);
    
        console.log(edad);
    
        if (edad >= 18) {
            alert(`Eres mayor de edad ${edad} `)
        } else {
            alert(`Eres menor de edad ${edad} `)
        }
    }

