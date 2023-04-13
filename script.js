/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  const librarEl = document.querySelector('#library');
  librarEl.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement('div');
    bookEl.setAttribute('class', 'book-card');
    bookEl.innerHTML = `
    <div class = "card-header">
        <h3 class = "title">${book.title}</h3>
        <h5 class = "author"> ${book.author}</h5>
    </div>
    <div class = "card-body">
        <p class = "pages">${book.pages} pages</p>
        <p class = "read-status">${book.read ? 'Read' : 'Not Read Yet'}</p>
        <button class = "remove-btn" onclick ="removeBook(${i})">Remove</button>
        <button class = "toggle-read" id = "toggle-btn" onclick = "toggleRead(${i})">Read</button>
    </div>
    `;
    librarEl.appendChild(bookEl);
  }
}

// eslint-disable-next-line no-unused-vars
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

// eslint-disable-next-line func-names
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookbtn = document.querySelector('#add-btn');
newBookbtn.addEventListener('click', () => {
  const newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'flex';
});

document.querySelector('#new-book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  const newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'none';
});
