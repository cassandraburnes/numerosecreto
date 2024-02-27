let numerosecreto = 0;
let intentos = 0;
let listanumerosorteados = [];
let numeromaximo = 10;

// FUNCIONES = encapsula para hacer una accion

function asignartextoelemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento()
{
    // let numerousuario = document.getElementById() - RETORNA EL OBJETO
    let numerousuario = parseInt(document.getElementById('valordeusuario').value);

    if (numerousuario === numerosecreto)
    {
        asignartextoelemento ('p',`Acertaste el numero en ${intentos} ${intentos===1 ? 'intento' : 'intentos'}`);
        //REMOVER DISABLE EN BOTON con id
        document.getElementById('reiniciar').removeAttribute('disabled'); //remove espera 1 parametro
    }
    else
    {
        if (numerousuario>numerosecreto)
        {
            asignartextoelemento('p','El numero es menor');
        }
        else
        {
            asignartextoelemento('p','El numero es mayor');
        }
        intentos ++;
        limpiarcaja();
    }
    return;
}

// function asignartextoelemento()
// {
//     let titulo = document.querySelector('h1');
//     titulo.innerHTML = 'Juego del numero secreto';
// }

// function asignartextoelemento()
// {
//     let titulo = document.querySelector('h1');
//     titulo.innerHTML = 'Juego del numero secreto';
// }

// // DEFINIR PARAMETROS
// asignartextoelemento('h1','Juego del numero secreto!');
// asignartextoelemento('p','Indica el numero de 1 al 10');

function limpiarcaja()
{
    document.querySelector('#valordeusuario').value = ''; //se llama al id con #, se agrega value y se cambia por '' para vaciar la caja
}

function generarnumerosecreto()
{
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numerogenerado);
    console.log(listanumerosorteados);
    //si ya se sortearon todos los numeros
    if (listanumerosorteados.length == numeromaximo)
    {
        asignartextoelemento('p','Se han sorteado todos los numeros');
    }else
    {        
        // Verifica si el número generado ya está en la lista de números sorteados
    if (listanumerosorteados.includes(numerogenerado))
    {
        // Si el número ya está en la lista, llama recursivamente a la función para generar otro número único
        return generarnumerosecreto();
    } else
    {
        // Si el número no está en la lista, lo agrega a la lista de números sorteados
        listanumerosorteados.push(numerogenerado);
        return numerogenerado;
    }
    }
}

function condicionesiniciales()
{
    asignartextoelemento('h1','Juego del numero secreto!');
    asignartextoelemento('p',`Indica el numero de 1 al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto(); //llamar de nuevo a la funcion
    intentos = 1;
}

function reiniciarjuego()
{
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesiniciales();
    //deshabilitar nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    //remove espera 1 parametro, set(colocar) son 2 parametros
}

condicionesiniciales();
console.log(numerosecreto);