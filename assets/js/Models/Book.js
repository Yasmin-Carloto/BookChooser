class Book{
    name
    author
    cover
    
    constructor(name, author, cover){
        this.name = name
        this.author = author
        this.cover = cover
    }

    static async #getRandomBook(){
        const randomSubject = this.#getRandomBookSubject()
        try{
            const bookResponse =  await fetch(`https://openlibrary.org/subjects/${randomSubject}.json`)
            const bookData = await bookResponse.json()
            const books = await bookData.works

            if(books){
                const randomNumber = Math.floor(Math.random() * books.length)
                const choosenBook = books[randomNumber]
                const bookCover = `https://covers.openlibrary.org/b/id/${choosenBook.cover_id}-L.jpg`
                const formattedChoosenBook = new Book(choosenBook.title, choosenBook.authors[0].name, bookCover)
                return formattedChoosenBook
            }else{
                throw Error({
                    status: 404,
                    message: "Could not find any related results."
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    static #getRandomBookSubject(){
        const bookSubjects = ["Fiction", "Non-fiction", "Mystery", "Thriller", "Science-Fiction", "Fantasy", "Romance", "Horror", "Biography", "Autobiography", "Self-Help", "History", "Science", "Philosophy", "Psychology", "Poetry", "Travel", "Cookbooks", "Young-adult", "Children", "Education", "Art", "Photography", "Business", "Economics", "Politics", "Sociology", "Anthropology", "Music", "Drama", "Literary", "Criticism", "Short-Stories"]

        const randomSubject = bookSubjects[Math.floor(Math.random() * bookSubjects.length)]
        return randomSubject.toLowerCase()
    }

    static saveBookToLocalStorage(){
        const currentBook = this.#getRandomBook()
        currentBook.then(data => {
            localStorage.setItem("chosenBook", JSON.stringify(data))
        })
    }

    static getBookFromLocalStorage(){
        const currentBook = JSON.parse(localStorage.getItem("chosenBook"))
        return currentBook
    }
}

export default Book