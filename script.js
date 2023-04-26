const localStorageKey = "My-To-do-List"

function validaJaExiste(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById("input-new-task").value;
    let exist = values.find(elemento =>elemento.name == inputValue)
    return !exist ? false : true
}
function newtask(){
    let input = document.getElementById("input-new-task");
    input.style.border = ""

    if(!input.value){
        input.style.border = "2px solid red"
        alert("Campo vazio digite uma nova tarefa")

    }else if(validaJaExiste()){

        alert("Task ja existe!")
    }
    else{

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    values.push(
        {
        name:input.value}
        )
    localStorage.setItem(localStorageKey,JSON.stringify(values))

    showValues()
    }
    input.value = ""
}
function showValues(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById("todo-list")
    list.innerHTML = "";

    for (let index = 0; index < values.length; index++) {
        list.innerHTML += "<li>"+values[index]['name']+"<button id='btn-ok'onclick='removeItem()'>ok</button></li>"
        
    }
}
function removeItem(data){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let newList = values.findIndex(elemento => elemento.name==data)
    values.splice(newList,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues();
}

showValues()