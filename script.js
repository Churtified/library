const libraryContainer = document.querySelector('.libraryContainer');
const newBookButton = document.querySelector('.new-book-button');

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', addBookToLibrary);

let myLibrary = [];

//Constructor for Book
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `"${title}` + ", " + `${author}` + ", " + `${pages}` + ", " + `${read}"`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayNewBook(myLibrary[myLibrary.length - 1]);
}

function displayNewBook(latestBook) {
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('bookContainer');
    libraryContainer.appendChild(bookContainer);

    let showTitle = document.createElement('p');
    showTitle.classList.add('showTitle');
    showTitle.textContent = `Title: ${latestBook.title}`;

    let showAuthor = document.createElement('p');
    showAuthor.classList.add('showAuthor');
    showAuthor.textContent = `Author: ${latestBook.author}`;

    let showPages = document.createElement('p');
    showPages.classList.add('showPages');
    showPages.textContent = `Pages: ${latestBook.pages}`;
    
    let showRead = document.createElement('p');
    showTitle.classList.add('showRead');
    showRead.textContent = `Read Status: ${latestBook.read}`;

    bookContainer.appendChild(showTitle);
    bookContainer.appendChild(showAuthor);
    bookContainer.appendChild(showPages);
    bookContainer.appendChild(showRead);
}