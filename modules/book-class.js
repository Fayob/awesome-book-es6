const viewSection = document.querySelector('#view_section');

export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static showBook() {
    const books = Book.getStoredBooks();

    books.forEach((book) => Book.addBookToList(book));
  }

  static addBookToList(book) {
    const newBook = document.createElement('article');
    newBook.className = 'new_book';
    newBook.innerHTML = `
      <p class="paragraph">${book.title} by ${book.author}</p>
      <button id=${book.id} class='remove_button'>Remove</button>
      `;
    viewSection.append(newBook);
  }

  static removeBook(book) {
    if (book.classList.contains('remove_button')) {
      book.parentElement.remove();
    }
  }

  static clearValues() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getStoredBooks() {
    let books;
    if (localStorage.getItem('localBook') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('localBook'));
    }
    return books;
  }

  static addBookToLocalStorage(book) {
    const books = Book.getStoredBooks();

    books.push(book);
    localStorage.setItem('localBook', JSON.stringify(books));
  }

  static removeBookFromLocalStorage(id) {
    const books = Book.getStoredBooks();

    const newBook = books.filter((book) => book.id !== +id);

    localStorage.setItem('localBook', JSON.stringify(newBook));
  }
}
