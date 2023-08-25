const search = document.querySelector("[type='search']");

search.addEventListener("keyup",saveSearchValue);

function saveSearchValue(){
    let searchValue = search.value
    return searchValue
}

function searchValueInData(){
    return 0
}

function addCardWithNameOrDescription(){
    return 0
}