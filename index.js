// javascript

let todoArr = []


let listLS =  JSON.parse(localStorage.getItem('list'))


if(listLS){
    todoArr = listLS
}

let inputEl = document.getElementById('input')
let submitBtn = document.getElementById('submit')
let lists = document.getElementById('lists')

//console.log(submitBtn)

submitBtn.addEventListener('click', function() {
    //console.log('hi')
    if(!todoArr.includes(inputEl.value)){
        
    todoArr.push(inputEl.value)
    }
    inputEl.value = ""
    //console.log(todoArr)
    render()
})

//console.log(todoArr)



document.addEventListener('click', function(e){
    if(e.target.dataset.btn){
        deletebtn(e.target.dataset.btn)
        console.log(e.target.dataset.btn)
    }
    
})




function render(){
    let todofeed = ``
    
todoArr.forEach(function(todo){
    
  todofeed  +=`<div class="outer">
                <ul><li>${todo}</li></ul>
                 <span class="delete">
                <i class="fa-solid fa-trash" data-btn="${todo}"></i>
                </span>
                </div>
  `
})
    ////////////////////
    
    lists.innerHTML = todofeed
    
    localStorage.setItem('list', JSON.stringify(todoArr))
    
}

render()

function deletebtn(id) {
     todoArr = todoArr.filter(function (item){
        return item !== id
    })
    //console.log(targetItem)
    render()
}

