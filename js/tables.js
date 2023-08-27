const tableScores = document.querySelector("#tableScores")
const tablesScoresMain = tableScores.childNodes[3]

let winesScores = []
winesItems.forEach(wine => {
    winesScores.push(wine.score)
});
winesScores.sort()

let winesStock = []
winesItems.forEach(wine => {
    winesStock.push(wine.stock)
});
winesStock.sort()
