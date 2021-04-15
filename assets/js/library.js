const bookForm = document.querySelector('.form');
const addNewBook = document.querySelector('#add-book');
const submit = document.querySelector('.submit');

addNewBook.onclick = () => {
  bookForm.style.display = 'block';
};

submit.onclick = () => {
  bookForm.style.display = 'none';
};

// Book object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Library array

const myLibrary = [];


// display book on browser

function displayBook() {
  document.querySelector('#book-container').innerHTML = '';
  let i = 0;
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'card');
    const titleparagraph = document.createElement('p');
    const titleText = document.createTextNode(`Title: ${book.title}`);
    titleparagraph.appendChild(titleText);

    const authorparagraph = document.createElement('p');
    const authorText = document.createTextNode(`Author: ${book.author}`);
    authorparagraph.appendChild(authorText);

    const pageparagraph = document.createElement('p');
    const pageText = document.createTextNode(`Pages: ${book.pages}`);
    pageparagraph.appendChild(pageText);

    const readparagraph = document.createElement('p');
    const readText = document.createTextNode(`Read: ${book.read}`);
    readparagraph.appendChild(readText);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger');
    const deleteBook = document.createTextNode('Delete Book');
    deleteButton.id = i;

    deleteButton.addEventListener('click', () => {
      myLibrary.splice(deleteButton.id, 1);
      displayBook();
    });

    deleteButton.appendChild(deleteBook);

    const readButton = document.createElement('button');
    readButton.setAttribute('class', 'btn btn-primary');
    const readBook = document.createTextNode('Read');
    readButton.appendChild(readBook);

    readButton.id = i;
    readButton.addEventListener('click', function readMe() {
      const status = myLibrary[this.id].read;

      if (status === 'Yes') {
        myLibrary[this.id].read = 'No';
      } else {
        myLibrary[this.id].read = 'Yes';
      }

      displayBook();
    });


    bookDiv.appendChild(titleparagraph);
    bookDiv.appendChild(authorparagraph);
    bookDiv.appendChild(pageparagraph);
    bookDiv.appendChild(readparagraph);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteButton);

    const bookContainer = document.getElementById('book-container');
    bookContainer.appendChild(bookDiv);

    i += 1;
  });
}

// Add new book to Library array

function addBookToLibrary() {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const bookPages = document.querySelector('.pages').value;
  const paragraph404 = document.getElementsByClassName('bg-danger')[0];
  let bookRead;

  if (document.querySelector('.form-check-input').checked) {
    bookRead = 'Yes';
  } else {
    bookRead = 'No';
  }

  if (bookTitle && bookAuthor && bookPages && bookRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);

    displayBook();

    bookForm.removeChild(paragraph404);
  } else {
    bookForm.style.display = 'block';
    const errorMessage = document.createElement('p');
    const errorText = document.createTextNode('Text field cannot be empty. Insert a value.');
    errorMessage.setAttribute('class', 'text-light bg-danger my-3');
    errorMessage.appendChild(errorText);
    bookForm.appendChild(errorMessage);
  }
}

// Connect browser form
const formSubmit = document.querySelector('.submit');
formSubmit.addEventListener('click', addBookToLibrary);
