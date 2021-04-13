let bookForm = document.querySelector('.form');
let addNewBook = document.querySelector('button');

// Event listener for clicking Add new book button to dsipaly form.
addNewBook.onclick = function () {
    bookForm.style.display = 'block';
};

// Book object constructor
function Book(title, author, pages, read=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

// Library array

let myLibrary = [];

// Add new book to Library array

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}