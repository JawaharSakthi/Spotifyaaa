let gp=document.querySelector('.gp');
let p=document.querySelector('.p');
let c=document.querySelector('.c');

gp.addEventListener('click',e=>{
    console.log("Grand Parent Capturing");
})
gp.addEventListener('click',e=>{
    console.log("Grand Parent Bubbling");
})
p.addEventListener('click',e=>{
    console.log("Parent Capturing");
})
p.addEventListener('click',e=>{
    console.log("Parent Bubbling");         
})                                          //capture=true-->It will make the current div to Capture it at the First
c.addEventListener('click',e=>{
    console.log("Child Capturing");
    e.stopPropagation()                     //stops the propagation at the current div
})
c.addEventListener('click',e=>{
    console.log("Child Bubbling");
})
document.addEventListener('click',e=>{
    console.log("Document Capturing");
})
document.addEventListener('click',e=>{
    console.log("Document Bubbling");
})