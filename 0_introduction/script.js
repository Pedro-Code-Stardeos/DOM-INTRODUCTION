// Obtener un elemento por su tag HTML
const titulo = document.getElementsByTagName('h1')[0];
titulo.innerText = 'Nuevo titulo';
// console.log(titulo);

// Obtener un elemento por su clase
const parrafos = document.getElementsByClassName('paragraph');
// console.log(parrafos);

// Obtener todos los elementos que conicidan con un selector css
const todosLosParrafos = document.querySelectorAll('p.paragraph');
// console.log(todosLosParrafos);

// Obtener el primer elemento que coincida con un selector css
const primerParrafo = document.querySelector('p.paragraph');
// console.log(primerParrafo);

// Obtener un elmento por su ID
const parrafoUnico = document.getElementById('unique-id');
// console.log(parrafoUnico);

// Modificar clases de un elemento
parrafoUnico.classList.add('red');
parrafoUnico.classList.remove('red');

parrafoUnico.classList.toggle('red');
parrafoUnico.classList.toggle('red');

// Modificar estilos de un elemento
parrafoUnico.style.margin = '20px';
parrafoUnico.style.backgroundColor = 'blue';

// Elminar un elemento del DOM
parrafoUnico.remove();

// Agregar un elemento al DOM
const body = document.getElementsByTagName('body')[0];

const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = 'Este es el nuevo parrafo';

body.appendChild(nuevoParrafo);

// Escuchar el evento click
titulo.addEventListener('click', () => {
	alert('Click');
});
