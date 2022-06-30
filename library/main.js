import './style.css'

let myLibrary = [];
const modal = document.createElement("div");

(function () {
    myLibrary = JSON.parse(localStorage.getItem("library"))
    if (myLibrary) drawData()
})()

window.showModal = function showModal() {
    const titleInput = document.createElement("input");
    const authorInput = document.createElement("input");
    const noOfPagesInput = document.createElement("input");
    const readInput = document.createElement("input");

    const closeButton = document.createElement("button");
    const submitButton = document.createElement("button");

    readInput.type = "checkbox";

    titleInput.placeholder = "Title";
    authorInput.placeholder = "Author";
    noOfPagesInput.placeholder = "No. of pages";

    closeButton.textContent = "X";
    submitButton.textContent = "Add book";


    modal.classList.add("library__books-modal");
    closeButton.classList.add("library__books-modal__close");
    submitButton.classList.add("button", "button--alt");

    closeButton.addEventListener("click", () => {
        modal.innerHTML = "";
        document.body.removeChild(modal);
    });
    submitButton.addEventListener("click", () => {
        if (titleInput.value && authorInput.value && noOfPagesInput.value)
            addBookToLibrary(titleInput.value, authorInput.value, noOfPagesInput.value, readInput.checked);
        else {
            alert("Complete all fields");
            return;
        }

        modal.innerHTML = "";
        document.body.removeChild(modal);
    })

    modal.append(titleInput, authorInput, noOfPagesInput, readInput, closeButton, submitButton);
    document.body.appendChild(modal);
}

function Book(title, author, noOfPages, read) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.read = read;
}

Book.prototype.toggleRead = () => {
    this.read = !read;
}

function addBookToLibrary(title, author, noOfPages, readStatus) {
    console.log(myLibrary);
    myLibrary.push(new Book(title, author, noOfPages, readStatus));
    console.log(myLibrary);

    localStorage.setItem("library", JSON.stringify(myLibrary));

    drawData();
}

function drawData() {
    const libraryBody = document.getElementById("libraryBody");
    libraryBody.innerHTML = "";

    myLibrary.forEach(book => {
        const trBook = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdNoOfPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const readStatus = document.createElement("span");
        const tdRemove = document.createElement("td");

        trBook.classList.add("library--wrapper-card");

        tdTitle.innerText = book.title;
        tdAuthor.innerText = book.author;
        tdNoOfPages.innerText = book.noOfPages;
        book.read ? tdRead.classList.add("library--read-true") : tdRead.classList.add("library--read-false");
        tdRead.append(readStatus);

        tdRead.style.cursor = "pointer";
        tdRead.addEventListener("click", () => {
            console.log("tdRead click")

            book.toggleRead();

            drawData()
        })
        tdRemove.style.cursor = "pointer";
        tdRemove.addEventListener("click", () => {
            console.log(book)
            drawData();
        })

        trBook.append(tdTitle, tdAuthor, tdNoOfPages, tdRead, tdRemove);
        libraryBody.append(trBook);
    });
}