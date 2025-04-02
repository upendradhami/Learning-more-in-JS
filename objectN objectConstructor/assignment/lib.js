// Retrieve library from localStorage or initialize an empty array
let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

// Book Constructor
function Book(name, author, status) {
  this.book = name;
  this.author = author;
  this.status = status;
  this.id = crypto.randomUUID(); // Unique ID for each book
}

// Function to Add a Book
function addBookToLibrary(name, author, status) {
  if (!name || !author || !status) {
    alert("Please fill in all fields!");
    return;
  }
  
  const newBook = new Book(name, author, status);
  myLibrary.push(newBook);
  
  // Save updated library to localStorage
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

  alert("Book added successfully!");
}

// Function to Display Books in index.html
function displayBooks() {
  const bookList = document.getElementById("bookList");
  if (!bookList) return; // Prevents running on index2.html

  bookList.innerHTML = ""; // Clear old data
  myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

  if (myLibrary.length === 0) {
    bookList.innerHTML = "<tr><td colspan='4'>No books found.</td></tr>";
    return;
  }

  myLibrary.forEach((book) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.book}</td>
      <td>${book.author}</td>
      <td>${book.status}</td>
      <td><button onclick="removeBook('${book.id}')">Remove</button></td>
    `;

    bookList.appendChild(row);
  });
}

// Function to Remove a Book by ID
function removeBook(bookId) {
  myLibrary = myLibrary.filter(book => book.id !== bookId);

  // Save updated library to localStorage
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

  // Refresh UI
  displayBooks();
}

// Event Listener for Adding Books on index2.html
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addBookBtn");
  if (addButton) {
    addButton.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const author = document.getElementById("author").value;
      const status = document.getElementById("status").value;

      addBookToLibrary(name, author, status);

      // Clear input fields after adding
      document.getElementById("name").value = "";
      document.getElementById("author").value = "";
      document.getElementById("status").value = "";
    });
  }
});

// Load books on page load for index.html
document.addEventListener("DOMContentLoaded", displayBooks);
