import Book from "./Models/Book.js"
import DateExpiration from "./Models/DateExpiration.js"
import Comment from "./Models/Comment.js"
import { darkTheme, getThemeFromLocalStorage, lightTheme, setThemeToLocalStorage } from "./DarkTheme/change-theme.js"

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

    if(bookInfoContainer){
        displayCurrentBook(bookInfoContainer, currentBook)
    }

    const commentContainer = document.getElementById("monthly-comments-container")
    const emoji = document.getElementById("emoji-picker-input")
    const commentDescription = document.getElementById("comment-input")
    const buttonOfSaving = document.getElementById("save-comment")
    const dateBeginMonth = document.getElementById("current-month")
    const statusOfSaving = document.getElementById("message-of-failure")
    let allComments = Comment.getCommentsFromLocalStorage()
    const currentDate = DateExpiration.getFormattedDate()

    if(buttonOfSaving){
        buttonOfSaving.addEventListener("click", () => {
            if(commentDescription.value.length > 0){
                console.log(commentDescription.value.lenght > 0);
                Comment.saveCommentsInLocalStorage(emoji.value, commentDescription.value)
                window.location.reload(true)
            }else{
                console.log(commentDescription.value.length > 0);
                statusOfSaving.innerText = "Must have a comment."
                statusOfSaving.style.color = "red"
            }
        })
    }

    if(commentContainer){
        dateBeginMonth.innerText = currentDate

        allComments.forEach(comment => {
            displayComments(commentContainer, comment)  
        })
    }

    let currentTheme = getThemeFromLocalStorage()
    const header = document.getElementById("header")
    const logos = document.getElementsByClassName("logo")
    const links = document.getElementsByClassName("nav-link")
    const buttons = document.getElementsByClassName("default-button")
    const icons = document.getElementsByClassName("icon")
    const switcherTheme = document.getElementById("checkbox")

    switcherTheme.checked = currentTheme === "dark";
    applyTheme(currentTheme, header, logos, links, navContainer, buttons, icons);

    switcherTheme.addEventListener("click", (e) => {
        currentTheme = currentTheme === "light" ? "dark" : "light"
        setThemeToLocalStorage(currentTheme)
        applyTheme(currentTheme, header, logos, links, navContainer, buttons, icons)
    })
})

function applyTheme(theme, header, logos, navigationLinks, navigationLinksContainer, defaultButtons, icons){
    if (theme === "dark") {
        darkTheme(header, logos, navigationLinks, navigationLinksContainer, defaultButtons, icons)
    } else {
        lightTheme(header, logos, navigationLinks, navigationLinksContainer, defaultButtons, icons)    
    }
}

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

function displayComments(allCommentsContainer, commentToDisplay){
    const commentContainer = document.createElement("div")
    commentContainer.className = "comment"

    const commentInformation = document.createElement("div")
    commentInformation.className = "comments-info"

    const emoji = document.createElement("h3")
    emoji.id = "comment-emoji"
    emoji.innerHTML = commentToDisplay.emoji

    const date = document.createElement("h3")
    date.id = "comment-date"
    date.innerText = commentToDisplay.date

    const time = document.createElement("h3")
    time.id = "comment-time"
    time.innerText = commentToDisplay.time

    const comment = document.createElement("p")
    comment.id = "comment-description"
    comment.innerText = commentToDisplay.comment

    commentInformation.appendChild(emoji)
    commentInformation.appendChild(date)
    commentInformation.appendChild(time)

    commentContainer.appendChild(commentInformation)
    commentContainer.appendChild(comment)

    allCommentsContainer.appendChild(commentContainer)
}