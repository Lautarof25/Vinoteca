const search = document.querySelector("[type='search']")

search.addEventListener("keyup", saveSearchValue)
function saveSearchValue() {
    let searchValue = search.value
    let normalizeValue = searchValue.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "").toLowerCase()
    return normalizeValue
}

search.addEventListener("keyup", updateArrayIds)
let arrayIds = []

function updateArrayIds() {
    arrayIds = []
    winesItems.forEach(wine => {
        if (wine.name.toLowerCase().includes(saveSearchValue())) {
            arrayIds.push(wine.id)
        }
    })
}

search.addEventListener("keyup", addCardsWithId)
function addCardsWithId() {
    removeAllCards()
    for (let i = 0; i < winesItems.length; i++) {
        if (arrayIds.includes(winesItems[i].id)) {
            createCard(i)
        }
    }
}