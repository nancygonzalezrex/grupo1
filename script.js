// 1. Buscamos los elementos
const boton = document.getElementById('miBoton');
const lista = document.getElementById('miLista');

// 2. Agregamos la función al hacer click
boton.addEventListener('click', () => {
    
    // Alternamos la clase 'hidden'
    lista.classList.toggle('hidden');

    // Cambiamos el texto del botón
    if (lista.classList.contains('hidden')) {
        boton.textContent = "Ver Estudiantes";
    } else {
        boton.textContent = "Ocultar Lista";
    }
});