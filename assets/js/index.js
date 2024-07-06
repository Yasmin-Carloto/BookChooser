document.addEventListener("DOMContentLoaded", (e) => {4
    e.preventDefault()

    const hamburguerMenu = document.getElementById("checkbox-menu")
    const navContainer = document.getElementById("nav-ul")

    hamburguerMenu.addEventListener("change", (e) => {
        e.preventDefault()

        hamburguerMenu.checked ? navContainer.style.display = "flex" : navContainer.style.display = "none"

    })
})