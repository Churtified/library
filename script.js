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
    
    let readButton = document.createElement('button');
    readButton.classList.add('readButton');
    if(latestBook.read === "no") {
        readButton.textContent = 'Not Read';
        readButton.style.backgroundColor = '#FF0000';
    }
    else {
        readButton.textContent = 'Read';
        readButton.style.backgroundColor = '#7CFC00';
    }
    readButton.addEventListener('click', (e) => {
        latestBook.read = !latestBook.read;
        if(latestBook.read === false) {
            readButton.textContent = 'Not Read';
            readButton.style.backgroundColor = '#FF0000';
        }
        else {
            readButton.textContent = 'Read';
            readButton.style.backgroundColor = '#7CFC00';
        }
    })
    
    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(latestBook), 1);
        bookContainer.removeChild(showTitle);
        bookContainer.removeChild(showAuthor);
        bookContainer.removeChild(showPages);
        bookContainer.removeChild(readButton);
        bookContainer.removeChild(removeButton);
        libraryContainer.removeChild(bookContainer);
    });

    bookContainer.appendChild(showTitle);
    bookContainer.appendChild(showAuthor);
    bookContainer.appendChild(showPages);
    bookContainer.appendChild(readButton);
    bookContainer.appendChild(removeButton);
}