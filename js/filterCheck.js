// Dynamic checkboxes
const checkboxes = document.querySelector("#checkboxes")

let uniqueCategories = arrayCategories.filter((w, index) => {
    return arrayCategories.indexOf(w) === index;
})

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
addingDynamicCheckboxes()

checkboxes.addEventListener("change", removeAllCards)

function removeAllCards() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}

checkboxes.addEventListener("change", function(e){
    if(e.target.id === "White"){
        arrayCategories = []
        for (let i = 0; i < winesItems.length; i++) {
            if(winesItems[i].category === "White"){
                arrayCategories.push(winesItems[i].category)
            }
        }
    }
    addCards(arrayCategories)
})

// Tomar el valor del checkbox/es

// Iterar sobre los datos que contienen el id del checkbox/es tildado

// Filtrar los datos según id tildado

// Agregar las cards según id tildado

