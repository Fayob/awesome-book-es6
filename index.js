import Book from './modules/book-class.js';
import * as navBarLinks from './modules/nav_bars.js';

const viewSection = document.querySelector('#view_section');

document.addEventListener('DOMContentLoaded', Book.showBook);

document.querySelector('.button').addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Math.floor(Math.random() * 10000000);

  if (title === '' || author === '') {
    alert('Please fill in the fields');
    return;
  }

  const book = new Book(title, author, id);

  Book.addBookToList(book);

  Book.addBookToLocalStorage(book);

  Book.clearValues();
});

viewSection.addEventListener('click', (e) => {
  Book.removeBook(e.target);

  Book.removeBookFromLocalStorage(e.target.id);
});

navBarLinks();