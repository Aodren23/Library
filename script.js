const libraryContainer = document.querySelector(".library");
const read = document.querySelector("#status");
const book_display = document.querySelector(".book_display");
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

  // this.info = function info() {
  //   console.log(this.title, this.author, this.number_of_pages);
  // };
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  /* Assuming that self.crypto.randomUUID() is available */
  let id = self.crypto.randomUUID();
  // console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
  const book = new Book(id, title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary("Star Wars", "King", 542, "read");
addBookToLibrary("The AIT", "Dr Loos", 26, "read");

console.log(myLibrary);

// function display() {
//   //     for(x=0; x<myLibrary.lenght, x++){

//   //   }
//   for (const book of myLibrary) {
//     console.log(book);
//   }
// }

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("bookCard");
  const title = document.createElement("h2");
  title.textContent = book.title;
  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  const status = document.createElement("p");
  status.textContent = `Status: ${book.status}`;
  const statusChange = document.createElement("button");
  statusChange.classList.add("status");
  statusChange.textContent = "Change Status";
  card.append(title, author, pages, status, statusChange);
  return card;
}

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const title = document.querySelector("#title").value;

//   const author = document.querySelector("#author").value;

//   const pages = document.querySelector("#pages").value;

//   const status = document.querySelector("#status").checked;

//   addBookToLibrary(title, author, pages, status);

//   displayBooks();

//   form.reset();

//   dialog.close();
// });

function displayBooks() {
  book_display.innerHTML = "";

  for (const book of myLibrary) {
    //     const card = document.createElement("div");
    //     card.classList.add("book-card");
    //     card.innerHTML = `
    // <h2>${book.title}</h2>
    // <p>${book.author}</p>
    // <p>${book.pages} pages</p>
    // <p>${book.status}</p>
    // `;
    book_display.appendChild(createCard(book));
  }
}
displayBooks();

function changeStatus() {}

read.addEventListener("click", () => {
  for (const book of myLibrary) {
    if (status.textContent == read) {
      status.textContent == unread;
    } else {
      status.textContent == read;
    }
  }
});
