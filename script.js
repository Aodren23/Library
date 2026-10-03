const libraryContainer = document.querySelector(".library");
const read = document.querySelector("#status");
const form = document.querySelector("#form");
const book_display = document.querySelector(".book_display");
const dialog = document.querySelector("#my-form");
const closeBtn = document.querySelector("#close");
const myLibrary = [];

function Book(id, title, author, pages, status) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.changeStatus = function () {
  this.status = this.status === "read" ? "unread" : "read";
  displayBooks();
};

function addBookToLibrary(title, author, pages, read) {
  let id = self.crypto.randomUUID();
  const book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary("Star Wars", "King", 542, "read");
addBookToLibrary("The AIT", "Dr Loos", 26, "read");

// console.log(myLibrary);

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("bookCard");

  const cardHeader = document.createElement("div");
  cardHeader.className = "cardHeader";
  const title = document.createElement("p");
  title.className = "title";
  title.textContent = book.title;

  const cardBody = document.createElement("div");
  cardBody.className = "cardBody";
  const author = document.createElement("p");
  author.textContent = book.author;
  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;
  const status = document.createElement("p");
  status.className = book.status;
  status.textContent = book.status;
  // card footer
  const cardFooter = document.createElement("div");
  cardFooter.className = "cardFooter";
  // rmv
  const remove = document.createElement("button");
  remove.classList.add("rmv");
  remove.textContent = "Remove book";
  // rmv event listener
  remove.addEventListener("click", () => {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBooks();
  });
  // status
  const statusChange = document.createElement("button");
  statusChange.classList.add("status");
  statusChange.textContent = "Change Status";
  // statusChange event listener
  statusChange.addEventListener("click", () => {
    book.changeStatus();
    console.log(book.status);
    displayBooks();
  });
  cardHeader.append(title);
  cardBody.append(author, pages, status);
  cardFooter.append(remove, statusChange);
  card.append(cardHeader, cardBody, cardFooter);
  return card;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  function statusCheck() {
    const status = document.querySelector("#status").checked;
    return status ? "read" : "unread";
  }
  const status = statusCheck();

  addBookToLibrary(title, author, pages, status);
  displayBooks();
  form.reset();
  dialog.close();
});

function displayBooks() {
  book_display.innerHTML = "";
  for (const book of myLibrary) {
    book_display.appendChild(createCard(book));
  }
}
displayBooks();

closeBtn.addEventListener("click", () => {
  form.reset();
});
