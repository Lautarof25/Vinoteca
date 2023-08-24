let arrayCategories = []

winesItems.forEach(wine => {arrayCategories.push(wine.category)})
let uniqueCategories = arrayCategories.filter((w,index)=>{
    return arrayCategories.indexOf(w) === index;
})

const checkboxes =  document.querySelector("#checkboxes")

checkboxes.addEventListener("change",function(e){
    
})


function createCheckbox(category){
    const label = document.createElement("label")
    label.setAttribute("for", `${category}`)
    const input = document.createElement("input")
    const textLabel = document.createTextNode(`${category}`)
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", `${category}`)
    input.setAttribute("class", "form-check-input m-1")
    label.append(input,textLabel)

    checkboxes.appendChild(label)
}

for (let i = 0; i < uniqueCategories.length; i++) {
    createCheckbox(uniqueCategories[i])
}

{/* 
<label for="Red">
    <input class="form-check-input" type="checkbox" id="Red"> Tinto
</label>
<label for="White">
    <input class="form-check-input" type="checkbox" id="White"> Blanco
</label>
<label for="Rosé">
    <input class="form-check-input" type="checkbox" id="Rosé"> Rosado
</label> 
*/}