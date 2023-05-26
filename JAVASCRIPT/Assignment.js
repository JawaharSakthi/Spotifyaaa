let create=document.createElement("label")
let text=document.createTextNode("NAME")
create.appendChild(text)

document.body.append(create)

let create2=document.createElement("textarea")
document.body.append(create2)

let create3=document.createElement("label")
let text3=document.createTextNode("PASSWORD")
create3.appendChild(text3)

document.body.append(create3)

let create4=document.createElement("textarea")
document.body.append(create4)

let button=document.createElement("button")
let textButton=document.createTextNode("SUBMIT")
button.appendChild(textButton)

document.body.append(button)



button.addEventListener('click',()=>{
    let msg=document.querySelector('span');
    msg.innerHTML="HELLO WORLD";
    msg.style.color="cyan";
    msg.style.fontSize="50px";
    msg.style.border="2px groove black";
    msg.style.borderRadius="20px";
    msg.style.backgroundColor="pink";
    msg.style.transition="5s";
})

// let table=document.createElement('table');
// let tab1=document.createElement('tr');
// let tab2=document.createElement('td');
// let tab3=document.createElement('td');
// let tab4=document.createElement('td');
// tab1.style.border="5px solid";
// tab2.style.border="5px solid ";
// tab3.style.border="5px solid";
// tab4.style.border="5px solid";
// table.style.border="20px solid black"

// document.body.append(table);
// table.append(tab1);
// table.append(tab2);
// table.append(tab3);
// table.append(tab4);

// tab1.innerHTML="User_Data"
// tab2.innerHTML="Name";
// tab3.innerHTML="Id";
// tab4.innerHTML="Place";

// //Assignment 3x3 Table-Saturday

// let tab5=document.createElement('tr');
// let tab6=document.createElement('td');
// let tab7=document.createElement('td');
// let tab8=document.createElement('td');
// tab5.style.border="5px solid";
// tab6.style.border="5px solid ";
// tab7.style.border="5px solid";
// tab8.style.border="5px solid";
// table.append(tab5);
// table.append(tab6);
// table.append(tab7);
// table.append(tab8);

// // tab5.innerHTML="1";
// tab6.innerHTML="JAWA";
// tab7.innerHTML="1";
// tab8.innerHTML="CBE";


// let tab9=document.createElement('tr');
// let tab10=document.createElement('td');
// let tab11=document.createElement('td');
// let tab12=document.createElement('td');
// tab9.style.border="5px solid";
// tab10.style.border="5px solid ";
// tab11.style.border="5px solid";
// tab12.style.border="5px solid";
// table.append(tab9);
// table.append(tab10);
// table.append(tab11);
// table.append(tab12);

// // tab5.innerHTML="1";
// tab10.innerHTML="SAKTHI";
// tab11.innerHTML="2";
// tab12.innerHTML="BLR";


// let tab5=document.createElement('tr');
// let tab6=document.createElement('td');
// let tab7=document.createElement('td');
// let tab8=document.createElement('td');
// tab5.style.border="5px solid";
// tab6.style.border="5px solid ";
// tab7.style.border="5px solid";
// tab8.style.border="5px solid";
// table.append(tab5);
// table.append(tab6);
// table.append(tab7);
// table.append(tab8);

// // tab5.innerHTML="1";
// tab6.innerHTML="JAWA";
// tab7.innerHTML="1";
// tab8.innerHTML="CBE";

