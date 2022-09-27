const bookList = document.querySelector('.book_lists');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact_info');
const listNav = document.querySelector('.list');
const addNav = document.querySelector('.new');
const contactNav = document.querySelector('.contact');

const lists = listNav.addEventListener('click', () => {
  listNav.classList.add('active');
  addNav.classList.remove('active');
  contactNav.classList.remove('active');
  bookList.classList.remove('hidden');
  form.classList.add('hidden');
  contact.classList.add('hidden');
});

const adds = addNav.addEventListener('click', () => {
  addNav.classList.add('active');
  listNav.classList.remove('active');
  contactNav.classList.remove('active');
  form.classList.remove('hidden');
  bookList.classList.add('hidden');
  contact.classList.add('hidden');
});

const contacts = contactNav.addEventListener('click', () => {
  contactNav.classList.add('active');
  listNav.classList.remove('active');
  addNav.classList.remove('active');
  contact.classList.remove('hidden');
  form.classList.add('hidden');
  bookList.classList.add('hidden');
});

export default { lists, adds, contacts };