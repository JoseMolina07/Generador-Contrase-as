let Cantidad = document.getElementById('catidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
const caracteresEspeciales = '!@#$%^&*()';


function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    //console.log(numeroDigitado);

    if( numeroDigitado < 6){

        alert("La cantidad dev¿be ser mayor que 6");
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres[ Math.floor( Math.random() * cadenaCaracteres.length)];
    
        password +=  caracterAleatorio;
    } 

    let contieneCaracterEspecial = false;
    for (let i = 0; i < caracteresEspeciales.length; i++){
        if (password.includes(caracteresEspeciales[i])) {
            contieneCaracterEspecial = true;
            break;
        }
    }

        if (!contieneCaracterEspecial) {
            alert("La contraseña generada no contiene ningún carácter especial.");
        }
    
        contraseña.value = password;
}

    
function limpiar(){
contraseña.value = "";
}







