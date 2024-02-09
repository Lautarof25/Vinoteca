const cards = document.querySelector("#cards")
const winesItems = winesData["wines"]
let arrayCategories = new Set()
winesItems.forEach(wine => { 
    arrayCategories.add(wine.category)
})

function createCard(id) {
    const card = document.createElement("div")
    card.setAttribute("id", `card${id}`)
    card.setAttribute("class", "card card-width p-2 d-flex justify-content-between")

    const img = document.createElement("img")
    img.setAttribute("src", `${winesItems[id]["img"]}`)
    img.setAttribute("alt", `${winesItems[id]["name"]}`)
    img.setAttribute("class", "card-img-top")

    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body align-self-end pb-0")

    const name = document.createElement("h5")
    name.setAttribute("class", "card-title")
    const textname = document.createTextNode(`${winesItems[id]["name"]}`)
    name.appendChild(textname)

    const description = document.createElement("p")
    description.setAttribute("class", "card-text")
    const textDescription = document.createTextNode(`${winesItems[id]["description"]}`)
    description.appendChild(textDescription)

    const divButtons = document.createElement("div")
    divButtons.setAttribute("class", "row gap-1")
    
    const input = document.createElement("input")
    input.setAttribute("type", "number")
    input.setAttribute("class", "form-control col")
    input.setAttribute("placeholder", "0")
    input.setAttribute("min", "0")
    input.setAttribute("max", `${winesItems[id]["stock"]}`)

    const button = document.createElement("button")
    button.setAttribute("class", "btn btn-primary col")
    const textButton = document.createTextNode("Agregar")
    button.appendChild(textButton)

    const a = document.createElement("a")
    a.setAttribute("href", "#")
    a.setAttribute("class", "btn btn-primary m-1")
    const textA = document.createTextNode("Más información")
    a.appendChild(textA)

    divButtons.append(input, button, a)
    cardBody.append(name, description, divButtons)
    card.append(img, cardBody)
    cards.appendChild(card)
}

function addCards(array) {
    for (let i = 0; i < array.length; i++) {
        createCard(i)
    }
}
// Adding cards first load
addCards(winesItems)