/*Redireccionar la página haciendo click en el boton "conoce más" */

const btn = document.getElementById('boton')

const redireccionar = function () {
    location.href = 'http://www.google.com';
}

/*Cambia de color el boton 'conoce más' a rojo haciendo click en el mismo */
const color = document.getElementById('boton')

btn.addEventListener('click', function () {
    redireccionar(),
        color.style.backgroundColor = 'red';
})

/* Cambia el color de la página a rosado haciendo click en cualquier parte del body*/

document.querySelector('body').addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})


/* Uso del evento resize, tamaño de la página. Si la pagina es menor a 600 px el backgraond se transforma en color rojo*/

const parr = document.getElementById('pale')

window.addEventListener('resize', function () {
    /*parr.innerText=*/console.log('El página es de: ' + window.outerHeight + 'px de alto' + window.outerWidth + 'px de ancho')
    if (window.outerWidth < 600) {
        document.body.style.backgroundColor = 'red'
    }
})

const nombre = "EducacionIT";
console.log(nombre.length);

for (let i = 0; i < nombre.length; i++) {
    let letra = nombre[i]
    let codigo = letra.charCodeAt()
    //UNICODE "a" = 97​
    //UNICODE "b" = 98​
    //...
    //UNICODE "z" = 122
    if (codigo >= 97 && codigo <= 122) {
        console.log("El caracter es una letra minúscula válida!")
    } else {
        console.error("El caracter no es una letra minúscula!")
    }
}





