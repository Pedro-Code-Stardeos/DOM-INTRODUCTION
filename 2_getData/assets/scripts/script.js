const data = [];
const books = document.getElementsByClassName('book');

// console.log(books);

for (let i = 0; i < books.length; i++) {
	const book = books[i];
	// console.log(book);

	const title = book.querySelector('.book__title');
	const price = book.querySelector('.book__price');
	const availability = book.querySelector('.book__availability');

	// console.log(title.textContent);
	// console.log(availability.textContent);
	// console.log(price.textContent);

	data.push({
		title: title.textContent,
		price: price.textContent,
		availability: availability.textContent,
	});
}

// All books
console.log(data);

// Available books
const disponibles = data.filter((book) => book.availability === 'Disponible');
console.log(disponibles);
