class Comment{
    emoji
    date
    time
    comment

    constructor(emoji, date, time, comment){
        this.emoji = emoji
        this.date = date
        this.time = time
        this.comment = comment
    }

    static getCommentsFromLocalStorage(){
        return JSON.parse(localStorage.getItem("commentsOfTheMonth")) || []
    }

    static saveCommentsInLocalStorage(emoji, comment){
        let comments = this.getCommentsFromLocalStorage()
        const fullDate = this.#getFullDate()
        const fullTime = this.#getFullTime()

        const newComment = new Comment(emoji, fullDate, fullTime, comment)
        comments.push(newComment)
        localStorage.setItem("commentsOfTheMonth", JSON.stringify(comments))
    }

    static #getFullDate(){
        const todaysDate = new Date()

        const day = todaysDate.getDate()
        const month = todaysDate.getMonth()
        const year =  todaysDate.getFullYear()

        const fullDate = `${month}/${day}/${year}`
        return fullDate
    }

    static #getFullTime(){
        const todaysDate = new Date()

        const hour = todaysDate.getHours()
        const minute = todaysDate.getMinutes()

        const fullTime = `${hour}h${minute}`
        return fullTime
    }

    static removeAllComments(){
        localStorage.setItem("commentsOfTheMonth", JSON.stringify([]))
    }
}

export default Comment