const search = document.querySelector("[type='search']")

search.addEventListener("keyup", saveSearchValue)
checkboxes.addEventListener("change", searchValues)
search.addEventListener("keyup", searchValues)

function saveSearchValue() {
    let searchValue = search.value
    let normalizeValue = searchValue.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "").toLowerCase()
    return normalizeValue
}

let arrayId = []

function searchValues() {
    arrayId = []
    if(uniqueCategories.length == 3) {
        winesItems.forEach(wine => {
            if(wine.name.toLowerCase().includes(saveSearchValue()) 
                /*|| wine.description.toLowerCase().includes(saveSearchValue())*/){
                    arrayId.push(wine.id)
            }
        })
    }
    addCardsWithId()
}

function addCardsWithId() {
    removeAllCards()
    for (let i = 0; i < winesItems.length; i++) {
        if(arrayId.includes(winesItems[i].id)){
            createCard(i)
        }
    }
}

/**
 * 
 * Busqueda sobre html elements
 Objeto a escanear 
 dynamicCards
 
 ¿Qué escanear?
 
 Nombre
 dynamicCards[i].childNodes[1].childNodes[0].textContent
 
 Descripción
 dynamicCards[i].childNodes[1].childNodes[1].textContent
 

 ---------
 Busqueda sobre datos
 */