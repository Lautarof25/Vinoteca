// Dynamic checkboxes
const checkboxes = document.querySelector("#checkboxes")

function createCheckbox(category) {
    const label = document.createElement("label")
    label.setAttribute("for", `${category}`)
    const input = document.createElement("input")
    const textLabel = document.createTextNode(`${category}`)
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", `${category}`)
    input.setAttribute("class", "form-check-input m-1")
    label.append(input, textLabel)

    checkboxes.appendChild(label)
}

function addingDynamicCheckboxes() {
    for (let i = 0; i < uniqueCategories.length; i++) {
        createCheckbox(uniqueCategories[i])
    }
}
// Ading dynamic checkboxes
addingDynamicCheckboxes()

// Adding checkboxes filtering

checkboxes.addEventListener("change", removeAllCards)

function removeAllCards() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}

checkboxes.addEventListener("change", updateUniqueCategories)

function updateUniqueCategories() {
    uniqueCategories = []
    for (let i = 1; i < checkboxes.childElementCount+1; i++) {
        let itemCheckbox = checkboxes.childNodes[i].childNodes[0] 
        if(itemCheckbox.checked && !uniqueCategories.includes(itemCheckbox.id)){
            uniqueCategories.push(itemCheckbox.id)
        }
    }
}

checkboxes.addEventListener("change", addCardsWithCategory)

function addCardsWithCategory() {
    for (let i = 0; i < winesItems.length; i++) {
        if(uniqueCategories.includes(winesItems[i].category)){
            createCard(i)
        }
    }
    if(uniqueCategories.length == 0){
        addCards(winesItems)
    }
}
