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

// create new card on browser


// const displayBooks = () => {
//     myLibrary.forEach((book) => {
//       const bookDiv = document.createElement('DIV');
//       bookDiv.setAttribute('data-index', idx);
  
//       let info = document.createTextNode(book.info());
  
//       const deleteBtn = document.createElement('BUTTON');
//       deleteBtn.appendChild(document.createTextNode('DELETE BOOK'));
  
//       const readBtn = document.createElement('BUTTON');
//       readBtn.appendChild(document.createTextNode('TOGGLE READ'));
  
//       bookDiv.appendChild(info);
//       bookDiv.appendChild(document.createElement('BR'));
//       bookDiv.appendChild(readBtn)
//       bookDiv.appendChild(deleteBtn);
  
//       displayBooksDiv.appendChild(bookDiv);
  
//       deleteBtn.addEventListener('click', () => library.splice(idx, 1));
//       readBtn.addEventListener('click', () => library[idx].read === 'true' ? library[idx].read = 'false' : library[idx].read = 'true');
//     });
//   };

// display book on browser

