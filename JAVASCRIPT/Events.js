// onclick events

// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     let un=document.getElementById('user').value;
//     let pw=document.getElementById('pass').value;
//     let div=document.querySelector('div')
//     console.log(`${un} and ${pw}`);
//     console.log(div);
//     // document.write(`${un} and ${pw}`)
//     // div.innerHTML="HELLO WORLD!"
//     div.innerText=(`${un} and ${pw}`)
//     div.style.width="200px"
//     div.style.height="200px"
//     div.style.border="10px groove black";
//     div.style.backgroundColor="gold";
//     div.style.color="darkblue"
// })

// on submit events

// let form=document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//     let un=document.getElementById('user').value;
//     let pw=document.getElementById('pass').value;
//     console.log(`${un} and ${pw}`);
//     e.preventDefault()

// })

//key events

// keyup
// let input=document.querySelector('input')
// input.addEventListener("keyup",()=>{
//     console.log("keyup");
// })

//keydown
// let input=document.querySelector('input')
// input.addEventListener("keydown",()=>{
//     console.log("keydown");
// })

//keypress
// let input=document.querySelector('input')
// input.addEventListener("keypress",()=>{
//     console.log("keypress");
// })


//background change using keys

let input1=document.querySelector('input');
input1.addEventListener('keydown',()=>{
    let rx=Math.ceil(Math.random()*100000).toString(16);
    console.log(rx);
    document.body.style.backgroundColor=`#${rx}`
})