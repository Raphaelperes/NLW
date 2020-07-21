/* essa funçao serve para poder adicionar os estados nos campos
*/
function populateUFs(){
const ufSelect = document.querySelector("select[name=uf")
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json()  )
    .then( state =>{
        for(const states of state){
            ufSelect.innerHTML += `<option value="${states.id}">${states.nome}</option>`
        }

    })
}

populateUFs()
/*
esse funçao pega o estado selecionado e coloca as cidades que existem naquele estado
*/
function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")


    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res =>  res.json()  )
    .then( cities =>{
    
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document
.querySelector("select[name=uf]")
.addEventListener("change",getCities)



// itens de coleta
// pegar todos li

const itemsToCollet = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollet){
    item.addEventListener("click",handleSelectedItem)
}

// atualizar campo
const collectedItems = document.querySelector("input[name = items]")

let selectedItems = []
function handleSelectedItem(event){
    const itemLi = event.target

    // adicionar ou remover uma classe

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    
 /**
  * Este método tem a função de verificar se existem itens selecionados
  */
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemId
        return itemFound
    })
    
    //tirar da seleção
    
    if(alreadySelected >= 0){
        // tirar da seleção
        const  filteredItems =  selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }else{
        //adicionar a seleção
        selectedItems.push(itemId)

    } 
    collectedItems.value = selectedItems
}