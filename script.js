const libraryContainer = document.querySelector('.libraryContainer');

let myLibrary = ["new book 1", "new book 2"];

for (let i = 0; i < myLibrary.length; i++) {
    let displayLibrary = document.createElement('p');
    displayLibrary.classList.add('displayLibrary');
    displayLibrary.textContent = myLibrary[i];

    libraryContainer.appendChild(displayLibrary);
}

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
    let showTitle = document.createElement('p');
    showTitle.classList.add('showTitle');
    showTitle.textContent = latestBook.title;

    let showAuthor = document.createElement('p');
    showAuthor.classList.add('showAuthor');
    showAuthor.textContent = latestBook.author;

    let showPages = document.createElement('p');
    showPages.classList.add('showPages');
    showPages.textContent = latestBook.pages;
    
    let showRead = document.createElement('p');
    showTitle.classList.add('showRead');
    showRead.textContent = latestBook.read;

    libraryContainer.appendChild(showTitle);
    libraryContainer.appendChild(showAuthor);
    libraryContainer.appendChild(showPages);
    libraryContainer.appendChild(showRead);
}