const search = document.querySelector("[type='search']")

search.addEventListener("keyup", saveSearchValue)
checkboxes.addEventListener("change", searchValues)
search.addEventListener("keyup", searchValues)

let dynamicCards = document.querySelectorAll("#cards > *")

function saveSearchValue() {
    let searchValue = search.value.toLowerCase().trim()
    return searchValue
}

function searchValues() {
    dynamicCards = document.querySelectorAll("#cards > *")
    for (let i = 0; i < dynamicCards.length; i++) {
        let name = dynamicCards[i].childNodes[1].childNodes[0].textContent.toLowerCase()
        let description = dynamicCards[i].childNodes[1].childNodes[1].textContent.toLocaleLowerCase()
        if (name.includes(saveSearchValue()) || description.includes(saveSearchValue())) {
            console.log(name)
            console.log(description)
        }
    }
    console.log(saveSearchValue())
}

function addCardsWithNameOrDescription() {
    return 0
}

/**
 Objeto a escanear 
 dynamicCards
 
 ¿Qué escanear?
 
 Nombre
 dynamicCards[i].childNodes[1].childNodes[0].textContent
 
 Descripción
 dynamicCards[i].childNodes[1].childNodes[1].textContent
 
 */