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

function addBookToLibrary() {
    let bookTitle = document.querySelector('.title').value;

    let bookAuthor = document.querySelector('.author').value;

    let bookPages = document.querySelector('.pages').value;

    let bookRead = document.querySelector('.read').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

// Connect browser form
let formSubmit = document.querySelector('.submit');
formSubmit.addEventListener("click", addBookToLibrary);
// formSubmit.addEventListener("click", function(e) {
//     e.preventDefault();

// display book on browser

