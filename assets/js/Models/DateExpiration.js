import Book from "./Book.js"

class DateExpiration{
    static #monthInMillis = 1000 * 60 * 60 * 24 * 30

    static saveNewDateToLocalStorage(){
        const lastSavedDate = DateExpiration.#getDateFromLocalStorage()
        const currentDate = new Date()

        if(!lastSavedDate || (currentDate - lastSavedDate) >= this.#monthInMillis){
            Book.saveBookToLocalStorage()
            this.#setDateToLocalStorage()
        }
    }

    static #getDateFromLocalStorage(){
        const savedDate = localStorage.getItem("lastSavedDate")
        const parseStringToDate = new Date(savedDate)
        return parseStringToDate
    }

    static #setDateToLocalStorage(){
        localStorage.setItem("lastSavedDate", new Date())
    }
}

export default DateExpiration