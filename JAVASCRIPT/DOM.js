let docTitle=document.title;
window.addEventListener("blur",() =>
{
    document.title="Come Back :-(";
})
window.addEventListener("focus",() =>
{
    document.title="DOM CONCEPTS!!";
})
function red() {
    document.body.style.backgroundColor="red";
}
function yellow() {
    document.body.style.backgroundColor="yellow";
}

console.log(document);

console.log(document.URL);

console.log(document.head);

console.log(document.title);


console.log(document.body);

console.log(document.all);

document.body.style.backgroundColor="lightblue"
// get Element by id

let id=document.getElementById('demo');
console.log(id);
id.innerHTML="JAWAHAR SAKTHI!"
id.style.backgroundColor="aqua"
id.style.color="purple"
id.style.fontSize="40px"
id.style.border="10px groove pink"
id.style.fontFamily="cursive"

//get element by class

let rcb=document.getElementsByClassName('rcb')
console.log(rcb);

let csk=Array.from(rcb);
console.log(csk);

rcb[0].style.backgroundColor="purple"
rcb[1].style.backgroundColor="red";
rcb[2].style.backgroundColor="gold";
rcb[3].style.backgroundColor="pink";
rcb[0].style.border="5px groove red";
rcb[1].style.border="5px dotted black";
rcb[2].style.border="5px solid blue";
rcb[3].style.border="5px groove violet";

let tab=document.getElementById('table')


//get element by tag name

let tag=document.getElementsByTagName('pre');
console.log(tag);
console.log(Array.isArray(tag));
let kkr=Array.from(tag);
console.log(kkr);
console.log(Array.isArray(kkr));
tag[0].style.backgroundColor="red";
tag[1].style.backgroundColor="gold";


//queryselector

let query=document.querySelector('.rcb');
console.log(query);
query.style.fontSize="50px";

//query selector all

let queryall=document.querySelectorAll('.rcb')
console.log(queryall);
queryall[3].style.color="purple"
console.log(Array.isArray(queryall));
let querytoArray=Array.from(queryall)
console.log(querytoArray);
console.log(Array.isArray(querytoArray));

//DOM METHODS
// We have 5 methods in DOM

// getElementById
// In JS the method called getElementById which is use0d to target HTML document which has element targeted by ID

// getElementsByClassName
// In JS method called getElementsByClassName which is used to target the HTML document which has <u>set of elements</u> which is targeted by class name
// getElementsByClassName returns the elements or values in terms of html collections

// getElementsByTagName
// In JS method called getElementsByTagName which is used to target the HTML document which has only a tagname(It is not targeted by ID and Class)
// getElementsByTagName returns the value in terms of html collections

// querySelector
// querySelector works like CSS selector 
// In JS method called querySelector which is used to target HTML document and it targets first element 

// querySelectorAll
// In JS method called querySelectorAll which is used to target HTML document and it targets all the elements of same class name
// querySelectorAll returns the value in-terms of node list.

//7/4/2023

//create element without using HTML
let create=document.createElement('h1');
console.log(create);
//adding id and class name 
create.className="demo";
create.id="test";

//inserting the text
let text=document.createTextNode('HELLO WORLD!')
console.log(text);

//insert the content inside the tag
create.appendChild(text);

//gives the output in the document interface
document.body.append(create);
create.style.backgroundColor="yellow";

let msd=document.getElementById('csk');
console.log(msd);
msd.innerHTML="JADDU"
msd.innerText="MOEEN ALI"
// msd.innerHTML="<h1>JADEJA</h1>" //shows only content
// msd.innerText="<h1>RUTURAJ GAIKWAD</h1>" //shows content along with tag

//append
//Append is used to display the value of content in the user interface like document of HtML

//appendChild
//Append Child is used to insert the content in the HTML tag!

// Difference between innerHTML and innerText

// innerText
// By using innerText we can display a content of HTML with a tag
//example
//     <div>
//         <p>Para</p>
//     </div>
//     o/p:<p>Para</p>

//innerHTML
// By using innerHTML we can display only a content of the HTML element
//example
//     <div>
//         <p>Para</p>
//     </div>
//     o/p:Para