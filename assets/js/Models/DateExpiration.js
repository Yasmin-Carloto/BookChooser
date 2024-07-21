import Book from "./Book.js"
import Comment from "./Comment.js"

class DateExpiration{
    static #monthInMillis = 1000 * 60 * 60 * 24 * 30

    static saveNewDateToLocalStorage(){
        const lastSavedDate = DateExpiration.#getDateFromLocalStorage()
        const currentDate = new Date()

        if(!lastSavedDate || (currentDate - lastSavedDate) >= this.#monthInMillis){
            Book.saveBookToLocalStorage()
            this.#setDateToLocalStorage()
            Comment.removeAllComments()
        }
    }

    static #getDateFromLocalStorage(){
        const savedDate = localStorage.getItem("lastSavedDate")
        const parseStringToDate = new Date(savedDate)
        return parseStringToDate
    }

    static getFormattedDate(){
        const lastSavedDate = DateExpiration.#getDateFromLocalStorage()
        const day = lastSavedDate.getDate()
        const month = lastSavedDate.getMonth()
        const year =  lastSavedDate.getFullYear()

        const fullDate = `${month}/${day}/${year}`
        return fullDate
    }

    static #setDateToLocalStorage(){
        localStorage.setItem("lastSavedDate", new Date())
    }
}

export default DateExpiration