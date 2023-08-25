const cards = document.querySelector("#cards")
const winesItems = winesData["wines"]
let arrayCategories = []
winesItems.forEach(wine => { arrayCategories.push(wine.category) })
let uniqueCategories = arrayCategories.filter((w, index) => {
    return arrayCategories.indexOf(w) === index;
})

function createCard(id) {
    const card = document.createElement("div")
    card.setAttribute("id", `card${id}`)
    card.setAttribute("class", "card card-width p-2 h-600px d-flex justify-content-between")

    const img = document.createElement("img")
    img.setAttribute("src", `${winesItems[id]["img"]}`)
    img.setAttribute("alt", `${winesItems[id]["name"]}`)
    img.setAttribute("class", "card-img-top")

    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body align-self-end")

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
addCards(winesItems)



{
/* 
<div class="card card-width">
    <img src="./img/wines/rotwein-vespa-salento-negroamaro-igt-il-fedale.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Rotwein</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
            the card's content.</p>
        <div class="row gap-1">
            <input class="form-control col" type="number" min="0" max="5" placeholder="0">
            <button class="btn btn-primary col">Agregar</button>
            <a href="#" class="btn btn-primary m-1">Más información</a>
        </div>
    </div>
</div> */}