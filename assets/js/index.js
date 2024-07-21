import Book from "./Models/Book.js"
import DateExpiration from "./Models/DateExpiration.js"

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()

    const hamburguerMenu = document.getElementById("checkbox-menu")
    const navContainer = document.getElementById("nav-ul")

    hamburguerMenu.addEventListener("change", (e) => {
        e.preventDefault()
        hamburguerMenu.checked ? navContainer.style.display = "flex" : navContainer.style.display = "none"
    })

    let bookInfoContainer = document.getElementById("book-info-container")
    DateExpiration.saveNewDateToLocalStorage()
    const currentBook = Book.getBookFromLocalStorage()
    displayCurrentBook(bookInfoContainer, currentBook)
})

function displayCurrentBook(bookInfoContainer, bookInfo){
    const bookCover = document.createElement("img")
    bookCover.alt = `Cover of ${bookInfo.name}`
    bookCover.src = bookInfo.cover
    bookCover.className = "book-image"
    bookCover.id = "book-image"

    const bookTextInfomation = document.createElement("div")
    bookTextInfomation.className = "book-info"

    const bookTitle = document.createElement("h3")
    bookTitle.innerText = bookInfo.name
    bookTitle.className = "book-title"
    bookTitle.id = "book-title"

    const bookAuthor = document.createElement("p")
    bookAuthor.innerText = bookInfo.author
    bookAuthor.className = "book-author"
    bookAuthor.id = "book-author"

    bookTextInfomation.appendChild(bookTitle)
    bookTextInfomation.appendChild(bookAuthor)

    bookInfoContainer.appendChild(bookCover)
    bookInfoContainer.appendChild(bookTextInfomation)
}