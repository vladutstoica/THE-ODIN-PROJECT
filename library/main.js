import './style.css'

let myLibrary = [];
const modal = document.createElement("div");

(function () {
    if (localStorage.getItem("library") != null) {
        myLibrary = JSON.parse(localStorage.getItem("library"))
    }
    if (myLibrary) drawData()
})()

window.showModal = function showModal() {
    const overlay = document.createElement("div");
    const titleInput = document.createElement("input");
    const authorInput = document.createElement("input");
    const noOfPagesInput = document.createElement("input");
    const readWrapper = document.createElement("div");
    const readInput = document.createElement("input");
    const readText = document.createElement("span");

    const closeButton = document.createElement("button");
    const submitButton = document.createElement("button");

    readInput.type = "checkbox";
    readText.textContent = "Have you read the book?";

    titleInput.placeholder = "Title";
    authorInput.placeholder = "Author";
    noOfPagesInput.placeholder = "No. of pages";

    closeButton.textContent = "X";
    submitButton.textContent = "Add book";

    modal.classList.add("library__books-modal");
    overlay.classList.add("library__books-overlay");
    readWrapper.classList.add("library__books-modal__read-wrapper");
    closeButton.classList.add("library__books-modal__close");
    submitButton.classList.add("button", "button--alt");

    noOfPagesInput.addEventListener("input", () => {
        if(!/^\d+$/.test(noOfPagesInput.value)) {
            noOfPagesInput.value = "";
            noOfPagesInput.placeholder = "Please enter only numbers";
        }
    });

    closeButton.addEventListener("click", () => {
        modal.innerHTML = "";
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
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
        document.body.removeChild(overlay);
    });

    readWrapper.append(readText, readInput);
    modal.append(titleInput, authorInput, noOfPagesInput, readWrapper, closeButton, submitButton);
    document.body.appendChild(modal);
    document.body.appendChild(overlay);
}

function showInfoModal(book) {
    const info = document.createElement("div");
    const overlay = document.createElement("div");
    const titleInput = document.createElement("input");
    const authorInput = document.createElement("input");
    const noOfPagesInput = document.createElement("input");
    const readWrapper = document.createElement("div");
    const readInput = document.createElement("input");
    const readText = document.createElement("span");

    const closeButton = document.createElement("button");
    const submitButton = document.createElement("button");

    readInput.type = "checkbox";
    readInput.checked = book.read;
    readText.textContent = "Have you read the book?";

    titleInput.placeholder = book.title;
    authorInput.placeholder = book.author;
    noOfPagesInput.placeholder = book.noOfPages;

    titleInput.disabled = true;
    authorInput.disabled = true;
    noOfPagesInput.disabled = true;
    readInput.disabled = true

    closeButton.textContent = "X";
    submitButton.textContent = "Remove book";

    info.classList.add("library__books-modal");
    overlay.classList.add("library__books-overlay");
    readWrapper.classList.add("library__books-modal__read-wrapper");
    closeButton.classList.add("library__books-modal__close");
    submitButton.classList.add("button", "button--alt");

    closeButton.addEventListener("click", () => {
        info.innerHTML = "";
        document.body.removeChild(info);
        document.body.removeChild(overlay);
    });

    submitButton.addEventListener("click", () => {
        myLibrary = myLibrary.filter((item) => {
            return item !== book;
        })

        refreshData();

        console.log(myLibrary);

        info.innerHTML = "";
        document.body.removeChild(info);
        document.body.removeChild(overlay);
    });

    readWrapper.append(readText, readInput);
    info.append(titleInput, authorInput, noOfPagesInput, readWrapper, closeButton, submitButton);
    document.body.appendChild(info);
    document.body.appendChild(overlay);
}

function Book(title, author, noOfPages, read) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, noOfPages, readStatus) {
    myLibrary.push(new Book(title, author, noOfPages, readStatus));

    refreshData();
}

function refreshData() {
    localStorage.setItem("library", JSON.stringify(myLibrary));

    drawData();
}

function drawData() {
    const libraryBody = document.getElementById("libraryBody");
    libraryBody.innerHTML = "";

    myLibrary.forEach(book => {
        const bookWrapper = document.createElement("li");
        const bookCover = document.createElement("div");
        const bookCoverTitle = document.createElement("span");
        const bookBadge = document.createElement("button");
        const bookDetails = document.createElement("div");
        const bookDetailsTitle = document.createElement("span");
        const bookDetailsAuthor = document.createElement("span");

        bookWrapper.classList.add("library__books-item--all");
        bookCover.classList.add("library__books-cover--all");
        bookBadge.classList.add("library__books-badge--all");
        bookDetails.classList.add("library__books__details");
        bookDetailsTitle.classList.add("library__books__details__title");
        bookDetailsAuthor.classList.add("library__books__details__author");

        bookCoverTitle.innerText = book.title.slice(0, 1);
        bookDetailsTitle.innerText = book.title;
        bookDetailsAuthor.innerText = book.author;

        book.read ? bookBadge.innerHTML = "" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-book-fill\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"/>\n" +
            "</svg>" : bookBadge.innerHTML = "" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n viewBox=\"0 0 16 16\">\n" +
            "   <path\n d=\"M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"/>\n" +
            "</svg>";

        bookCover.addEventListener("click", () => {
            showInfoModal(book);
        });

        bookBadge.addEventListener("click", () => {
            book.read = !book.read;

            book.read ? bookBadge.innerHTML = "" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-book-fill\" viewBox=\"0 0 16 16\">\n" +
                "  <path d=\"M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"/>\n" +
                "</svg>" : bookBadge.innerHTML = "" +
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n viewBox=\"0 0 16 16\">\n" +
                "   <path\n d=\"M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"/>\n" +
                "</svg>";

            refreshData();
        });

        bookCover.append(bookCoverTitle);
        bookDetails.append(bookDetailsTitle, bookDetailsAuthor);

        bookWrapper.append(bookCover, bookBadge, bookDetails);

        libraryBody.append(bookWrapper);
    });
}