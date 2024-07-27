export function setThemeToLocalStorage(theme){
    localStorage.setItem("theme", JSON.stringify(theme))
}

export function getThemeFromLocalStorage(){
    const theme = JSON.parse(localStorage.getItem("theme"))
    if(theme){
        return theme
    }else{
        return "light"
    }
}

export function darkTheme(header, logo, navigationLinks, navigationLinksContainer, defaultButtons, icons) {
    document.body.style.background = "#444"
    document.body.style.color = "#fff"
    
    for(let logoItem of logo){
        logoItem.style.color = "#efefef"
    }

    header.style.color = "#efefef"
    navigationLinksContainer.style.background = "#444"
    
    for(let link of navigationLinks){
        link.style.color = "#efefef"

        link.addEventListener("mouseover", (e) => {
            link.style.background = "#b1b1b1"
            link.style.background = "#232323"
        })

        link.addEventListener("mouseout", (e) => {
            link.style.background = "none"
            link.style.color = "#efefef"
        })

    }

    for(let button of defaultButtons){
        button.style.background = "#b1b1b1"
        button.style.color = "#232323"

        button.addEventListener("mouseover", (e) => {
            button.style.background = "#8c8c8c"
        })

        button.addEventListener("mouseout", (e) => {
            button.style.background = "#b1b1b1"
            button.style.color = "#232323"
        })
    }

    for(let icon of icons){
        icon.style.color = "#efefef"
    }
}

export function lightTheme(header, logo, navigationLinks, navigationLinksContainer, defaultButtons, icons) {
    document.body.style.background = "#efefef"
    document.body.style.color = "#232323"
    
    for(let logoItem of logo){
        logoItem.style.color = "#232323"
    }

    header.style.color = "#232323"
    navigationLinksContainer.style.background = "#efefef"
    
    for(let link of navigationLinks){
        link.style.color = "#232323"

        link.addEventListener("mouseover", (e) => {
            link.style.background = "#4f4f4f"
            link.style.color = "#efefef"
        })

        link.addEventListener("mouseout", (e) => {
            link.style.background = "none"
            link.style.color = "#232323"
        })

    }

    for(let button of defaultButtons){
        button.style.background = "#4f4f4f"
        button.style.color = "#efefef"

        button.addEventListener("mouseover", (e) => {
            button.style.background = "#232323"
            button.style.color = "#efefef"
        })

        button.addEventListener("mouseout", (e) => {
            button.style.background = "#4f4f4f"
            button.style.color = "#efefef"
        })
    }

    for(let icon of icons){
        icon.style.color = "#232323"
    }
}