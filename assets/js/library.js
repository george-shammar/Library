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

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read === 'true' ? 'has read' : 'not read yet'}.`;
      };
};

// Library array

let myLibrary = [];

// Add new book to Library array

function addBookToLibrary() {
    let bookTitle = document.querySelector('.title').value;
    let bookAuthor = document.querySelector('.author').value;
    let bookPages = document.querySelector('.pages').value;
    let bookRead = document.querySelector('.read').value;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
};

// Connect browser form
let formSubmit = document.querySelector('.submit');
formSubmit.addEventListener("click", addBookToLibrary);



// display book on browser

function displayBook() {
    myLibrary.forEach(book => { 
        let bookDiv = document.createElement('div');
        
    }); 


};