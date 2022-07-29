{
	/* 
    <div class='box'>
        <div class='box__buttons'>
            <button class='btn remove-box'>Remove</button>
            <button class='btn change-box-color'>Color</button>
        </div>
    </div>;
 */
}

// Acceder a los elementos
const boxesContainer = document.getElementsByClassName('boxes-container')[0];
const addButton = document.getElementById('add-box');

// console.log(boxesContainer);
// console.log(addButton);

// Escuchar el evento click sobre el boton para agregar un nueva caja
addButton.addEventListener('click', () => {
	// Crear la caja
	const box = document.createElement('div');
	box.classList.add('box');

	// Crear el contenedor de los botones
	const buttonsContainer = document.createElement('box__buttons');
	buttonsContainer.classList.add('box__buttons');

	// Crear los botones
	const removeButton = document.createElement('button');
	const changeColorButton = document.createElement('button');
	removeButton.classList.add('btn', 'remove-box');
	changeColorButton.classList.add('btn', 'change-box-color');
	removeButton.innerText = 'Remove';
	changeColorButton.innerText = 'Color';

	// Crear la estructura
	buttonsContainer.appendChild(removeButton);
	buttonsContainer.appendChild(changeColorButton);
	box.appendChild(buttonsContainer);
	boxesContainer.appendChild(box);

	// Eventos para los botones de color y eliminar
	changeColorButton.addEventListener('click', (e) => {
		// box.classList.toggle('box--blue');
		const parent = e.target.parentElement.parentElement;
		parent.classList.toggle('box--blue');
	});

	removeButton.addEventListener('click', (e) => {
		const parent = e.target.parentElement.parentElement;
		parent.remove();
	});
});
