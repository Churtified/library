const libraryContainer = document.querySelector('.libraryContainer');

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    e.preventDefault();
    myLibrary.push(newBook);
    displayNewBook(myLibrary[myLibrary.length - 1]);
});

let myLibrary = [];

//Constructor for Book
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
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
    
    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = "Remove";

    bookContainer.appendChild(showTitle);
    bookContainer.appendChild(showAuthor);
    bookContainer.appendChild(showPages);
    bookContainer.appendChild(showRead);
    bookContainer.appendChild(removeButton);
}