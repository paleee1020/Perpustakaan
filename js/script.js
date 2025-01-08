document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Logika sederhana untuk validasi (ganti dengan logika yang sesuai)
    if (username === "admin" && password === "password") {
      // Arahkan ke halaman beranda
      window.location.href = "index.html";
    } else {
      document.getElementById("message").textContent =
        "Username atau password salah!";
    }
  });

// Book data (8 books)
const books = [
  {
    title: "Panduan belajar javascript untuk pemula",
    author: "Andre Pratama",
    image: "img/jsuncover.jpg",
  },
  {
    title: "CSS untuk pemula",
    author: "Andre Pratama",
    image: "img/htmlkode.jpg",
  },
  {
    title: "111 kode HTML",
    author: "Arista Prasetyo Adi",
    image: "img/htmlkode.jpg",
  },
  {
    title: "Logika pemograman menggunakan C++",
    author: "Abdul Kadir",
    image: "img/cpp.jpg",
  },
  {
    title: "Sebuah seni untuk bersikap bodoamat",
    author: "Mark Manson",
    image: "img/bodoamat.jpeg",
  },
  {
    title: "Hujan",
    author: "Tere Liye",
    image: "img/hujan.jpeg",
  },
  {
    title: "Di antara dua SUJUD",
    author: "Muhammad Irata",
    image: "img/diantara.jpg",
  },
  {
    title: "99 cahaya di langit EROPA",
    author: "Hanum Salsabiela Rais dan Rangga Almahendra",
    image: "img/99cahaya.jpeg",
  },
];

// Display the books in the catalog
const bookList = document.getElementById("bookList");

function displayBooks(books) {
  bookList.innerHTML = "";
  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <button onclick="openBorrowForm('${book.title}')">Pinjam Buku</button>
        `;
    bookList.appendChild(bookCard);
  });
}

// Function to open the borrow form with selected book details
function openBorrowForm(bookTitle) {
  // Set the selected book title in the borrow form
  document.getElementById("bookTitle").value = bookTitle;
  // Show the borrow form
  document.getElementById("borrowForm").style.display = "block";
}

// Filter books based on search input
function filterBooks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );
  displayBooks(filteredBooks);
}

// Initial display of books
displayBooks(books);

// Handle borrow form submission
document
  .getElementById("formPeminjaman")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Buku berhasil dipinjam!");
    document.getElementById("formPeminjaman").reset();
    document.getElementById("borrowForm").style.display = "none"; // Hide form after submission
  });
