let bookForm = document.querySelector('.form');
let addNewBook = document.querySelector('button');

// Display new book form after clicking Add new book button
addNewBook.onclick = function () {
    bookForm.style.display = 'block';
};

