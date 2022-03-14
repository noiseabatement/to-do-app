const text = document.getElementById('to-do')
const addBtn = document.getElementById('add-btn') 
const ul = document.getElementById('list')
const rstBtn = document.getElementById('rst-btn')


document.addEventListener("keydown",e=>{
    if(text.value != ""){
        if(e.code == 'Enter'){
            const listItem = document.createElement('li')
            const delBtn = document.createElement('button')
            const strikeBtn = document.createElement('button')
            const input = document.createElement('input')
            delBtn.textContent="delete"
            strikeBtn.textContent="done"
            listItem.textContent = text.value
            listItem.append(delBtn)
            listItem.append(strikeBtn)
            ul.append(listItem)
            delBtn.addEventListener("click",()=>{
                listItem.remove()
            })
            strikeBtn.addEventListener("click",()=>{
                listItem.classList.toggle('strike')
            })
            text.value = ""
        }
    }
})

addBtn.addEventListener("click", (e)=>{
    if(text.value != ""){
        const listItem = document.createElement('li')
        listItem.textContent = text.value
        ul.append(listItem)
        text.value = ""
    }    
})

// rstBtn.addEventListener("click",()=>{
//     ul.textContent = ""
// })
//above and below methods are okey
rstBtn.addEventListener("click",()=>{
    while(ul.firstChild){
        ul.removeChild(ul.lastChild)
    }
})



