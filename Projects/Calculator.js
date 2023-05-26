let textbox=document.getElementById('display_place');

function display(num) {
    textbox.value +=num;
}
function calculate() {
    try{
        textbox.value=eval(textbox.value);
    }
    catch(err)
    {
        textbox.value="Invalid Content!";
        setTimeout(() => {
            textbox.value="";
        }, 1500);
    }
}

function Clear() {
    textbox.value="";
}
function del() {
    textbox.value=textbox.value.slice(0,-1);
}