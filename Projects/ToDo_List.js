const inputbox=document.getElementById('inputbox');
const listcontainer=document.getElementById('list-container');

function addTask() {
    if(inputbox.value==='')
    {
        alert("Enter the Task Name");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData()
}
listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("Data",listcontainer.innerHTML);
}

function getData() {
    listcontainer.innerHTML=localStorage.getItem("Data");
}
getData();